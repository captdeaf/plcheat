-- Storing a collection of elements of the same data type
myArray = {1, 2, 3, 4, 5}

-- Accessing individual elements via index
print(myArray[3])

-- Iterating over elements using loops
for i = 1, #myArray do
    print(myArray[i])
end

-- Sorting elements in ascending order
table.sort(myArray)

-- Searching for a specific element within the array
local searchValue = 3
for i = 1, #myArray do
    if myArray[i] == searchValue then
        print("Element found at index: " .. i)
        break
    end
end

-- Modifying elements at specific positions
myArray[2] = 10

-- Adding elements to the end of the array
table.insert(myArray, 6)

-- Removing elements from the array
table.remove(myArray, 3)

-- Merging two arrays into a single array
secondArray = {7, 8, 9}
for i = 1, #secondArray do
    table.insert(myArray, secondArray[i])
end

-- Splitting an array into multiple smaller arrays
size = 3
for i = 1, #myArray, size do
    local subArray = {}
    for j = i, math.min(i + size - 1, #myArray) do
        table.insert(subArray, myArray[j])
    end
    print("Split Array:")
    for j = 1, #subArray do
        print(subArray[j])
    end
end

-- Finding the maximum element in the array
local maxElement = math.max(table.unpack(myArray))

-- Filtering elements based on a condition
local filteredArray = {}
for i = 1, #myArray do
    if myArray[i] > 4 then
        table.insert(filteredArray, myArray[i])
    end
end

-- Mapping elements to a new value
for i = 1, #myArray do
    myArray[i] = myArray[i] * 2
end

-- Reversing the order of elements in the array
for i = 1, math.floor(#myArray / 2) do
    myArray[i], myArray[#myArray - i + 1] = myArray[#myArray - i + 1], myArray[i]
end

-- Calculating the sum of array elements
local sum = 0
for i = 1, #myArray do
    sum = sum + myArray[i]
end

-- Copying elements from one array to another
copiedArray = {}
for i = 1, #myArray do
    table.insert(copiedArray, myArray[i])
end

-- Checking if an array contains a certain element
local elementToCheck = 8
local found = false
for i = 1, #myArray do
    if myArray[i] == elementToCheck then
        found = true
        break
    end
end

-- Converting an array to a string
local arrayString = table.concat(myArray, ", ")

-- Creating multi-dimensional arrays for complex data structures
multiArray = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
}

-- Implementing algorithms like binary search or quicksort using arrays (Binary Search example)
local function binarySearch(array, element)
    local low = 1
    local high = #array
    while low <= high do
        local mid = math.floor((low + high) / 2)
        if array[mid] == element then
            return mid
        elseif array[mid] < element then
            low = mid + 1
        else
            high = mid - 1
        end
    end
    return -1
end

-- Testing binary search
table.sort(myArray)
local index = binarySearch(myArray, 6)
if index ~= -1 then
    print("Element found at index: " .. index)
else
    print("Element not found")
end
