#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
#include <cmath>
#include <cstdlib>

void printVector(const std::vector<int>& vec) {
    for (const int& val : vec) {
        std::cout << val << " ";
    }
    std::cout << std::endl;
}

void printMatrix(const std::vector<std::vector<int>>& mat) {
    for (const auto& row : mat) {
        for (const int& val : row) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
    }
}

void printMatrix(const std::vector<std::vector<double>>& mat) {
    for (const auto& row : mat) {
        for (const double& val : row) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
    }
}

int main() {
    // 1. Storing Data
    std::vector<int> data = {1, 2, 3, 4, 5};
    std::cout << "Original Data: ";
    printVector(data);

    // 2. Mathematical Operations
    std::vector<int> squared_data;
    std::transform(data.begin(), data.end(), std::back_inserter(squared_data), [](int x) { return x * x; });
    std::cout << "Squared Data: ";
    printVector(squared_data);

    // 3. Sorting and Searching
    std::vector<int> sorted_data = data;
    std::sort(sorted_data.begin(), sorted_data.end());
    std::cout << "Sorted Data: ";
    printVector(sorted_data);

    int search_value = 3;
    auto it = std::find(data.begin(), data.end(), search_value);
    if (it != data.end()) {
        std::cout << "Index of " << search_value << ": " << std::distance(data.begin(), it) << std::endl;
    }

    // 4. Data Analysis
    double mean_value = std::accumulate(data.begin(), data.end(), 0.0) / data.size();
    std::cout << "Mean Value: " << mean_value << std::endl;

    int sum_value = std::accumulate(data.begin(), data.end(), 0);
    std::cout << "Sum Value: " << sum_value << std::endl;

    // 5. Multidimensional Arrays
    std::vector<std::vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    std::cout << "Original Matrix:" << std::endl;
    printMatrix(matrix);

    std::vector<std::vector<int>> transposed_matrix(3, std::vector<int>(3));
    for (size_t i = 0; i < matrix.size(); ++i) {
        for (size_t j = 0; j < matrix[0].size(); ++j) {
            transposed_matrix[j][i] = matrix[i][j];
        }
    }
    std::cout << "Transposed Matrix:" << std::endl;
    printMatrix(transposed_matrix);

    // Example of matrix multiplication (identity matrix)
    std::vector<std::vector<int>> identity_matrix = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};
    std::vector<std::vector<int>> product_matrix(3, std::vector<int>(3, 0));
    for (size_t i = 0; i < matrix.size(); ++i) {
        for (size_t j = 0; j < identity_matrix[0].size(); ++j) {
            for (size_t k = 0; k < identity_matrix.size(); ++k) {
                product_matrix[i][j] += matrix[i][k] * identity_matrix[k][j];
            }
        }
    }
    std::cout << "Matrix Product with Identity Matrix:" << std::endl;
    printMatrix(product_matrix);

    // Image Processing (simulated with a simple 2D array)
    std::vector<std::vector<double>> image(5, std::vector<double>(5));
    for (auto& row : image) {
        for (auto& pixel : row) {
            pixel = static_cast<double>(rand()) / RAND_MAX;
        }
    }
    std::cout << "Original Image:" << std::endl;
    printMatrix(image);

    // Simple operation on image
    std::vector<std::vector<double>> brighter_image = image;
    for (auto& row : brighter_image) {
        for (auto& pixel : row) {
            pixel *= 1.2;
        }
    }
    std::cout << "Brighter Image:" << std::endl;
    printMatrix(brighter_image);

    return 0;
}

