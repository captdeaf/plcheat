-- Lua - regex_examples.lua
-- Lua does not have built-in regex support, but uses pattern matching instead

-- Pattern Matching
local text = "There are 123 apples"
local match = string.match(text, "%d+")
print("Pattern Matching: " .. (match and "Match found!" or "No match found."))

-- Search and Replace
text = "Hello 123, meet 456"
local result = string.gsub(text, "%d+", "number")
print("Search and Replace: " .. result)  -- "Hello number, meet number"

-- String Splitting
text = "apple, orange; banana, grape"
local result = {}
for token in string.gmatch(text, "([^,;]+)") do
  table.insert(result, token)
end
print("String Splitting: " .. table.concat(result, ", "))  -- ["apple", " orange", " banana", " grape"]

-- Extracting Substrings
text = "The date is 2024-06-27"
local year, month, day = string.match(text, "(%d%d%d%d)%-(%d%d)%-(%d%d)")
print("Extracting Substrings: " .. year .. ", " .. month .. ", " .. day)  -- ["2024", "06", "27"]

-- Validation
local email = "example@test.com"
local pattern = "^[a-zA-Z0-9._%%+-]+@[a-zA-Z0-9.-]+%.[a-zA-Z]{2,}$"
print("Validation: " .. (string.match(email, pattern) and "Valid email address!" or "Invalid email address."))

-- Removing Unwanted Characters
text = "Hello, World!"
local cleaned_text = string.gsub(text, "[^%w%s]", "")  -- Remove all non-alphanumeric characters
print("Removing Unwanted Characters: " .. cleaned_text)  -- "Hello World"

-- Anchoring Searches
text = "The quick brown fox"
pattern = "%f[%w]fox%f[%W]"  -- Match 'fox' as a whole word
print("Anchoring Searches: " .. (string.match(text, pattern) and "Found" or "Not Found"))

-- Escaping Characters
local function escape_pattern(text)
  return string.gsub(text, "([^%w])", "%%%1")
end
local user_input = "some[unsafe]input"
local escaped_input = escape_pattern(user_input)
print("Escaping Characters: " .. escaped_input)  -- "some%[unsafe%]input"

-- Conditional Matching
text = "foobar and foo"
pattern = "foo(?=bar)"  -- Match 'foo' only if followed by 'bar'
local found = string.match(text, "foo()bar") and string.sub(text, string.match(text, "foo()bar") - 3, string.match(text, "foo()bar") - 1) or ""
print("Conditional Matching: " .. found)  -- "foo"

