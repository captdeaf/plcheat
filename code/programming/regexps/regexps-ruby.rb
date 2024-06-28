# Ruby - regex_examples.rb

# Pattern Matching
pattern = /\d+/  # Match one or more digits
text = "There are 123 apples"
puts "Pattern Matching: #{pattern.match(text) ? "Match found!" : "No match found."}"

# Search and Replace
text = "Hello 123, meet 456"
result = text.gsub(/\d+/, 'number')
puts "Search and Replace: #{result}"  # "Hello number, meet number"

# String Splitting
text = "apple, orange; banana, grape"
result = text.split(/[,;]/)
puts "String Splitting: #{result.inspect}"  # ["apple", " orange", " banana", " grape"]

# Extracting Substrings
text = "The date is 2024-06-27"
pattern = /(\d{4})-(\d{2})-(\d{2})/
match = pattern.match(text)
puts "Extracting Substrings: #{match ? match.captures : "No match found"}"  # ["2024", "06", "27"]

# Validation
email = "example@test.com"
pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
puts "Validation: #{pattern.match(email) ? "Valid email address!" : "Invalid email address."}"

# Parsing Structured Text
log_entry = "127.0.0.1 - - [27/Jun/2024:10:00:00 +0000] \"GET /index.html HTTP/1.1\" 200 1234"
pattern = /(?<ip>\d+\.\d+\.\d+\.\d+) - - \[(?<date>[^\]]+)\] "(?<request>[^"]+)" (?<status>\d+) (?<size>\d+)/
match = pattern.match(log_entry)
puts "Parsing Structured Text: #{match ? match.named_captures : "No match found"}"

# Removing Unwanted Characters
text = "Hello, World!"
cleaned_text = text.gsub(/[^\w\s]/, '')  # Remove all non-alphanumeric characters
puts "Removing Unwanted Characters: #{cleaned_text}"  # "Hello World"

# Anchoring Searches
text = "The quick brown fox"
pattern = /\bfox\b/  # Match 'fox' as a whole word
puts "Anchoring Searches: #{pattern.match(text) ? "Found" : "Not Found"}"

# Escaping Characters
user_input = "some[unsafe]input"
escaped_input = Regexp.escape(user_input)
pattern = /#{escaped_input}/
puts "Escaping Characters: #{pattern}"  # "some\[unsafe\]input"

# Conditional Matching
pattern = /foo(?=bar)/  # Match 'foo' only if followed by 'bar'
text = "foobar and foo"
matches = text.scan(pattern)
puts "Conditional Matching: #{matches.inspect}"  # ["foo"]

