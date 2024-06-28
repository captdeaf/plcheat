import 'dart:math';

void main() {
  // 1. Storing Data
  List<int> data = [1, 2, 3, 4, 5];
  print("Original Data: $data");

  // 2. Mathematical Operations
  List<int> squaredData = data.map((x) => x * x).toList();
  print("Squared Data: $squaredData");

  // 3. Sorting and Searching
  List<int> sortedData = List.from(data)..sort();
  print("Sorted Data: $sortedData");

  int searchValue = 3;
  int searchIndex = data.indexOf(searchValue);
  print("Index of $searchValue: $searchIndex");

  // 4. Data Analysis
  double meanValue = data.reduce((a, b) => a + b) / data.length;
  print("Mean Value: $meanValue");

  int sumValue = data.reduce((a, b) => a + b);
  print("Sum Value: $sumValue");

  // 5. Multidimensional Arrays
  List<List<int>> matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  print("Original Matrix:");
  matrix.forEach((row) => print(row));

  // Transpose the matrix
  List<List<int>> transposedMatrix = List.generate(
      matrix[0].length, (i) => List.generate(matrix.length, (j) => matrix[j][i]));
  print("Transposed Matrix:");
  transposedMatrix.forEach((row) => print(row));

  // Example of matrix multiplication (identity matrix)
  List<List<int>> identityMatrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  List<List<int>> productMatrix = List.generate(matrix.length, (i) => List.generate(identityMatrix[0].length, (j) {
    int sum = 0;
    for (int k = 0; k < identityMatrix.length; k++) {
      sum += matrix[i][k] * identityMatrix[k][j];
    }
    return sum;
  }));
  print("Matrix Product with Identity Matrix:");
  productMatrix.forEach((row) => print(row));

  // Image Processing (simulated with a simple 2D array)
  Random random = Random();
  List<List<double>> image = List.generate(5, (i) => List.generate(5, (j) => random.nextDouble()));
  print("Original Image:");
  image.forEach((row) => print(row.map((pixel) => pixel.toStringAsFixed(2)).toList()));

  // Simple operation on image
  List<List<double>> brighterImage = image.map((row) => row.map((pixel) => pixel * 1.2).toList()).toList();
  print("Brighter Image:");
  brighterImage.forEach((row) => print(row.map((pixel) => pixel.toStringAsFixed(2)).toList()));
}

