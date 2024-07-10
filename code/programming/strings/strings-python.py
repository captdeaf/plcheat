# Concatenating two strings together to create a longer string
str1 = "Hello"
str2 = "World"
concatenated_str = str1 + " " + str2
print(concatenated_str)

# Splitting a string into an array of substrings based on a delimiter
sentence = "Python,is,awesome"
split_array = sentence.split(",")
print(split_array)

# Replacing a specific substring with another substring within a larger string
original_str = "I love programming"
new_str = original_str.replace("programming", "coding")
print(new_str)

# Removing leading and trailing whitespace from a string
whitespace_str = "   Python   "
trimmed_str = whitespace_str.strip()
print(trimmed_str)

# Converting a string to uppercase or lowercase
original_case_str = "Hello, World!"
upper_str = original_case_str.upper()
lower_str = original_case_str.lower()
print(upper_str)
print(lower_str)

# Checking if a string contains a certain substring
check_str = "Python is awesome"
substring = "Python"
if substring in check_str:
    print("Substring found!")

# Finding the index of a specific substring within a larger string
index_str = "Python is easy to learn"
substring_index = index_str.index("easy")
print(substring_index)

# Getting the length of a string
length_str = "Python"
str_length = len(length_str)
print(str_length)

# Reversing a string
reverse_str = "hello"
reversed_str = reverse_str[::-1]
print(reversed_str)

# Formatting a string with placeholders for variables
name = "Alice"
age = 30
formatted_str = "My name is {} and I am {} years old".format(name, age)
print(formatted_str)

# Parsing and manipulating data stored in a string format (such as JSON or XML)
import json
json_data = '{"name": "Bob", "age": 25}'
parsed_data = json.loads(json_data)
print(parsed_data)

# Generating a string representation of an object for debugging or logging
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"

person_obj = Person("Alice", 30)
print(person_obj)

# Validating and sanitizing user input received as strings
user_input = " user@domain.com "
sanitized_input = user_input.strip().lower()
if "@" in sanitized_input and "." in sanitized_input:
    print("Valid email address")

# Implementing algorithms like string matching, searching, or sorting
from difflib import SequenceMatcher

str1 = "programming"
str2 = "programming is fun"
ratio = SequenceMatcher(None, str1, str2).ratio()
print(f"Similarity ratio: {ratio}")
