fun main() {
    val numbers = arrayOf(4, 13, 7, 21, 16)

    // Accessing individual elements via index
    val elementAtIndex2 = numbers[2]
    println("Element at index 2: $elementAtIndex2")

    // Iterating over elements using loops
    for (number in numbers) {
        println(number)
    }

    // Sorting elements in ascending order
    val sortedNumbers = numbers.sorted()
    println("Sorted numbers: $sortedNumbers")

    // Searching for a specific element within the array
    val numberToFind = 7
    val index = numbers.indexOf(numberToFind)
    if (index != -1) {
        println("$numberToFind found at index $index")
    } else {
        println("$numberToFind not found")
    }

    // Modifying elements at specific positions
    numbers[3] = 100
    println("Modified array: ${numbers.joinToString()}")

    // Adding elements to the end of the array
    numbers += 5
    println("Array after adding 5: ${numbers.joinToString()}")

    // Removing elements from the array
    numbers.drop(2)
    println("Array after removing first 2 elements: ${numbers.joinToString()}")

    // Merging two arrays into a single array
    val moreNumbers = arrayOf(3, 8)
    val mergedArray = numbers + moreNumbers
    println("Merged array: ${mergedArray.joinToString()}")

    // Splitting an array into multiple smaller arrays
    val chunkedArrays = numbers.chunked(2)
    println("Chunked arrays: $chunkedArrays")

    // Finding the maximum element in the array
    val maxNumber = numbers.maxOrNull()
    println("Max number: $maxNumber")

    // Filtering elements based on a condition
    val filteredNumbers = numbers.filter { it % 2 == 0 }
    println("Filtered numbers (even): $filteredNumbers")

    // Mapping elements to a new value
    val doubledNumbers = numbers.map { it * 2 }
    println("Doubled numbers: ${doubledNumbers.joinToString()}")

    // Reversing the order of elements in the array
    val reversedArray = numbers.reversed()
    println("Reversed array: ${reversedArray.joinToString()}")

    // Calculating the sum of array elements
    val sum = numbers.sum()
    println("Sum of array elements: $sum")

    // Checking if an array contains a certain element
    val containsSeven = numbers.contains(7)
    println("Array contains 7: $containsSeven")

    // Converting an array to a string
    val numbersString = numbers.joinToString(separator = ", ", prefix = "[", postfix = "]")
    println("Array as string: $numbersString")
}
