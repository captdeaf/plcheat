# Searching for specific patterns in text data
text = "The quick brown fox jumps over the lazy dog"
pattern = /fox/
matches = text.scan(pattern)
puts "Matches found for 'fox': #{matches}"

# Validating input forms (such as emails, phone numbers, etc.)
email = "example@email.com"
phone_number = "123-456-7890"
email_valid = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/.match?(email)
phone_valid = /\A\d{3}-\d{3}-\d{4}\z/.match?(phone_number)
puts "Is email valid? #{email_valid}"
puts "Is phone number valid? #{phone_valid}"

# Data scraping
html = "<div><p>Hello World</p><a href='https://example.com'>Link</a></div>"
links = html.scan(/<a href='(https?:\/\/[\S]+)'>/)
puts "Links found in HTML: #{links.flatten}"

# Parsing and extracting information from structured data
data = "Name: John, Age: 30, Occupation: Developer"
info = data.match(/Name: (\w+), Age: (\d+), Occupation: (\w+)/)
puts "Extracted data - Name: #{info[1]}, Age: #{info[2]}, Occupation: #{info[3]}"

# Replacing strings that match a certain pattern with another string
sentence = "I love apples and oranges"
new_sentence = sentence.gsub(/apples|oranges/, "bananas")
puts "Replaced fruits with bananas: #{new_sentence}"

# Tokenizing strings into smaller components
sentence = "This is a sentence"
tokens = sentence.split(" ")
puts "Tokens: #{tokens}"

# Filtering and processing text
data = "123abc456def789ghi"
filtered_data = data.scan(/\d+/).map(&:to_i)
puts "Filtered numbers: #{filtered_data}"

# Pattern matching in search algorithms
text = "abaabcac"
pattern = "ab"
matches = text.scan(/(?=#{pattern})/)
puts "Matches found for 'ab': #{matches}"

# Checking for the presence of specific characters or words
sentence = "The red car is fast"
presence = sentence.match?(/red/)
puts "Does sentence contain 'red'? #{presence}"

# Text manipulation and transformation
sentence = "hello world"
transformed = sentence.gsub(/(hello) (world)/, '\2, \1!')
puts "Transformed sentence: #{transformed}"

# Input sanitization
user_input = "user<>&input"
sanitized_input = user_input.gsub(/<|>|&/, "")
puts "Sanitized input: #{sanitized_input}"

# Pattern-based data extraction
data = "Name: John, Age: 30"
extracted_data = data.match(/Name: (\w+), Age: (\d+)/)
puts "Extracted data - Name: #{extracted_data[1]}, Age: #{extracted_data[2]}"

# Syntax highlighting in text editors or IDEs
ruby_code = "def hello_world(name)\n  puts 'Hello, #{name}!'\nend"
highlighted_code = ruby_code.gsub(/(puts|def)/, '\1'.upcase)
puts "Highlighted code:\n#{highlighted_code}"

# Data validation in form submission
password = "P@ssw0rd!"
valid_password = /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}\z/.match?(password)
puts "Is password valid? #{valid_password}"

# Extracting data from log files or other text-based records
log_file = "Error - File not found\nWarning - Low memory\nError - Connection lost"
errors = log_file.scan(/Error - .+/)
puts "Errors found in log file: #{errors}"

# Pattern matching in natural language processing tasks
sentence = "I am learning natural language processing"
pattern = /natural language processing/
match = sentence.match(pattern)
puts "Match found for 'natural language processing': #{match}"

# Data cleaning and preprocessing
dirty_data = "abc123!@#"
clean_data = dirty_data.gsub(/\W/, "")
puts "Cleaned data: #{clean_data}"

# Automating repetitive text processing tasks
text = "It is what it is"
processed_text = text.gsub(/is/, "was")
puts "Processed text: #{processed_text}"

# Generating reports or summaries based on text patterns
report_data = "Total sales: $1000\nTotal expenses: $500\nProfit: $500"
summary = report_data.scan(/\$(\d+)/).map(&:to_i).sum
puts "Total profit: $#{summary}"

# Customizing search functionality in web applications
search_query = "programming language"
results = ["ruby", "java", "python"].grep(/#{search_query}/)
puts "Search results: #{results}"

# Validating and formatting user input
input = "  username123  "
formatted_input = input.strip.downcase
valid_username = formatted_input.match?(/\A[a-z0-9]+\z/)
puts "Is username valid? #{valid_username}"

# Parsing URLs and query parameters
url = "https://example.com/page?query=example"
parsed_url = url.match(/(https?):\/\/([\w\.]+)/)
parsed_query = url.match(/query=([^&]+)/)
puts "Protocol: #{parsed_url[1]}, Domain: #{parsed_url[2]}, Query: #{parsed_query[1]}"

# Implementing text-based search functionality
text = "The quick brown fox jumps over the lazy dog"
search_query = "fox"
result = text.match(/#{search_query}/)
puts "Search result: #{result}"
