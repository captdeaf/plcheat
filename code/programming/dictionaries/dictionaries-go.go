package main

import (
	"fmt"
)

func main() {
	// Storing key-value pairs for quick retrieval
	dictionary := map[string]int{
		"apple":  5,
		"banana": 3,
		"cherry": 7,
	}
	fmt.Println(dictionary["apple"])

	// Implementing a cache or memoization system
	cache := make(map[int]int)
	fibonacci := func(n int) int {
		if result, ok := cache[n]; ok {
			return result
		}
		if n <= 1 {
			return n
		}
		result := fibonacci(n-1) + fibonacci(n-2)
		cache[n] = result
		return result
	}
	fmt.Println(fibonacci(5))

	// Counting occurrences of elements in a collection
	elements := []string{"a", "b", "a", "c", "b", "a"}
	counts := make(map[string]int)
	for _, element := range elements {
		counts[element]++
	}
	fmt.Println(counts["a"])

	// Mapping unique identifiers to objects or data
	identifierMap := map[int]string{
		1: "Alice",
		2: "Bob",
		3: "Charlie",
	}
	fmt.Println(identifierMap[2])

	// Building efficient lookup tables for data processing
	lookupTable := map[string]int{
		"red":    1,
		"green":  2,
		"blue":   3,
		"yellow": 4,
	}
	fmt.Println(lookupTable["blue"])

	// Checking for the existence of an element in a collection
	checkMap := map[string]bool{
		"cat":  true,
		"dog":  true,
		"bird": true,
	}
	_, exists := checkMap["dog"]
	fmt.Println(exists)

	// Implementing a data structure like a symbol table or associative array
	symbolTable := map[string]string{
		"a": "alpha",
		"b": "beta",
		"c": "gamma",
	}
	fmt.Println(symbolTable["b"])

	// Grouping and organizing data based on certain criteria
	data := []string{"apple", "banana", "cherry", "apricot", "blueberry"}
	groups := make(map[rune][]string)
	for _, word := range data {
		groups[rune(word[0])] = append(groups[rune(word[0])], word)
	}
	fmt.Println(groups['a'])

	// Providing a fast method for searching and accessing data
	searchTable := map[int]string{
		1: "house",
		2: "car",
		3: "bike",
	}
	fmt.Println(searchTable[3])
}
