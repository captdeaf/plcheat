# pllib.py
#
# Utilities for plcheat.

import html
from glob import glob
import os
import re
import json
import time


def readfile(filepath, strip=True, split=False):
    with open(filepath, 'r', encoding="utf-8") as fin:
        body = fin.read()
        if strip:
            body = body.strip()

        if split:
            return body.splitlines()
        return body


# os.path.basename gets confused with trailing /s
def basename(filepath):
    parts = os.path.split(filepath)
    basename = parts[-1]
    if basename == "":
        basename = parts[-2]
    if '.' in basename:
        basename = ' '.join(basename.split('.')[:-1])
    return basename


class Language(object):
    """
    Languages: (code/<category>/LANGS/*.txt)
    Languages have: (example)
    
    display name: "Javascript"
    name: "js"
    extension: "js"
    css: "javascript" (for highlight.js)
    
    snippets:
        regexps: (body of file)
        fileio: (body of file)
    """

    kvrx = re.compile(r'(\w+):\s*(.*?)\s*$')
    def __init__(self, filepath):
        self.name = basename(filepath)

        lines = readfile(filepath, split=True)
        self.displayname = lines.pop(0)
        self.comment = '#|//'

        while len(lines) > 0 and (line := lines.pop(0)) != "":
            m = self.kvrx.match(line)
            if m:
                setattr(self, m[1], m[2])

        self.description = "\n".join(lines)
        self.commentre = re.compile(f"^\\s*(?:{self.comment})\\s+(.*)$")

        # snippets: a dict of (category: dict(topic: <file>))
        self.snippets = dict()

    def normalize(self, words):
        words = re.sub(f"\\.{self.ext}", "", words)
        return [re.sub(r'[^a-z]+', '', word.lower().strip()) for word in words.split()]


    def add_snippet(self, topic, path):
        with open(path, 'r', encoding="utf-8") as fin:
            self.snippets[topic] = fin.read()

    def populate_tags(self, category, htmlcode):
        """
        1) Convert all comments to <a tag="{self.name}-...">
        2) Create a dictionary of {comment words: anchor tag}
        """

        tags = dict()

        ret = []

        for line in htmlcode.splitlines():
            m = self.commentre.search(line)
            if m:
                normalized = self.normalize(m[1])
                normalized_tagname = "-".join(normalized)
                tagname = f"{self.name}-{normalized_tagname}"
                tags[tagname] = True
                ret.append(f'<a tag="{tagname}">{line}</a>')
            else:
                ret.append(line)

        self.tags = list(tags.keys())

        return "\n".join(ret)


    def build_snip(self, category, snip):
        topic, code = snip
        code = html.escape(code)
        # code = self.populate_tags(category, code)
        return code

    def convert_html(self, category):
        snips = list(sorted(self.snippets.items(), key= lambda x: x[0]))
        # Override snippets.
        self.snippets = dict()
        for (topic, code) in snips:
            code = html.escape(code)
            self.snippets[topic] = code

    dict_ignore = ['commentre', 'description']


class Category(object):

    def __init__(self, directory, snippets=False):
        self.name = basename(directory)
        self.languages = dict()
        self.topics = dict()

        for file in glob(f"{directory}/LANGS/*.txt"):
            language = Language(file)
            self.languages[language.name] = language

        print(f"Category {directory} with {len(self.languages)} languages.")

        self.displayname = readfile(f"{directory}/INFO.txt", split=True)[0]

        for path in glob(f"{directory}/*"):
            if os.path.isdir(path) and path.islower():
                self.read_topic(path, snippets=snippets)

    def read_topic(self, directory, snippets=True):
        # Read in a topic: code/<category>/<topic>/*.*
        topic = basename(directory)
        print(f"Reading topic {self.name}/{topic}")
        displayname = topic

        # Aliases - first line is display name, too.
        aliases = [topic]
        if os.path.exists(f"{directory}/ALIASES.txt"):
            lines = readfile(f"{directory}/ALIASES.txt", split=True)
            displayname = lines[0]
            for line in lines:
                aliases.append(line)

        self.topics[topic] = dict(
            displayname=displayname,
            aliases=aliases,
            name=topic,
        )

        if snippets:
            # Now read in all examples and store in their Language object.
            for file in glob(f"{directory}/{topic}-*.*"):
                topiclang = basename(file)
                if basename(file) in ['INFO']:
                    continue
                _, lang = topiclang.split('-', 1)
                self.languages[lang].add_snippet(topic, file)

    def convert_html(self):
        for language in self.languages.values():
            language.convert_html(self)


def read_categories(snippets=False):
    categories = dict()
    for path in glob('code/*'):
        if os.path.isdir(path):
            category = Category(path, snippets=snippets)
            categories[category.name] = category

    return categories
