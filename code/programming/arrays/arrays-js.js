fn main() {
    // 1. Storing Data
    let data = vec![1, 2, 3, 4, 5];
    println!("Original Data: {:?}", data);

    // 2. Mathematical Operations
    let squared_data: Vec<i32> = data.iter().map(|&x| x * x).collect();
    println!("Squared Data: {:?}", squared_data);

    // 3. Sorting and Searching
    let mut sorted_data = data.clone();
    sorted_data.sort();
    println!("Sorted Data: {:?}", sorted_data);

    let search_value = 3;
    if let Some(search_index) = data.iter().position(|&x| x == search_value) {
        println!("Index of {}: {}", search_value, search_index);
    }

    // 4. Data Analysis
    let sum_value: i32 = data.iter().sum();
    let mean_value = sum_value as f64 / data.len() as f64;
    println!("Mean Value: {}", mean_value);
    println!("Sum Value: {}", sum_value);

    // 5. Multidimensional Arrays
    let matrix: Vec<Vec<i32>> = vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]];
    println!("Original Matrix: {:?}", matrix);

    let transposed_matrix: Vec<Vec<i32>> = (0..matrix[0].len())
        .map(|i| matrix.iter().map(|row| row[i]).collect())
        .collect();
    println!("Transposed Matrix: {:?}", transposed_matrix);

    // Example of matrix multiplication (identity matrix)
    let identity_matrix: Vec<Vec<i32>> = vec![vec![1, 0, 0], vec![0, 1, 0], vec![0, 0, 1]];
    let product_matrix: Vec<Vec<i32>> = matrix
        .iter()
        .map(|row| {
            row.iter()
                .enumerate()
                .map(|(i, &val)| val * identity_matrix[i][i])
                .collect()
        })
        .collect();
    println!("Matrix Product with Identity Matrix: {:?}", product_matrix);

    // Image Processing (simulated with a simple 2D array)
    let image: Vec<Vec<f64>> = (0..5).map(|_| (0..5).map(|_| rand::random()).collect()).collect();
    println!("Original Image: {:?}", image);

    // Simple operation on image
    let brighter_image: Vec<Vec<f64>> = image
        .iter()
        .map(|row| row.iter().map(|&pixel| pixel * 1.2).collect())
        .collect();
    println!("Brighter Image: {:?}", brighter_image);
}

