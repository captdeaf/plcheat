# Storing a collection of elements of the same data type
arr = [1, 2, 3, 4, 5]

# Accessing individual elements via index
puts arr[2]

# Iterating over elements using loops
arr.each do |element|
  puts element
end

# Sorting elements in ascending order
sorted_arr = arr.sort
puts sorted_arr

# Sorting elements in descending order
reverse_sorted_arr = arr.sort.reverse
puts reverse_sorted_arr

# Searching for a specific element within the array
puts arr.include?(3)

# Modifying elements at specific positions
arr[1] = 20
puts arr

# Adding elements to the end of the array
arr.push(6)
puts arr

# Removing elements from the array
arr.delete(3)
puts arr

# Merging two arrays into a single array
arr2 = [7, 8, 9]
merged_arr = arr + arr2
puts merged_arr

# Splitting an array into multiple smaller arrays
split_arr = arr.each_slice(2).to_a
puts split_arr

# Finding the maximum element in the array
max_element = arr.max
puts max_element

# Finding the minimum element in the array
min_element = arr.min
puts min_element

# Filtering elements based on a condition
filtered_arr = arr.select { |element| element > 3 }
puts filtered_arr

# Mapping elements to a new value
mapped_arr = arr.map { |element| element * 2 }
puts mapped_arr

# Reversing the order of elements in the array
reversed_arr = arr.reverse
puts reversed_arr

# Calculating the sum of array elements
sum = arr.sum
puts sum

# Copying elements from one array to another
copied_arr = arr.clone
puts copied_arr

# Checking if an array contains a certain element
puts arr.include?(5)

# Converting an array to a string
arr_string = arr.join(',')
puts arr_string

# Converting a string back to an array
new_arr = arr_string.split(',')
puts new_arr

# Creating multi-dimensional arrays
multi_dim_arr = [[1, 2], [3, 4], [5, 6]]
puts multi_dim_arr

# Implementing binary search with arrays
def binary_search(arr, target)
  low = 0
  high = arr.length - 1

  while low <= high
    mid = (low + high) / 2
    if arr[mid] == target
      return mid
    elsif arr[mid] < target
      low = mid + 1
    else
      high = mid - 1
    end
  end
  return -1
end

puts binary_search(sorted_arr, 4)
