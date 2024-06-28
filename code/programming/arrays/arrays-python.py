import numpy as np

# 1. Storing Data
data = np.array([1, 2, 3, 4, 5])
print("Original Data:", data)

# 2. Mathematical Operations
squared_data = data ** 2
print("Squared Data:", squared_data)

# 3. Sorting and Searching
sorted_data = np.sort(data)
print("Sorted Data:", sorted_data)

search_value = 3
search_index = np.where(data == search_value)
print(f"Index of {search_value}:", search_index[0][0])

# 4. Data Analysis
mean_value = np.mean(data)
print("Mean Value:", mean_value)

sum_value = np.sum(data)
print("Sum Value:", sum_value)

# 5. Multidimensional Arrays
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Original Matrix:\n", matrix)

transposed_matrix = np.transpose(matrix)
print("Transposed Matrix:\n", transposed_matrix)

# Example of matrix multiplication
identity_matrix = np.eye(3)
product_matrix = np.matmul(matrix, identity_matrix)
print("Matrix Product with Identity Matrix:\n", product_matrix)

# Image Processing (simulated with a simple 2D array)
image = np.random.rand(5, 5)  # Simulated grayscale image
print("Original Image:\n", image)

# Simple operation on image
brighter_image = image * 1.2  # Increase brightness
print("Brighter Image:\n", brighter_image)


