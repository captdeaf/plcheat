#!/usr/bin/env python3

import yaml
import json
import sys

sys.path.append('')
from pllib import read_categories, basename, Category, Language, Topic
from openailib import request, parse_openai_file
from util import ask, yorn, err

CATEGORIES = read_categories(True)

def reload_categories():
    global CATEGORIES
    CATEGORIES = read_categories(True)

JSON_RESPONSE = 'Please respond to this question only with answers, formatted as a JSON array of strings.'
GENERATE_REQUEST = 'Please generate the given examples in {lang}, with the raw code in a single file, annotated with comments. Respond only with the contents of the file.'

def pick_language(category, wanted):
    wanted = wanted.lower()
    for lang in category.languages.keys():
        if lang.startswith(wanted):
            return category.languages[lang]
    return None

def print_languages(category):
    print("All Languages:   (only use the left name)")
    for language in category.languages.values():
        print(f"  {language.name.rjust(10)}: {language.displayname}")

def print_code(language, code):
    print("------------------------------------")
    print("---- " + language.name)
    print("------------------------------------")
    print(code)
    print("------------------------------------")

# # Generating a new topic and set of language implementations.
def topic_get_metadata(topic):
    
    print(f"** Obtain metadata for {topic.category.name}/{topic.name}")
    topic.add_meta("displayname", ask("  Display Name"))
    topic.add_meta("aliases", ask("  Aliases"))
    return


def topic_fresh_openai(topic):
    print(f"** Generating OpenAI content for {topic.category.name}/{topic.name}")
    while True:
        want = ask(  "What would you like to know?")
        topic.add_meta('want', want)
        question = topic.category.openai_question.format(want=want)
        question = ask("  Question to ask OpenAI", question)
        question = JSON_RESPONSE + ' ' + question
        topic.add_meta('question', question)

        try:

            jsonbody = request(question).strip("`")
            jsonops = json.loads(jsonbody)

            print(yaml.dump(jsonops))

            if yorn("Does this look good?", True):
                topic.add_meta("operations", jsonops)
                return
            elif yorn("Should I save as a string to edit?", False):
                topic.add_meta("operations", jsonbody)
                return
        except:
            print("Error parsing openai's output")
            pass

        if not yorn("Try again?", True):
            print("Discarded")
            sys.exit(0)
            return

def cmd_topic(args):
    def usage():
        print("""Usage:

{sys.argv[0]} topic <category> <topic>

e.g: {sys.argv[0]} topic programming strings

If category does not exist, command fails.
If topic does not exist, a new one may be created.
If topic does exist, you get dumped into topic commands.
""")

    if len(args) != 2:
        usage()

    catname, topicname = args[0], args[1]

    if catname not in CATEGORIES:
        err(f"Category {category} does not exist. Try using 'category' command.")
        return

    category = CATEGORIES[catname]

    new = False
    topic = None

    if topicname in category.topics:
        new = False
        topic = category.topics[topicname]
    else:
        topic = category.new_topic(topicname)
        new = True

    changed = False

    if new or yorn("Redo Meta?", False):   
        topic_get_metadata(topic)
        changed = True

    if new or yorn("Redo openai question?", False):
        topic_fresh_openai(topic)
        changed = True

    if changed and yorn("Save changes to meta?", True):
        topic.save_meta()
        print("Saved")

    topic_command_loop(topic, changed)


def topic_command_loop(topic, metachanged):
    languages = topic.category.languages

    operations = topic.operations

    print("** Topic Generating")
    print("-----------------")
    print(yaml.dump(operations))
    print("-----------------")

    if not yorn("Does this look good?"):
        print("TBD")
        return

    def usage():
        print(f"""
Usage: Generate for different languages

Command:
  ?, help, usage   - show this screen
  languages        - show a list of all languages in this category.

  operations      - Show the list of operations for openai to generate from.

  # Existing code:
  review              - see which languages have saved code.
  review <language>   - review saved code for a given language.
  delete <language>    - remove a snippet for a given language.

  generate <language>   - generate for a given language.
  generate all          - generate for all languages for the category.
  generate unknown      - generate for all languages w/o snippets for the category.
  check               - List newly generated snippets.
  check <language>    - View newly generated snippet for the language.
  save <language>     - Save a snippet
  save all            - Save all snipets

  quit, ^D         - visit the moon
""")

    usage()
    topic.cache = dict()
    while True:
        cmd, arg = ask("cmd"), ""
        if cmd is None: return
        if ' ' in cmd:
            cmd, arg =cmd.split(' ', 1)
        cmd = cmd.strip().lower()
        if cmd in ['']:
            continue
        elif cmd in ["?", "help", "usage"]:
            usage()

        # Existing snippets:
        elif "review".startswith(cmd):
            topic_review(topic, arg)
        elif "delete".startswith(cmd):
            topic_delete(topic, arg)

        # New snippets:
        elif "generate".startswith(cmd):
            topic_generate(topic, arg)
        elif "save".startswith(cmd):
            topic_save(topic, arg)
        elif "check".startswith(cmd):
            topic_save(topic, arg)

        # other
        elif "languages".startswith(cmd):
            print_languages(topic.category)
        elif "operations".startswith(cmd):
            print("** Topic Generating")
            print("-----------------")
            print(yaml.dump(topic.operations))
            print("-----------------")


