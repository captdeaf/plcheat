# plcheat
Cheat sheet for programming language differences.

# github pages
Any changes, feel free to submit a PR, or host one yourself. It's also designed
to run over file:///home/foo/.../plcheat/pages/index.html

# Directory and file layout:

pages/      - Static files for github. Also contains _generated.json
code/
  (category)/
    INFO.yaml - Information about the category.
    LANGS/    - Language definitions. (e.g: python, golang, python-numpy, etc)
                These are YAML files.
    <topic>/  - Topics. All lower case.
      META.yaml - Metadata for rebuild.py and openai
      <topic>-<lang>.<ext>   - Individual code examples for language+topic. (lowercase)

# Generating new topics:

I primarily use OpenAI to at least generate the first set of code examples for
each topic.

Example, using strings:
```
  $ python3 openai_topic.py programming/strings

  # Generating a new topic and set of language implementations.
  - Category: programming
  - Topic: strings

  # Metadata:
  Topic Display Name > String
  Topic aliases (optional, space separated) > substrings
  Should I ask for a set of operations? [Y/n] > Y
  Should I use the standard dialogue format for conversion? [Y/n] > Y

  # Now involving OpenAI ...
  Category: Programming
  I want to know about > strings

  # Asking...
  Question: I have a question regarding common programming operations. Please respond with only answers, in a yaml array format. I want to know generic descriptions, not language-specific answers. I want to know about strings

  # Result:
  - Converting to lowercase
  - Converting to uppercase
  - Trimming whitespace
  - Splitting into a list or array
  - Replacing substrings
  - Finding the position of a substring
  - Concatenating strings
  - Checking if a string starts with a substring
  - Checking if a string ends with a substring
  - Counting occurrences of a substring
  - Formatting strings
  - Extracting a substring
  - Checking if a string contains a substring
  - Reversing a string

  # Would you like to add anything? Hit enter (blank answer) to stop adding.
  Add > Convert a multiline set of key: values into a dict-style object.

  Added:
  - Convert a multiline set of key: values into a dict-style object.

  # Available Commands:
  # generate (language)
  # generate all
  # review (language)
  # save (language)
  # save all
  # quit

  # Performing any save will also save metadata.
```

# Modifying or adding new languages to existing topics

Still using OpenAI:

Example, using strings:

```
  $ python3 openai_snippets.py newtopic

  # Loading metadata ...

  # Metadata:
  - Category: programming
  - Topic Display Name: String
  - Topic identifier: strings
  - Topic aliases: substrings
  - Operations: ('operations' to show)
  - Standard dialog: Y
  - I want to know about: strings

  # OpenAI:
  - I have a question regarding common programming operations. Please respond with only answers, in a yaml array format. I want to know generic descriptions, not language-specific answers. I want to know about strings

  Added:
  - Convert a multiline set of key: values into a dict-style object.

  # Available Commands:
  # save meta   - Save the metadata to <programming>/<topic>/META.yaml
  # edit meta   - Edit metadata.
  # generate (language)   - Auto-reviews if a single language.
  # generate all
  # generate unknown      - Only what doesn't exist.
  # review (language)
  # save (language)
  # save all              - What's cached.
  # quit

  # Performing any save will also save metadata.

  Command: >
```
