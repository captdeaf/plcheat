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

    alldata = dict(
        buildtime = int(time.time()),
        generatetime = int(os.path.getmtime(__file__) + os.path.getmtime('pllib.py')),
        categories = categories,
    )

    return alldata


def main():
    alldata = build_data()
    with open('pages/_generated.js', 'w', encoding='utf-8') as fout:
        fout.write("// Auto-Generated, do not edit\r\n")
        fout.write("const GENERATED = ")
        json.dump(alldata, fout, indent=2, cls=Encoder)
        fout.write(";")


if __name__ == '__main__':
    main()
