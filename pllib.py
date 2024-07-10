# pllib.py
#
# Utilities for plcheat.

import html
from glob import glob
import os
import re
import yaml


def readfile(filepath, strip=True, split=False):
    with open(filepath, 'r', encoding="utf-8") as fin:
        body = fin.read()
        if strip:
            body = body.strip()

        if split:
            return body.splitlines()
        return body

class HasMeta(object):
    def add_meta(self, metakey, value):
        if not hasattr(self, 'metadata'):
            self.metadata = dict()
        self.metadata[metakey] = value
        setattr(self, metakey, value)

    def save_meta(self, filepath=None):
        if not filepath:
            filepath = self.filepath
        if "yaml" not in filepath:
            filepath = f"{filepath}/META.yaml"
        dirname = os.path.dirname(filepath)
        if not os.path.isdir(dirname):
            os.mkdir(dirname)

        with open(filepath, 'w', encoding='utf-8') as fout:
            fout.write(yaml.dump(self.metadata))

    def load_meta(self, filepath):
        if "yaml" not in filepath:
            filepath = f"{filepath}/META.yaml"
        if not os.path.exists(filepath):
            self.metadata = dict()
            return

        metabody = readfile(filepath, strip=False, split=False)
        self.metadata = yaml.safe_load(metabody)

        for k, v in self.metadata.items():
            setattr(self, k, v)


# os.path.basename gets confused with trailing /s
def basename(filepath):
    parts = os.path.split(filepath)
    basename = parts[-1]
    if basename == "":
        basename = parts[-2]
    if '.' in basename:
        basename = ' '.join(basename.split('.')[:-1])
    return basename


class Language(HasMeta):
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

    dict_ignore = ['commentre', 'description', 'filepath', 'metadata']

    def __init__(self, filepath):
        self.name = basename(filepath)
        self.filepath = filepath

        lines = readfile(filepath, split=True)
        self.displayname = lines.pop(0)
        self.comment = '#|//'

        self.load_meta(filepath)

        self.commentre = re.compile(f"^\\s*(?:{self.comment})\\s+(.*)$")

        # snippets: a dict of (category: dict(topic: <file>))
        self.snippets = dict()

    def normalize(self, words):
        words = re.sub(f"\\.{self.ext}", "", words)
        return [re.sub(r'[^a-z]+', '', word.lower().strip()) for word in words.split()]


    def add_snippet(self, topic, snippet):
        self.snippets[topic] = snippet

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


class Topic(HasMeta):

    dict_ignore = ['filepath', 'metadata', 'category', 'snippets']

    def __init__(self, category, directory):
        self.filepath = directory
        self.category = category
        self.name = basename(directory)
        self.displayname = self.name
        self.snippets = dict()

        # Update as needed.
        self.load_meta(directory)

    def add_snippet(self, lang, snippet):
        self.snippets[lang] = snippet

class Category(HasMeta):

    dict_ignore = ['filepath', 'metadata']

    def __init__(self, directory):
        self.filepath = directory
        self.name = basename(directory)
        self.languages = dict()
        self.topics = dict()

        self.load_meta(directory)

        for file in glob(f"{directory}/LANGS/*.yaml"):
            language = Language(file)
            self.languages[language.name] = language

    def new_topic(self, topicname):
        print(f" topic path: {self.filepath}/{topicname}")
        return Topic(self, f"{self.filepath}/{topicname}")


    def read_topics(self, snippets=False):
        count = 0
        for path in glob(f"{self.filepath}/*"):
            if os.path.isdir(path) and path.islower():
                count += self.read_topic(path, snippets=snippets)

        return count

    def read_topic(self, directory, snippets=True):
        # Read in a topic: code/<category>/<topic>/*.*
        topic = Topic(self, directory)

        self.topics[topic.name] = topic

        count = 0

        if snippets:
            # Now read in all examples and store in their Language object.
            for file in glob(f"{directory}/{topic.name}-*.*"):
                topiclang = basename(file)
                _, lang = topiclang.split('-', 1)
                with open(file, 'r', encoding="utf-8") as fin:
                    snippet = fin.read()
                self.languages[lang].add_snippet(topic.name, snippet)
                topic.add_snippet(lang, snippet)
                count += 1

        return count

    def save_snippet(self, language, topic, snippet):
        filepath = f"{self.filepath}/{topic.name}/{topic.name}-{language.name}.{language.ext}"
        print(f"Saving snippet to {filepath}")
        with open(filepath, 'w', encoding="utf-8") as fout:
            fout.write(snippet)

        # Refresh the in-memory topics+languages.
        language.add_snippet(topic.name, snippet)
        topic.add_snippet(language.name, snippet)

    def clear_snippet(self, language, topic):
        filepath = f"{self.filepath}/{topic.name}/{topic.name}-{language.name}.{language.ext}"
        print(f"Clearing snippet {filepath}")
        os.remove(filepath)

        # Refresh the in-memory topics+languages.
        del language.snippets[topic.name]
        del topic.snippets[language.name]

    def convert_html(self):
        for language in self.languages.values():
            language.convert_html(self)


def read_categories(snippets=False):
    categories = dict()
    for path in glob('code/*'):
        if os.path.isdir(path):
            category = Category(path)
            categories[category.name] = category
        count = 0
        for category in categories.values():
            count += category.read_topics(snippets=snippets)
        if count > 0:
            print(f"Category {category.name}: {len(category.languages)} languages, {count} snippets")

    return categories
