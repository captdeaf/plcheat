#!/usr/bin/env python3

import readline
from openai import OpenAI
import os
from glob import glob
import re

def basename(filepath):
    parts = os.path.split(filepath)
    basename = parts[-1]
    if basename == "":
        basename = parts[-2]
    if '.' in basename:
        basename, _ = basename.split('.')
    return basename


kvrx = re.compile(r'(\w+):\s*(.*?)\s*$')

DEFAULT_LANGUAGE = 'python'


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

        self.ext = ""
        self.categories = ""
        self.css = ''

        with open(filepath, 'r', encoding="utf-8") as fin:
            file = fin.read()

        lines = file.splitlines()
        self.displayname = lines.pop(0)

        while len(lines) > 0 and (line := lines.pop(0)) != "":
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
    languages = dict()
    for filepath in glob("languages/*.txt"):
        if 'INFO' not in filepath:
            lang = Language(filepath)
            languages[lang.shortname] = lang

    return languages

TOPIC_QUESTION = "Generate a {default} script that demonstrates common examples of {request}. Respond with only the code."

CONVERT_QUESTION = "Convert this {default} script to {target}, demonstrating the same features if you can, and keeping the same comments. Respond with only the code."

api_key = None
path = os.path.expanduser("~/.openai.key")
with open(path, 'r') as fin:
    api_key = fin.read().strip()

client = OpenAI(api_key=api_key)

LANGUAGES = readLanguages()

CATEGORY_LANGUAGES = dict()

for language in LANGUAGES.values():
    for category in language.categories.strip().split():
        if category not in CATEGORY_LANGUAGES:
            CATEGORY_LANGUAGES[category] = []
        CATEGORY_LANGUAGES[category].append(language)

def request(prompt):
    return "This is an example of code blah blah"
    response = client.chat.completions.create(
        model="gpt-4.0-turbo",
        messages=[dict(role='user', content=prompt)],
    )

    return response.choices[0].message.content.strip()

blankrx = re.compile(r'^\s*$')


def qprint(*docs):
    print("--------------")
    for doc in docs:
        lines = doc.splitlines()
        if blankrx.match(lines[0]):
            lines = lines[1:]
        if blankrx.match(lines[-1]):
            lines = lines[:-1]

        print("\n".join(lines))
        print("--------------")


EXAMPLE = """
Example usage, let's make examples for interacting with reading and writing files.

    # Find a topic.
    dev basic file reading and writing, including utf-8 examples and json examples

    # Viewing python code. Decide it looks good. Name it fileio
    topic programming/fileio

    # How convert it and compare?
    convert javascript

    # View javascript, decide we trust it for the rest.
    convert all

    # Check comments
    check

    # All good, let's save.
    save
"""


HELP = f"""
The idea here is to use openai/chatgpt to generate snippets for multiple languages.

Quick commands:
    ask (prompt) - ask a question, view result. Doesn't save.
    reset - start over completely.

New Snippets:
    dev (request) - get the python code for a request.
    fdev (request) - Make a request, but don't use the TOPIC_QUESTION template.
    default (language) - use a different language as a base instead of python.
    topic (category/topic) - define which topic this is, for plcheat.
    review ('' or language) - see what's known so far, or review the code for a given language.
    clear ('' or languages) - remove the selected (or all) languages.
    convert (languages) - ask openai to convert the buffer to a different
                          language (caches). If one language, it displays the code.
    check - Compare comments. In theory, many should overlap.
    Otherwise just caches.
    save (language or 'all') - Save cached snippets to files.

Adding a new language for old snippets:
    load (category/topic) - load the python version of a topic into buffer. This performs a reset first.
    convert (language) - ask openai to convert the buffer to a different language (caches).
    save (topic or 'all') - Save cached snippets to files.

Help:
    example - View an example.
    help - this printout.
    languages - view all defined languages.
"""


def printLanguages():
    out = []
    for category, languages in CATEGORY_LANGUAGES.items():
        out.append(category + ":")
        names = [l.shortname for l in languages]
        for name in names:
            out.append('    ' + name)
    qprint("\n".join(out))


def getLanguage(pick):
    for lang in LANGUAGES.values():
        if lang.shortname.startswith(pick):
            return lang

    print(f"No match for {pick}. Aborting.")
    return None


def getLanguages(lpicks):
    picks = lpicks.strip().split()
    langs = {}
    for pick in picks:
        lang = getLanguage(pick)
        if lang is None:
            return None
        langs[lang.shortname] = lang
    return langs.values().sort(key=lambda l: l.shortname)


CACHED = dict()

def review(language):
    if not language or len(language) < 1:
        out = ["Review:", f"    Default Language: {DEFAULT_LANGUAGE}", ""]
        if len(CACHED) < 1:
            out.append("    No cached code.")
        else:
            out.append("    Caches:")
            for lang in CACHED.keys():
                out.append(f"        {lang}")
        qprint("\n".join(out))
        return

    lang = getLanguage(language)
    if not lang: return
    if lang.shortname not in CACHED:
        qprint(f"Code not generated for language {lang.shortname}.")
    else:
        qprint(f"<<<< {lang.shortname} generated code", CACHED[lang.shortname])


def convert(languages):
    langs = []
    if languages == 'all':
        langs = LANGUAGES
    elif len(languages) > 0:
        langs = getLanguages(languages)

    # TODO: I was here


def main():
    global DEFAULT_LANGUAGE
    qprint(HELP)

    last = []

    try:
        while (line := input("> ")) is not None:
            cmd, rest = line, ""
            if ' ' in line:
                cmd, rest = cmd.split(" ", 1)
                rest = rest.strip()

            if cmd == 'ask':
                qprint(request(rest))
            elif cmd  == 'clear':
                if rest == '':
                    CACHED.clear()
                    qprint("Cache cleared")
                else:
                    out = []
                    langs = getLanguages(rest)
                    for lang in langs:
                        if lang.shortname in CACHED:
                            CACHED.pop(lang.shortname)
                            out.append(f"Cleared {lang.shortname}")
                    if len(out) < 1:
                        qprint("No languages cleared from cache")
                    else:
                        qprint("\n".join(out))
                            

            elif cmd == 'dev':
                CACHED[DEFAULT_LANGUAGE] = request(TOPIC_QUESTION.format(default=DEFAULT_LANGUAGE, request=rest))
                qprint('<<<< ' + DEFAULT_LANGUAGE + ' generated code', CACHED[DEFAULT_LANGUAGE])
            elif cmd == 'fdev':
                CACHED[DEFAULT_LANGUAGE] = request(request=rest)
                qprint('<<<< ' + DEFAULT_LANGUAGE + ' generated code', CACHED[DEFAULT_LANGUAGE])
            elif cmd == 'default':
                pick = getLanguage(rest)
                if pick is not None:
                    DEFAULT_LANGUAGE = pick.shortname
                    qprint(f"New default language: {DEFAULT_LANGUAGE}")
            elif cmd == 'review':
                review(rest)
            elif cmd == 'convert':
                convert(rest)
            elif cmd == 'save':
                with open(rest, 'w', encoding='utf-8') as fout:
                    fout.write(savedout)


            elif cmd == 'help':
                qprint(HELP)
            elif cmd == 'example':
                qprint(EXAMPLE)
            elif cmd == 'languages':
                printLanguages()
            else:
                qprint("Unknown command - try 'help' ")
    except EOFError:
        print("")
        pass

if __name__ == "__main__":
    main()
