# Storing key-value pairs for quick retrieval
my_dict = {
  "key1" => "value1",
  "key2" => "value2",
  "key3" => "value3"
}

# Implementing a cache or memoization system
cache = {}

def fibonacci(n, cache)
  return n if n <= 1
  
  # Check if the value is already cached to avoid recomputation
  if cache.key?(n)
    return cache[n]
  else
    result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
    cache[n] = result
    return result
  end
end

# Counting occurrences of elements in a collection
occurrences = Hash.new(0)

numbers = [1, 2, 3, 4, 1, 2, 4, 1, 1]

numbers.each do |num|
  occurrences[num] += 1
end

# Mapping unique identifiers to objects or data
student_data = {
  "S101" => { name: "Alice", age: 25 },
  "S102" => { name: "Bob", age: 22 },
  "S103" => { name: "Charlie", age: 24 }
}

# Building efficient lookup tables for data processing
lookup_table = {
  "apple" => "fruit",
  "broccoli" => "vegetable",
  "chicken" => "protein"
}

# Checking for the existence of an element in a collection
my_list = [1, 2, 3, 4, 5]

if my_list.include?(3)
  puts "Element found!"
else
  puts "Element not found!"
end

# Implementing a data structure like a symbol table or associative array
symbol_table = {
  name: "John",
  age: 30,
  city: "New York"
}

# Grouping and organizing data based on certain criteria
people = {
  "Male" => ["John", "Mike", "Alex"],
  "Female" => ["Emma", "Sophia", "Olivia"]
}

# Providing a fast method for searching and accessing data
contact_info = {
  "Alice" => { phone: "123-456-7890", email: "alice@example.com" },
  "Bob" => { phone: "987-654-3210", email: "bob@example.com" }
}
