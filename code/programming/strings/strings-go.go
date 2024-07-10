package main

import (
	"fmt"
	"strings"
)

// Concatenating two strings together to create a longer string
func concatenateStrings(str1, str2 string) string {
	return str1 + str2
}

// Splitting a string into an array of substrings based on a delimiter
func splitString(str, delimiter string) []string {
	return strings.Split(str, delimiter)
}

// Replacing a specific substring with another substring within a larger string
func replaceSubstring(mainStr, oldSub, newSub string) string {
	return strings.Replace(mainStr, oldSub, newSub, -1)
}

// Removing leading and trailing whitespace from a string
func trimString(str string) string {
	return strings.TrimSpace(str)
}

// Converting a string to uppercase or lowercase
func convertCase(str, caseType string) string {
	if caseType == "uppercase" {
		return strings.ToUpper(str)
	} else if caseType == "lowercase" {
		return strings.ToLower(str)
	}
	return ""
}

// Checking if a string contains a certain substring
func containsSubstring(str, sub string) bool {
	return strings.Contains(str, sub)
}

// Finding the index of a specific substring within a larger string
func findIndexString(mainStr, sub string) int {
	return strings.Index(mainStr, sub)
}

// Getting the length of a string
func getStringLength(str string) int {
	return len(str)
}

// Reversing a string
func reverseString(str string) string {
	runes := []rune(str)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func main() {
	str1 := "Hello"
	str2 := "World"
	concatenatedStr := concatenateStrings(str1, str2)
	fmt.Println("Concatenated String:", concatenatedStr)

	splitStr := "apple,banana,cherry"
	delimiter := ","
	splitArr := splitString(splitStr, delimiter)
	fmt.Println("Split Array:", splitArr)

	replacedStr := replaceSubstring("Hello, World!", "Hello", "Hola")
	fmt.Println("Replaced String:", replacedStr)

	trimmedStr := trimString("  Example String   ")
	fmt.Println("Trimmed String:", trimmedStr)

	caseStr := "lowercase"
	fmt.Println("Converted Case:", convertCase(caseStr, "uppercase"))

	searchStr := "This is a key sentence."
	subStr := "key"
	fmt.Println("Contains Substring:", containsSubstring(searchStr, subStr))

	indexStr := "Finding the index"
	subIndex := "the"
	fmt.Println("Index of Substring:", findIndexString(indexStr, subIndex))

	lengthStr := "Length of this string"
	fmt.Println("String Length:", getStringLength(lengthStr))

	reversedStr := "reverse"
	fmt.Println("Reversed String:", reverseString(reversedStr))
}
