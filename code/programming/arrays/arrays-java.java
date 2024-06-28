import java.util.Arrays;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // 1. Storing Data
        int[] data = {1, 2, 3, 4, 5};
        System.out.println("Original Data: " + Arrays.toString(data));

        // 2. Mathematical Operations
        int[] squared_data = Arrays.stream(data).map(x -> x * x).toArray();
        System.out.println("Squared Data: " + Arrays.toString(squared_data));

        // 3. Sorting and Searching
        int[] sorted_data = Arrays.copyOf(data, data.length);
        Arrays.sort(sorted_data);
        System.out.println("Sorted Data: " + Arrays.toString(sorted_data));

        int search_value = 3;
        int search_index = Arrays.binarySearch(data, search_value);
        System.out.println("Index of " + search_value + ": " + search_index);

        // 4. Data Analysis
        double mean_value = Arrays.stream(data).average().orElse(0);
        System.out.println("Mean Value: " + mean_value);

        int sum_value = Arrays.stream(data).sum();
        System.out.println("Sum Value: " + sum_value);

        // 5. Multidimensional Arrays
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println("Original Matrix: " + Arrays.deepToString(matrix));

        int[][] transposed_matrix = transpose(matrix);
        System.out.println("Transposed Matrix: " + Arrays.deepToString(transposed_matrix));

        // Example of matrix multiplication (identity matrix)
        int[][] identity_matrix = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};
        int[][] product_matrix = multiply(matrix, identity_matrix);
        System.out.println("Matrix Product with Identity Matrix: " + Arrays.deepToString(product_matrix));

        // Image Processing (simulated with a simple 2D array)
        double[][] image = new double[5][5];
        Random random = new Random();
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                image[i][j] = random.nextDouble();
            }
        }
        System.out.println("Original Image: " + Arrays.deepToString(image));

        // Simple operation on image
        double[][] brighter_image = new double[5][5];
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                brighter_image[i][j] = image[i][j] * 1.2;
            }
        }
        System.out.println("Brighter Image: " + Arrays.deepToString(brighter_image));
    }

    public static int[][] transpose(int[][] matrix) {
        int[][] transposed = new int[matrix[0].length][matrix.length];
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                transposed[j][i] = matrix[i][j];
            }
        }
        return transposed;
    }

    public static int[][] multiply(int[][] a, int[][] b) {
        int[][] product = new int[a.length][b[0].length];
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < b[0].length; j++) {
                int sum = 0;
                for (int k = 0; k < a[i].length; k++) {
                    sum += a[i][k] * b[k][j];
                }
                product[i][j] = sum;
            }
        }
        return product;
    }
}

