#!/bin/bash
# Bash - regex_examples.sh

# Pattern Matching
text="There are 123 apples"
if [[ $text =~ [0-9]+ ]]; then
    echo "Pattern Matching: Match found!"
else
    echo "Pattern Matching: No match found."
fi

# Search and Replace
text="Hello 123, meet 456"
result=$(echo "$text" | sed -E 's/[0-9]+/number/g')
echo "Search and Replace: $result"  # "Hello number, meet number"

# String Splitting
text="apple, orange; banana, grape"
IFS=',;' read -ra result <<< "$text"
echo "String Splitting: ${result[@]}"  # ["apple", " orange", " banana", " grape"]

# Extracting Substrings
text="The date is 2024-06-27"
if [[ $text =~ ([0-9]{4})-([0-9]{2})-([0-9]{2}) ]]; then
    echo "Extracting Substrings: ${BASH_REMATCH[1]}, ${BASH_REMATCH[2]}, ${BASH_REMATCH[3]}"  # ["2024", "06", "27"]
fi

# Validation
email="example@test.com"
if [[ $email =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Validation: Valid email address!"
else
    echo "Validation: Invalid email address."
fi

# Removing Unwanted Characters
text="Hello, World!"
cleaned_text=$(echo "$text" | sed 's/[^a-zA-Z0-9 ]//g')
echo "Removing Unwanted Characters: $cleaned_text"  # "Hello World"

# Anchoring Searches
text="The quick brown fox"
if [[ $text =~ \bfox\b ]]; then
    echo "Anchoring Searches: Found"
else
    echo "Anchoring Searches: Not Found"
fi

# Escaping Characters
user_input="some[unsafe]input"
escaped_input=$(printf '%s\n' "$user_input" | sed -e 's/[]\/$*.^|[]/\\&/g')
echo "Escaping Characters: $escaped_input"  # "some\[unsafe\]input"

# Conditional Matching
text="foobar and foo"
pattern="foo(?=bar)"
if [[ $text =~ foo(bar) ]]; then
    echo "Conditional Matching: ${BASH_REMATCH[0]}"  # "foo"
fi

