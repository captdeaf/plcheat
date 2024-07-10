import re

text = "This is a sample text with emails like example@gmail.com and phone numbers such as 123-456-7890."

# Searching for specific patterns in text data
pattern1 = re.compile(r'emails')
results1 = re.findall(pattern1, text)
print("Searching for specific patterns in text data:")
print(results1)

# Validating input forms (such as emails, phone numbers, etc.)
email = "example@gmail.com"
phone = "123-456-7890"
pattern2 = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')
email_valid = re.match(pattern2, email)
phone_valid = re.match(r'\d{3}-\d{3}-\d{4}', phone)
print("Validating input forms:")
print("Email Valid:", email_valid is not None)
print("Phone Valid:", phone_valid is not None)

# Data scraping
pattern3 = re.compile(r'\d{3}-\d{3}-\d{4}')
results3 = re.findall(pattern3, text)
print("Data scraping:")
print(results3)

# Parsing and extracting information from structured data
pattern4 = re.compile(r'(\d{3})-(\d{3})-(\d{4})')
results4 = re.findall(pattern4, text)
print("Parsing and extracting information:")
print(results4)

# Replacing strings that match a certain pattern with another string
pattern5 = re.compile(r'phone')
new_text = re.sub(pattern5, 'contact', text)
print("Replacing strings:")
print(new_text)

# Tokenizing strings into smaller components
tokens = text.split()
print("Tokenizing strings:")
print(tokens)

# Filtering and processing text
filtered_text = " ".join([word for word in tokens if re.match(r'[A-Za-z]+', word)])
print("Filtered text:")
print(filtered_text)

# Other uses can be added as needed