def topic_delete(topic, arg):
    if not arg:
        if len(topic.snippets) == 0:
            print(f"No generated snippets for {topic.name}")

    if arg in ['all']:
        if yorn("Are you sure you want to delete all snippets?", False):
            print(f"Deleting {topic.name} for all languages ...")
            keys = list(topic.snippets.keys())
            for lang in keys:
                language = topic.category.languages[lang]
                print(f"  {lang}")
                topic.category.clear_snippet(language, topic)
        return


    language = pick_language(topic.category, arg)
    if not language:
        print(f"Unknown language '{arg}'")
        return
    
    if language.name in topic.snippets:
        print(f"Deleting language {language.name} snippet for {topic.name}")
        topic.category.clear_snippet(language, topic)
        return


def topic_review(topic, arg):
    if not arg or arg in ['all']:
        if len(topic.snippets) == 0:
            print(f"No generated snippets for {topic.name}")
        else:
            print("Generated languages:")
            for lang in topic.snippets.keys():
                print(f"  {lang}")
        return


    language = pick_language(topic.category, arg)
    if not language:
        print(f"Unknown language '{arg}'")
        return
    
    if language.name not in topic.snippets:
        print(f"Snippet in {language.name} not generated for {topic.name}")
        return

    print_code(language, topic.snippets[language.name])

CACHED = dict()

def topic_generate_one(topic, language, standalone=True):
    print(f"Generating {language.displayname} code for {topic.displayname} ...")
    try:
        code = request(GENERATE_REQUEST.format(lang=language.displayname),
                       messages=[
                           topic.question,
                           yaml.dump(topic.operations),
                       ])

        code = parse_openai_file(code)

        if standalone:
            print_code(language, code)

        CACHED[language.name] = code
    except:
        err(f"Unable to complete generation of {language.name} for {topic.name}")


def topic_check(topic, arg):
    if not arg:
        print("Usage: save <language> or save <all>")
        return

    if arg in ['all']:
        print(f"All languages cached:")
        for lang in CACHED.keys():
            print(f"  {lang}")
        return


    language = pick_language(topic.category, arg)
    if not language:
        print(f"Unknown language '{arg}'")
        return

    if language.name not in CACHED:
        print(f"Language {language.name} has no generated snippet.")

    print_code(language, CACHED[language.name])


def topic_save(topic, arg):
    if not arg:
        print("Usage: save <language> or save <all>")
        return

    if arg in ['all']:
        print(f"Saving {topic.name} snippets for all languages ...")
        for lang in CACHED.keys():
            language = topic.category.languages[lang]
            topic.category.save_snippet(language, topic, CACHED[lang])

        CACHED.clear()
        return


    language = pick_language(topic.category, arg)
    if not language:
        print(f"Unknown language '{arg}'")
        return

    if language.name not in CACHED:
        print(f"Language {language.name} has no generated snippet.")

    topic.category.save_snippet(language, topic, CACHED[language.name])
    del CACHED[language.name]


def topic_generate(topic, arg):
    if not arg:
        if len(topic.snippets) == 0:
            print("Usage: generate <language> or generate <all>")
        return

    if arg in ['all']:
        if yorn("Are you sure you want to generate all snippets? This can take a long time.", False):
            print(f"Generating {topic.name} snippets for all languages ...")
            for language in topic.category.languages.values():
                topic_generate_one(topic, language, False)
            print("... Complete.")
        return


    language = pick_language(topic.category, arg)
    if not language:
        print(f"Unknown language '{arg}'")
        return

    topic_generate_one(topic, language, True)



# # Would you like to add anything? Hit enter (blank answer) to stop adding.
# Add > Convert a multiline set of key: values into a dict-style object.

# Added:
# - Convert a multiline set of key: values into a dict-style object.

# # Available Commands:
# # save meta   - Save the metadata to <programming>/<topic>/META.yaml
# # edit meta   - Edit metadata.
# # generate (language)
# # generate all
# # review (language)
# # save (language)
# # save all
# # quit

# # Performing any save will also save metadata.

def main():
    if len(sys.argv) < 1:
        print(f"Usage: {sys.argv[0]} <cmd>")
        print("""
Available commands:
    topic (category)/(topic)
""")
        return

    cmd = sys.argv[1]
    args = []
    if len(sys.argv) >= 2:
        args = sys.argv[2:]

    # Actual commands:
    if cmd == 'topic':
        cmd_topic(args)
    else:
        print(f"Unkown Command: {cmd}")




if __name__ == "__main__":
    main()
