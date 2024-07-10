-- searching for specific patterns in text data
local text = "Hello, World! This is a sample text."
local pattern = "%w+"
for word in text:gmatch(pattern) do
    print(word)
end

-- validating input forms
local email = "example@example.com"
if string.match(email, "^[%w%.]+@[%w%.]+%.[%a]+$") then
    print("Valid email address")
end

-- data scraping
local html = [[ <p>This is a <b>sample</b> HTML text.</p> ]]
local pattern = "<b>(.-)</b>"
for match in string.gmatch(html, pattern) do
    print(match)
end

-- parsing and extracting information from structured data
local data = "name: John, age: 30, city: NYC"
for key, value in data:gmatch("(%w+):%s*(%w+),?") do
    print(key, value)
end

-- replacing strings that match a certain pattern
local text = "HeLLo WoRLd"
local new_text = text:gsub("%u", "*")
print(new_text)

-- tokenizing strings into smaller components
local sentence = "Lua programming is fun"
for word in sentence:gmatch("%S+") do
    print(word)
end

-- filtering and processing text
local text = "Lua is a powerful scripting language"
local filtered_text = text:gsub("powerful", "awesome")
print(filtered_text)

-- pattern matching in search algorithms
local text = "algorithm"
if string.match(text, "rithm") then
    print("Pattern found!")
end

-- checking for the presence of specific characters or words
local text = "Hello, World!"
if string.find(text, "World") then
    print("Word found!")
end

-- text manipulation and transformation
local text = "Lua is an awesome language"
print(text:upper())

-- input sanitization
local input = "user<input>"
local sanitized_input = input:gsub("<.+>", "")
print(sanitized_input)

-- pattern-based data extraction
local data = "2021-05-20"
local year, month, day = data:match("(%d+)-(%d+)-(%d+)")
print(year, month, day)
