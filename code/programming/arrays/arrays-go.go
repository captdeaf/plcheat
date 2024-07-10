package main

import (
	"fmt"
	"sort"
)

func main() {
	// Storing a collection of elements of the same data type
	numbers := []int{1, 2, 3, 4, 5}

	// Accessing individual elements via index
	fmt.Println(numbers[0])

	// Iterating over elements using loops
	for i := 0; i < len(numbers); i++ {
		fmt.Println(numbers[i])
	}

	// Sorting elements in ascending order
	sort.Ints(numbers)
	fmt.Println(numbers)

	// Searching for a specific element within the array
	searchElement := 3
	for i := 0; i < len(numbers); i++ {
		if numbers[i] == searchElement {
			fmt.Printf("%d found at index %d\n", searchElement, i)
			break
		}
	}

	// Modifying elements at specific positions
	numbers[2] = 10
	fmt.Println(numbers)

	// Adding elements to the end of the array
	numbers = append(numbers, 6)
	fmt.Println(numbers)

	// Removing elements from the array
	indexToRemove := 1
	numbers = append(numbers[:indexToRemove], numbers[indexToRemove+1:]...)
	fmt.Println(numbers)

	// Merging two arrays into a single array
	otherNumbers := []int{7, 8, 9}
	numbers = append(numbers, otherNumbers...)
	fmt.Println(numbers)

	// Splitting an array into multiple smaller arrays
	chunkSize := 2
	for i := 0; i < len(numbers); i += chunkSize {
		fmt.Println(numbers[i : i+chunkSize])
	}

	// Finding the maximum element in the array
	max := numbers[0]
	for _, num := range numbers {
		if num > max {
			max = num
		}
	}
	fmt.Println("Max element:", max)

	// Filtering elements based on a condition
	filteredNumbers := []int{}
	for _, num := range numbers {
		if num%2 == 0 {
			filteredNumbers = append(filteredNumbers, num)
		}
	}
	fmt.Println("Filtered numbers:", filteredNumbers)

	// Mapping elements to a new value
	for i, num := range numbers {
		numbers[i] = num * 2
	}
	fmt.Println(numbers)

	// Reversing the order of elements in the array
	reversedNumbers := []int{}
	for i := len(numbers) - 1; i >= 0; i-- {
		reversedNumbers = append(reversedNumbers, numbers[i])
	}
	fmt.Println("Reversed numbers:", reversedNumbers)

	// Calculating the sum of array elements
	sum := 0
	for _, num := range numbers {
		sum += num
	}
	fmt.Println("Sum:", sum)

	// Copying elements from one array to another
	copiedNumbers := make([]int, len(numbers))
	copy(copiedNumbers, numbers)
	fmt.Println("Copied numbers:", copiedNumbers)

	// Checking if an array contains a certain element
	elementToCheck := 4
	found := false
	for _, num := range numbers {
		if num == elementToCheck {
			found = true
			break
		}
	}
	fmt.Println("Element found:", found)

	// Converting an array to a string
	str := fmt.Sprint(numbers)
	fmt.Println("Array as string:", str)
}
