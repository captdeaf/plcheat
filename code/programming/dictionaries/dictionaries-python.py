# Example of storing key-value pairs for quick retrieval using dictionaries
student_grades = {
    "Alice": 90,
    "Bob": 85,
    "Charlie": 95
}

# Example of implementing a cache or memoization system using dictionaries
fibonacci_cache = {}
def fibonacci(n):
    if n in fibonacci_cache:
        return fibonacci_cache[n]
    if n <= 1:
        return n
    result = fibonacci(n-1) + fibonacci(n-2)
    fibonacci_cache[n] = result
    return result

# Example of counting occurrences of elements in a collection using dictionaries
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
occurrences = {}
for num in numbers:
    occurrences[num] = occurrences.get(num, 0) + 1

# Example of mapping unique identifiers to objects or data using dictionaries
user_data = {
    "id_123": {"name": "Alice", "age": 30},
    "id_456": {"name": "Bob", "age": 25}
}

# Example of building efficient lookup tables for data processing using dictionaries
lookup_table = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}

# Example of checking for the existence of an element in a collection using dictionaries
numbers_set = {1, 2, 3, 4, 5}
if 3 in numbers_set:
    print("Number 3 is in the set")

# Example of implementing a data structure like a symbol table or associative array using dictionaries
symbol_table = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide"
}

# Example of grouping and organizing data based on certain criteria using dictionaries
employees = [
    {"name": "Alice", "department": "Engineering"},
    {"name": "Bob", "department": "Sales"},
    {"name": "Charlie", "department": "Engineering"}
]

department_employees = {}
for employee in employees:
    department = employee["department"]
    if department not in department_employees:
        department_employees[department] = []
    department_employees[department].append(employee["name"])

# Example of providing a fast method for searching and accessing data using dictionaries
phonebook = {
    "Alice": "555-1234",
    "Bob": "555-5678",
    "Charlie": "555-9999"
}
print(phonebook.get("Bob", "Entry not found"))
