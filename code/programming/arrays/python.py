# Python generally calls arrays lists, and they are quite mutable. They cannot
# be restricted to a certain type.

# Initialization
array = ["one", "two", "three"]

# Add elements
array.append("four")
array.extend(["four", "five"]) # Add multiple items.

# Fetch elements
item = array[0]
items = array[0:3] # Create a new list from the first 3 items.
items = array[-3:] # Or the last 3 items.

# Modify
array[0] = "anotherone"
array = [x + "." for x in array] # Add a "." to all items.

# Length
len(array)

# Iterate
for item in array:
    item
