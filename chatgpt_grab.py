#!/usr/bin/env python3

import readline
import openai
import os
import glob
import re

path = os.path.expanduser("~/.openai.key")
with open(path, 'r') as fin:
    openai.api_key = fin.read().strip()

def ask(prompt):
    response = openai.Completion.create(
        engine="gpt-4-turbo",
        prompt=prompt,
        max_tokens=4096
    )

    return response['choices'][0]['text'].strip()

def basename(filepath):
    parts = os.path.split(filepath)
    basename = parts[-1]
    if basename == "":
        basename = parts[-2]
    if '.' in basename:
        basename, _ = basename.split('.')
    return basename

lfiles = glob.glob("languages/*.txt")

languages = []

for fn in lfiles:
    lang = basename(fn)
    if lang != "INFO":
        languages.append(lang)

indentrx = re.compile(r'^(\s+)')
blankrx = re.compile(r'^\s*$')


def qprint(heredoc):
    lines = heredoc.splitlines()
    if blankrx.match(lines[0]):
        lines = lines[1:]
    if blankrx.match(lines[-1]):
        lines = lines[:-1]

    mindent = 1000
    for line in lines:
        m = indentrx.match(line)
        if m and len(m[1]) < mindent:
            mindent = len(m[1])

    print("--------------")
    for line in lines:
        if len(line) >= mindent:
            print(line[mindent:])
        else:
            print(line)
    print("--------------")


def help():
    qprint("""
        ask (prompt) - ask a question, view result.
        try (prompt) - try a prompt, save output to buffer.
        load (category/topic) - load the python version of a topic into buffer.
        save (filename) - save the buffer to a file.
        test (language) - ask openai to convert the buffer to a different language.
        generate (category/topic) (languages or 'all') - Try to generate snippets for languages.
        languages - view all defined languages.
    """)


def main():
    help()
    savedout = None
    savedprompt = None
    while line := input("> "):
        cmd, rest = line, ""
        if ' ' in line:
            cmd, rest = cmd.split(" ", 1)

        if cmd == 'try':
            savedprompt = rest
            savedout = ask(rest)
            qprint(savedout)
        elif cmd == 'save':
            with open(rest, 'w', encoding='utf-8') as fout:
                fout.write(savedout)
        elif cmd == 'ask':
            qprint(ask(rest))
        elif cmd == 'help':
            help()
        else:
            qprint("Unknown command - try 'help' ")

if __name__ == "__main__":
    main()
