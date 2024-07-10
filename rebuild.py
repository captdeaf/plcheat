# rebuild.py
#
# Rebuild the JSON for all the categories, languages, and snippets.
#
# Bandwidth and space are cheap. Caches are great. We'll just shove everything
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
        ret = dict()
        ret.update(o.__dict__)
        for ign in getattr(o, "dict_ignore", []):
            if ign in ret:
                ret.pop(ign)
        return ret



def build_data():
    categories = read_categories(True)
    for category in categories.values():
        category.convert_html()

    data = dict(
        buildtime = int(time.time()),
        generatetime = int(os.path.getmtime(__file__) + os.path.getmtime('pllib.py')),
        categories = categories,
    )

    return data


def main():
    data = build_data()
    with open('pages/_generated.js', 'w', encoding='utf-8') as fout:
        fout.write("// Auto-Generated, do not edit\r\n")
        fout.write("const GENERATED = ")
        json.dump(data, fout, indent=2, cls=Encoder)
        fout.write(";")


if __name__ == '__main__':
    main()
