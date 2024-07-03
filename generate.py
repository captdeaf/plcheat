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

import html
from glob import glob
import os
import sys
import re
import json
import time

sys.path.append('')
from pllib import read_categories

class Encoder(json.JSONEncoder):
    def default(self, o):
        return o.__dict__


def build_data():
    categories = read_categories(True)

    data = dict(
        buildtime = int(time.time()),
        generatetime = int(os.path.getmtime(__file__) + os.path.getmtime('pllib.py')),
        categories = categories,
    )

    return data


def build_snip(category, language, snip):
    topic, code = snip
    return """
<a tag="{topic}">
<h5>{displayname}</h5><pre><code class="language-{css}">
{codehtml}
</code></pre>
</a>
""".format(
        topic=topic,
        displayname=category.topics[topic],
        css=language.css,
        codehtml=html.escape(code),
    )


def convert_html(data):
    sep = "\n\n---------------------\n\n"

    for category in data['categories'].values():
        for language in category.languages.values():
            snips = list(sorted(language.snippets.items(), key= lambda x: x[0]))
            # Override snippets.
            language.snippets = sep.join([build_snip(category, language, snip) for snip in snips])


def main():
    data = build_data()
    convert_html(data)
    with open('pages/_generated.js', 'w', encoding='utf-8') as fout:
        fout.write("// Auto-Generated, do not edit\r\n")
        fout.write("const GENERATED = ")
        json.dump(data, fout, indent=2, cls=Encoder)
        fout.write(";")


if __name__ == '__main__':
    main()
