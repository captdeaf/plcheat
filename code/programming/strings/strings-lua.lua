-- Concatenating two strings together to create a longer string
local str1 = "Hello"
local str2 = "World"
local concatStr = str1 .. " " .. str2
print(concatStr)

-- Splitting a string into an array of substrings based on a delimiter
local str = "apple,banana,orange"
local substrings = {}
for substring in str:gmatch("[^,]+") do
    table.insert(substrings, substring)
end
print(substrings[1])
print(substrings[2])
print(substrings[3])

-- Replacing a specific substring with another substring within a larger string
local originalStr = "I love apples"
local replacedStr = string.gsub(originalStr, "apples", "bananas")
print(replacedStr)

-- Removing leading and trailing whitespace from a string
local strWithWhitespace = "    Trim whitespace    "
local trimmedStr = strWithWhitespace:match("^%s*(.-)%s*$")
print(trimmedStr)

-- Converting a string to uppercase or lowercase
local lowercaseStr = "hello lua"
local uppercaseStr = string.upper(lowercaseStr)
print(uppercaseStr)

-- Checking if a string contains a certain substring
local sampleStr = "The quick brown fox"
if string.find(sampleStr, "brown") then
    print("Contains 'brown'")
else
    print("Does not contain 'brown'")
end

-- Finding the index of a specific substring within a larger string
local index = string.find("Hello Lua", "Lua")
print(index)

-- Getting the length of a string
local length = string.len("Hello")
print(length)

-- Reversing a string
local strToReverse = "Lua Programming"
local reversedStr = string.reverse(strToReverse)
print(reversedStr)

-- Formatting a string with placeholders for variables
local name = "Alice"
local age = 30
local formattedStr = string.format("Name: %s, Age: %d", name, age)
print(formattedStr)

-- Parsing and manipulating data stored in a string format (such as JSON or XML)
local jsonString = '{"name": "Alice", "age": 30}'
local jsonData = json.decode(jsonString)
print(jsonData.name)

-- Generating a string representation of an object for debugging or logging
local tableData = {name = "Bob", age = 25}
local strRepresentation = table.concat(tableData, ", ")
print(strRepresentation)

-- Validating and sanitizing user input received as strings
local userInput = "   risky input  "
local sanitizedInput = userInput:gsub("%s+", "") -- remove whitespace
print(sanitizedInput)

-- Implementing algorithms like string matching, searching, or sorting
local pattern = "banana"
local matchStr = "I love bananas"
if string.match(matchStr, pattern) then
    print("Found match")
else
    print("No match found")
end
