fun main() {
    // 1. Storing Data
    val data = listOf(1, 2, 3, 4, 5)
    println("Original Data: $data")

    // 2. Mathematical Operations
    val squaredData = data.map { it * it }
    println("Squared Data: $squaredData")

    // 3. Sorting and Searching
    val sortedData = data.sorted()
    println("Sorted Data: $sortedData")

    val searchValue = 3
    val searchIndex = data.indexOf(searchValue)
    println("Index of $searchValue: $searchIndex")

    // 4. Data Analysis
    val meanValue = data.average()
    println("Mean Value: $meanValue")

    val sumValue = data.sum()
    println("Sum Value: $sumValue")

    // 5. Multidimensional Arrays
    val matrix = listOf(
        listOf(1, 2, 3),
        listOf(4, 5, 6),
        listOf(7, 8, 9)
    )
    println("Original Matrix:")
    matrix.forEach { println(it) }

    // Transpose the matrix
    val transposedMatrix = List(matrix[0].size) { i -> List(matrix.size) { j -> matrix[j][i] } }
    println("Transposed Matrix:")
    transposedMatrix.forEach { println(it) }

    // Example of matrix multiplication (identity matrix)
    val identityMatrix = listOf(
        listOf(1, 0, 0),
        listOf(0, 1, 0),
        listOf(0, 0, 1)
    )
    val productMatrix = matrix.map { row ->
        List(identityMatrix[0].size) { col ->
            row.indices.sumOf { row[it] * identityMatrix[it][col] }
        }
    }
    println("Matrix Product with Identity Matrix:")
    productMatrix.forEach { println(it) }

    // Image Processing (simulated with a simple 2D array)
    val image = List(5) { List(5) { kotlin.random.Random.nextDouble() } }
    println("Original Image:")
    image.forEach { row -> println(row.joinToString(" ") { "%.2f".format(it) }) }

    // Simple operation on image
    val brighterImage = image.map { row -> row.map { it * 1.2 } }
    println("Brighter Image:")
    brighterImage.forEach { row -> println(row.joinToString(" ") { "%.2f".format(it) }) }
}

