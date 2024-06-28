# generate.py
#
# Regenerate the JSON for all the snippets.
#
# Bandwidth and space is cheap. Caches are great. We'll just shove everything
# into one .js file.
#
# The expected output:
#
# languages = {
#   shortname: {
#     displayname, descriptions, attributes, categories
#     }
# }

from glob import glob
import os
import re
import json

# Language objects
LANGUAGES = dict()

# Categories and their involved languages. Derived.
CATEGORIES = dict()

kvrx = re.compile(r'(\w+):\s*(.*?)\s*$')

# Brief utility stuff
def basename(filepath):
    parts = os.path.split(filepath)
    basename = parts[-1]
    if basename == "":
        basename = parts[-2]
    if '.' in basename:
        basename, _ = basename.split('.')
    return basename


# Languages have:
#
# display name: "Javascript"
# shortname: "js"
# extension: "js"
# class: "javascript" (for highlight.js)
#
# snippets:
#   categoryname1:
#     topicname1: (body of file)
#   categoryname2:
#     topicname2: (body of file)
class Language(object):
    def __init__(self, filepath):
        self.shortname = basename(filepath)

        with open(filepath, 'r', encoding="utf-8") as fin:
            file = fin.read()

        lines = file.splitlines()
        self.displayname = lines.pop(0)

        while (line := lines.pop(0)) != "":
            m = kvrx.match(line)
            if m:
                setattr(self, m[1], m[2])

        self.description = "\n".join(lines)

        # snippets: a dict of (category: dict(topic: <file>))
        self.snippets = dict()

    def addSnippet(self, category, topic, body):
        if category not in self.snippets:
            self.snippets[category] = dict()

        self.snippets[category][topic] = body

    def todict(self):
        return self.__dict__


def readLanguages():
    for filepath in glob("languages/*.txt"):
        lang = Language(filepath)
        LANGUAGES[lang.shortname] = lang


def readTopics(category, topic):
    print(f"Reading topic {topic}...")
    for snippet in glob(f"code/{category}/{topic}/*.*"):
        shortname = basename(snippet)
        print(f"Found a snippet for {shortname}")
        if shortname in LANGUAGES:
            with open(snippet, 'r', encoding="utf-8") as fin:
                body = fin.read()
                LANGUAGES[shortname].addSnippet(category, topic, body)

def readCategory(category):
    print(f"Reading category {category}")
    for path in glob(f"code/{category}/*"):
        if os.path.isdir(path):
            topic = basename(path)
            readTopics(category, topic)


def readSnippets():
    print(f"Reading all categories ...")
    for path in glob("code/*"):
        if os.path.isdir(path):
            category = basename(path)
            readCategory(category)

def buildData():
    languages = dict()
    for shortname, language in LANGUAGES.items():
        languages[shortname] = language.todict()
    return dict(
      languages = languages
    )

def dumpAll(tofile):
    data = buildData()
    with open(tofile, 'w', encoding="utf-8") as fout:
        fout.write("// Auto-generated, do not edit\r\n")
        fout.write("const GENERATED = ")
        json.dump(data, fout)
        fout.write(';')

def main():
    readLanguages()
    readSnippets()
    buildData()
    dumpAll("pages/_generated.js")

if __name__ == "__main__":
    main()
