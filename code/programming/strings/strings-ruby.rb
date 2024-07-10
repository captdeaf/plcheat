# Concatenating two strings together to create a longer string
concatenated_string = "Hello, " + "World"

# Splitting a string into an array of substrings based on a delimiter
split_string = "apple,orange,banana".split(",")

# Replacing a specific substring with another substring within a larger string
original_string = "I love programming in Ruby"
replaced_string = original_string.gsub("Ruby", "Python")

# Removing leading and trailing whitespace from a string
whitespace_string = "   Some text with spaces   ".strip

# Converting a string to uppercase or lowercase
uppercase_string = "convert me to uppercase".upcase
lowercase_string = "CONVERT ME TO lowercase".downcase

# Checking if a string contains a certain substring
string_to_check = "This is a sample string"
substring = "sample"
contains_substring = string_to_check.include?(substring)

# Finding the index of a specific substring within a larger string
larger_string = "Finding a substring within a string"
substring_index = larger_string.index("substring")

# Getting the length of a string
length_of_string = "Count me".length

# Reversing a string
original_word = "Ruby"
reversed_word = original_word.reverse

# Formatting a string with placeholders for variables
name = "John"
age = 30
formatted_string = "My name is #{name} and I am #{age} years old"

# Parsing and manipulating data stored in a string format (such as JSON or XML)
require 'json'
json_string = '{"name": "Alice", "age": 25}'
parsed_json = JSON.parse(json_string)
name_from_json = parsed_json["name"]

# Generating a string representation of an object for debugging or logging
class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def to_s
    "Person: #{@name}, Age: #{@age}"
  end
end

person = Person.new("Bob", 40)
object_string = person.to_s

# Validating and sanitizing user input received as strings
input = "User input"
sanitized_input = input.gsub(/[^a-zA-Z0-9\s]/, "")

# Implementing algorithms like string matching, searching, or sorting
sorted_strings = ["banana", "apple", "cherry"].sort

# Print results for demonstration
puts concatenated_string
puts split_string
puts replaced_string
puts whitespace_string
puts uppercase_string
puts lowercase_string
puts contains_substring
puts substring_index
puts length_of_string
puts reversed_word
puts formatted_string
puts name_from_json
puts object_string
puts sanitized_input
puts sorted_strings
