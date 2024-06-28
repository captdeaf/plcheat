-- 1. Storing Data
data = {1, 2, 3, 4, 5}
print("Original Data:")
for i = 1, #data do
    io.write(data[i], " ")
end
print()

-- 2. Mathematical Operations
squared_data = {}
for i = 1, #data do
    squared_data[i] = data[i] * data[i]
end
print("Squared Data:")
for i = 1, #squared_data do
    io.write(squared_data[i], " ")
end
print()

-- 3. Sorting and Searching
table.sort(data)
print("Sorted Data:")
for i = 1, #data do
    io.write(data[i], " ")
end
print()

search_value = 3
search_index = -1
for i = 1, #data do
    if data[i] == search_value then
        search_index = i
        break
    end
end
print("Index of " .. search_value .. ": " .. search_index)

-- 4. Data Analysis
sum_value = 0
for i = 1, #data do
    sum_value = sum_value + data[i]
end
mean_value = sum_value / #data
print("Mean Value: " .. mean_value)
print("Sum Value: " .. sum_value)

-- 5. Multidimensional Arrays
matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
}
print("Original Matrix:")
for i = 1, #matrix do
    for j = 1, #matrix[i] do
        io.write(matrix[i][j], " ")
    end
    print()
end

-- Transpose the matrix
transposed_matrix = {}
for i = 1, #matrix[1] do
    transposed_matrix[i] = {}
    for j = 1, #matrix do
        transposed_matrix[i][j] = matrix[j][i]
    end
end
print("Transposed Matrix:")
for i = 1, #transposed_matrix do
    for j = 1, #transposed_matrix[i] do
        io.write(transposed_matrix[i][j], " ")
    end
    print()
end

-- Example of matrix multiplication (identity matrix)
identity_matrix = {
    {1, 0, 0},
    {0, 1, 0},
    {0, 0, 1}
}
product_matrix = {}
for i = 1, #matrix do
    product_matrix[i] = {}
    for j = 1, #identity_matrix[1] do
        sum = 0
        for k = 1, #identity_matrix do
            sum = sum + matrix[i][k] * identity_matrix[k][j]
        end
        product_matrix[i][j] = sum
    end
end
print("Matrix Product with Identity Matrix:")
for i = 1, #product_matrix do
    for j = 1, #product_matrix[i] do
        io.write(product_matrix[i][j], " ")
    end
    print()
end

-- Image Processing (simulated with a simple 2D array)
math.randomseed(os.time())
image = {}
for i = 1, 5 do
    image[i] = {}
    for j = 1, 5 do
        image[i][j] = math.random()
    end
end
print("Original Image:")
for i = 1, #image do
    for j = 1, #image[i] do
        io.write(string.format("%.2f", image[i][j]), " ")
    end
    print()
end

-- Simple operation on image
brighter_image = {}
for i = 1, #image do
    brighter_image[i] = {}
    for j = 1, #image[i] do
        brighter_image[i][j] = image[i][j] * 1.2
    end
end
print("Brighter Image:")
for i = 1, #brighter_image do
    for j = 1, #brighter_image[i] do
        io.write(string.format("%.2f", brighter_image[i][j]), " ")
    end
    print()
end

