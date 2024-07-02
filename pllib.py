# pllib.py
#
# Utilities for plcheat.

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

        while len(lines) > 0 and (line := lines.pop(0)) != "":
            m = self.kvrx.match(line)
            if m:
                setattr(self, m[1], m[2])

        self.description = "\n".join(lines)

        # snippets: a dict of (category: dict(topic: <file>))
        self.snippets = dict()

    def add_snippet(self, topic, path):
        with open(path, 'r', encoding="utf-8") as fin:
            self.snippets[topic] = fin.read()

    def todict(self):
        return self.__dict__


class Category(object):

    def __init__(self, directory, snippets=False):
        self.name = basename(directory)
        self.languages = dict()
        self.aliases = dict()
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
        self.aliases[topic] = topic
        if os.path.exists(f"{directory}/ALIASES.txt"):
            lines = readfile(f"{directory}/ALIASES.txt", split=True)
            displayname = lines[0]
            for line in lines:
                self.aliases[' '.join(line.lower().split())] = topic

        if snippets:
            # Now read in all examples and store in their Language object.
            for file in glob(f"{directory}/{topic}-*.*"):
                topiclang = basename(file)
                if basename(file) in ['INFO']:
                    continue
                _, lang = topiclang.split('-', 1)
                self.languages[lang].add_snippet(topic, file)


def read_categories(snippets=False):
    categories = dict()
    for path in glob('code/*'):
        if os.path.isdir(path):
            category = Category(path, snippets=snippets)
            categories[category.name] = category

    return categories
