# Python - regex_examples.py
import re

# Pattern Matching
pattern = r'\d+'  # Match one or more digits
text = "There are 123 apples"
match = re.search(pattern, text)
print("Pattern Matching:", "Match found!" if match else "No match found.")

# Search and Replace
text = "Hello 123, meet 456"
result = re.sub(r'\d+', 'number', text)
print("Search and Replace:", result)  # "Hello number, meet number"

# String Splitting
text = "apple, orange; banana, grape"
result = re.split(r'[,;]', text)
print("String Splitting:", result)  # ["apple", " orange", " banana", " grape"]

# Extracting Substrings
log_entry = "The date is 2024-06-27"
pattern = r'(\d{4})-(\d{2})-(\d{2})'
match = re.search(pattern, log_entry)
if match:
    print("Extracting Substrings:", match.groups())  # ("2024", "06", "27")

# Validation
email = "example@test.com"
pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
if re.match(pattern, email):
    print("Validation: Valid email address!")
else:
    print("Validation: Invalid email address.")

# Parsing Structured Text
log_entry = "127.0.0.1 - - [27/Jun/2024:10:00:00 +0000] \"GET /index.html HTTP/1.1\" 200 1234"
pattern = r'(?P<ip>\d+\.\d+\.\d+\.\d+) - - \[(?P<date>[^\]]+)\] "(?P<request>[^"]+)" (?P<status>\d+) (?P<size>\d+)'
match = re.match(pattern, log_entry)
if match:
    print("Parsing Structured Text:", match.groupdict())

# Removing Unwanted Characters
text = "Hello, World!"
cleaned_text = re.sub(r'[^\w\s]', '', text)  # Remove all non-alphanumeric characters
print("Removing Unwanted Characters:", cleaned_text)  # "Hello World"

# Anchoring Searches
text = "The quick brown fox"
pattern = r'\bfox\b'  # Match 'fox' as a whole word
match = re.search(pattern, text)
print("Anchoring Searches:", "Found" if match else "Not Found")

# Escaping Characters
user_input = "some[unsafe]input"
escaped_input = re.escape(user_input)
pattern = rf'{escaped_input}'
print("Escaping Characters:", pattern)  # "some\[unsafe\]input"

# Conditional Matching
pattern = r'foo(?=bar)'  # Match 'foo' only if followed by 'bar'
text = "foobar and foo"
matches = re.findall(pattern, text)
print("Conditional Matching:", matches)  # ["foo"]

