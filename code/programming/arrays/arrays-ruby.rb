# 1. Storing Data
data = [1, 2, 3, 4, 5]
puts "Original Data: #{data}"

# 2. Mathematical Operations
squared_data = data.map { |x| x ** 2 }
puts "Squared Data: #{squared_data}"

# 3. Sorting and Searching
sorted_data = data.sort
puts "Sorted Data: #{sorted_data}"

search_value = 3
search_index = data.index(search_value)
puts "Index of #{search_value}: #{search_index}"

# 4. Data Analysis
mean_value = data.sum / data.length.to_f
puts "Mean Value: #{mean_value}"

sum_value = data.sum
puts "Sum Value: #{sum_value}"

# 5. Multidimensional Arrays
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
puts "Original Matrix: #{matrix.inspect}"

transposed_matrix = matrix.transpose
puts "Transposed Matrix: #{transposed_matrix.inspect}"

# Example of matrix multiplication (identity matrix)
identity_matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
product_matrix = matrix.map { |row| row.each_with_index.map { |val, i| val * identity_matrix[i][i] } }
puts "Matrix Product with Identity Matrix: #{product_matrix.inspect}"

# Image Processing (simulated with a simple 2D array)
image = Array.new(5) { Array.new(5) { rand } }
puts "Original Image: #{image.inspect}"

# Simple operation on image
brighter_image = image.map { |row| row.map { |pixel| pixel * 1.2 } }
puts "Brighter Image: #{brighter_image.inspect}"

