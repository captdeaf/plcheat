#!/bin/bash

# Concatenating two strings together
first_string="Hello"
second_string="World"
concatenated_string="$first_string $second_string"
echo "Concatenated String: $concatenated_string"

# Splitting a string into an array of substrings based on a delimiter
split_string="apple,banana,orange"
IFS=',' read -ra split_array <<< "$split_string"
echo "Split Array:"
printf '%s\n' "${split_array[@]}"

# Replacing a specific substring within a larger string
original_string="Hello World"
replaced_string="${original_string/Hello/Hi}"
echo "Replaced String: $replaced_string"

# Removing leading and trailing whitespace from a string
whitespace_string="   Trimmed String   "
trimmed_string="${whitespace_string#"${whitespace_string%%[![:space:]]*}"}"
trimmed_string="${trimmed_string%"${trimmed_string##*[![:space:]]}"}"
echo "Trimmed String: $trimmed_string"

# Converting a string to uppercase or lowercase
uppercase_string="uppercase"
lowercase_string="LOWERCASE"
uppercase_result="${uppercase_string^^}"
lowercase_result="${lowercase_string,,}"
echo "Uppercase Result: $uppercase_result"
echo "Lowercase Result: $lowercase_result"

# Checking if a string contains a certain substring
check_string="This is a test"
substring="test"
if [[ $check_string == *"$substring"* ]]; then
  echo "Substring '$substring' found in '$check_string'"
else
  echo "Substring '$substring' not found in '$check_string'"
fi

# Finding the index of a specific substring within a larger string
index_string="Find me in this string"
substring="in"
index=${index_string%%"$substring"*}
echo "Index of '$substring' in '$index_string': ${#index}"

# Getting the length of a string
length_string="Calculate Length"
length=${#length_string}
echo "Length of '$length_string': $length"

# Reversing a string
string_to_reverse="Reverse Me"
reversed_string=$(echo "$string_to_reverse" | rev)
echo "Reversed String: $reversed_string"

# Formatting a string with placeholders for variables
name="Alice"
age=30
formatted_string="Name: %s, Age: %d"
printf "$formatted_string\n" "$name" "$age"

# Parsing and manipulating data stored in a string format (such as JSON or XML)
json_data='{"name": "John", "age": 25}'
parsed_name=$(echo "$json_data" | jq -r '.name')
echo "Parsed Name: $parsed_name"

# Generating a string representation of an object for debugging or logging
object_variable="Some object data"
echo "Object: $object_variable"

# Validating and sanitizing user input received as strings
user_input="   User Input   "
sanitized_input="$(echo -e "${user_input}" | tr -d '[:space:]')"
echo "Sanitized User Input: $sanitized_input"

# Implementing algorithms like string matching, searching, or sorting (Example of string matching)
input_string="Hello World"
if [[ $input_string == "Hello"* ]]; then
  echo "String starts with 'Hello'"
fi
```
