# util.py
#
# Utility functions used across several scripts.

import sys
import readline

def ask(msg, default=None):
    if default is not None:
        line = input(f"{msg} : [{default}] > ")
    else:
        line = input(f"{msg} > ")
    if line is None or line == "quit":
        print("\nGoodbye")
        sys.exit(0)
    if default is not None and line.strip() == "":
        return default
    return line


def yorn(question, default=True):
    if default:
        line = ask(f"{question} [Y/n]")
    else:
        line = ask(f"{question} [y/N]")

    line = line.lower()
    if line.startswith('y'):
        return True
    if line.startswith('n'):
        return False
    return default


def err(msg):
    print("\n!!!!!!!!!!!!")
    print(f"Error: {msg}")
    print("!!!!!!!!!!!!")
    sys.exit(1)
