-- Defining a dictionary with key-value pairs
local dictionary = {
  name = "Alice",
  age = 30,
  city = "New York"
}

-- Implementing a cache using dictionaries
local cache = {}
function memoization(input)
  if cache[input] then
    return cache[input]
  else
    local result = input * input
    cache[input] = result
    return result
  end
end

-- Counting occurrences of elements in a collection using dictionaries
local collection = {1, 1, 2, 3, 3, 3, 4, 4, 4, 4}
local counts = {}
for _, element in ipairs(collection) do
  counts[element] = (counts[element] or 0) + 1
end

-- Mapping unique identifiers to objects or data
local idMapping = {
  ["id123"] = {name = "Bob", age = 25},
  ["id456"] = {name = "Charlie", age = 35}
}

-- Building lookup tables for data processing
local lookupTable = {
  ["key1"] = "value1",
  ["key2"] = "value2",
  ["key3"] = "value3"
}

-- Checking for the existence of an element in a collection
local checkElement = 4
local exists = counts[checkElement] and true or false

-- Implementing a symbol table using dictionaries
local symbolTable = {
  ["sym1"] = "symbol1",
  ["sym2"] = "symbol2"
}

-- Grouping and organizing data based on certain criteria
local data = { 
  {name = "Alice", city = "New York"},
  {name = "Bob", city = "London"}, 
  {name = "Charlie", city = "Paris"}
}
local groupedData = {}
for _, person in ipairs(data) do
  local city = person.city
  groupedData[city] = groupedData[city] or {}
  table.insert(groupedData[city], person)
end

-- Fast searching and accessing data in Lua tables (which can be seen as dictionaries)
local fruits = {
  apple = "red",
  banana = "yellow",
  orange = "orange"
}
local color = fruits["apple"]

-- Printing the results for demonstration
print("Dictionary:", dictionary)
print("Memoization (input 5):", memoization(5))
print("Counts:", counts)
print("ID Mapping:", idMapping)
print("Lookup Table:", lookupTable)
print("Existence of element", checkElement, ":", exists)
print("Symbol Table:", symbolTable)
print("Grouped Data:", groupedData)
print("Color of Apple:", color)
