using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // 1. Storing Data
        int[] data = { 1, 2, 3, 4, 5 };
        Console.WriteLine("Original Data: " + string.Join(", ", data));

        // 2. Mathematical Operations
        int[] squaredData = data.Select(x => x * x).ToArray();
        Console.WriteLine("Squared Data: " + string.Join(", ", squaredData));

        // 3. Sorting and Searching
        int[] sortedData = data.OrderBy(x => x).ToArray();
        Console.WriteLine("Sorted Data: " + string.Join(", ", sortedData));

        int searchValue = 3;
        int searchIndex = Array.IndexOf(data, searchValue);
        Console.WriteLine($"Index of {searchValue}: {searchIndex}");

        // 4. Data Analysis
        double meanValue = data.Average();
        Console.WriteLine("Mean Value: " + meanValue);

        int sumValue = data.Sum();
        Console.WriteLine("Sum Value: " + sumValue);

        // 5. Multidimensional Arrays
        int[,] matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        Console.WriteLine("Original Matrix:");
        PrintMatrix(matrix);

        int[,] transposedMatrix = Transpose(matrix);
        Console.WriteLine("Transposed Matrix:");
        PrintMatrix(transposedMatrix);

        // Example of matrix multiplication (identity matrix)
        int[,] identityMatrix = { { 1, 0, 0 }, { 0, 1, 0 }, { 0, 0, 1 } };
        int[,] productMatrix = Multiply(matrix, identityMatrix);
        Console.WriteLine("Matrix Product with Identity Matrix:");
        PrintMatrix(productMatrix);

        // Image Processing (simulated with a simple 2D array)
        Random rand = new Random();
        double[,] image = new double[5, 5];
        for (int i = 0; i < 5; i++)
            for (int j = 0; j < 5; j++)
                image[i, j] = rand.NextDouble();
        Console.WriteLine("Original Image:");
        PrintMatrix(image);

        // Simple operation on image
        double[,] brighterImage = new double[5, 5];
        for (int i = 0; i < 5; i++)
            for (int j = 0; j < 5; j++)
                brighterImage[i, j] = image[i, j] * 1.2;
        Console.WriteLine("Brighter Image:");
        PrintMatrix(brighterImage);
    }

    static void PrintMatrix(int[,] matrix)
    {
        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            for (int j = 0; j < matrix.GetLength(1); j++)
                Console.Write(matrix[i, j] + " ");
            Console.WriteLine();
        }
    }

    static void PrintMatrix(double[,] matrix)
    {
        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            for (int j = 0; j < matrix.GetLength(1); j++)
                Console.Write(matrix[i, j].ToString("F2") + " ");
            Console.WriteLine();
        }
    }

    static int[,] Transpose(int[,] matrix)
    {
        int rows = matrix.GetLength(0);
        int cols = matrix.GetLength(1);
        int[,] transposed = new int[cols, rows];

        for (int i = 0; i < rows; i++)
            for (int j = 0; j < cols; j++)
                transposed[j, i] = matrix[i, j];

        return transposed;
    }

    static int[,] Multiply(int[,] a, int[,] b)
    {
        int rows = a.GetLength(0);
        int cols = b.GetLength(1);
        int innerDim = a.GetLength(1);
        int[,] product = new int[rows, cols];

        for (int i = 0; i < rows; i++)
            for (int j = 0; j < cols; j++)
                for (int k = 0; k < innerDim; k++)
                    product[i, j] += a[i, k] * b[k, j];

        return product;
    }
}

