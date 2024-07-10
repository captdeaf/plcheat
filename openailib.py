# openailib.py
#
# Utility functions used across several scripts.

from openai import OpenAI
import os
import re

api_key = None
path = os.path.expanduser("~/.openai.key")
with open(path, 'r') as fin:
    api_key = fin.read().strip()

client = OpenAI(api_key=api_key)


def request(prompt, messages=[]):
    # messages is user, openai
    allmessages = list()
    if messages:
        isuser = True
        for message in messages:
            if isuser:
                allmessages.append(dict(
                    role='user',
                    content=message
                ))
            else:
                allmessages.append(dict(
                    role='system',
                    content=message
                ))
    allmessages.append(dict(
        role='user',
        content=prompt
    ))
    # return "This is an example of code blah blah"
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=allmessages,
    )

    return response.choices[0].message.content.strip()

def parse_openai_file(body):
    m = re.search(r'```\w*\s([\S\s]*)```', body)
    if m:
        return m[1]
    return body
