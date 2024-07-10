# Storing a collection of elements of the same data type
myArray = [1, 2, 3, 4, 5]

# Accessing individual elements via index
print(myArray[2])

# Iterating over elements using loops
for element in myArray:
    print(element)

# Sorting elements in ascending or descending order
sortedArray = sorted(myArray)
reversedArray = sorted(myArray, reverse=True)

# Searching for a specific element within the array
if 3 in myArray:
    print("Element found")

# Modifying elements at specific positions
myArray[1] = 10

# Adding elements to the end of the array
myArray.append(6)

# Removing elements from the array
myArray.remove(4)

# Merging two arrays into a single array
newArray = myArray + [7, 8, 9]

# Splitting an array into multiple smaller arrays
splitArray = [myArray[i:i+2] for i in range(0, len(myArray), 2)]

# Finding the maximum or minimum element in the array
maxElement = max(myArray)
minElement = min(myArray)

# Filtering elements based on a condition
filteredArray = [x for x in myArray if x > 2]

# Mapping elements to a new value
mappedArray = [x*2 for x in myArray]

# Reversing the order of elements in the array
reversedOrderArray = myArray[::-1]

# Calculating the sum or average of array elements
sumArray = sum(myArray)
averageArray = sum(myArray) / len(myArray)

# Copying elements from one array to another
copiedArray = myArray.copy()

# Checking if an array contains a certain element
if 6 in myArray:
    print("Element exists in the array")

# Converting an array to a string or vice versa
stringArray = ",".join(map(str, myArray))
convertedArray = list(map(int, stringArray.split(",")))

# Creating multi-dimensional arrays for complex data structures
multiArray = [[1, 2], [3, 4], [5, 6]]

# Implementing algorithms like binary search or quicksort using arrays
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(binary_search(sorted(myArray), 3))
