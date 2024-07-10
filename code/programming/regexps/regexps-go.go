package main

import (
    "fmt"
    "regexp"
)

func main() {
    // Searching for specific patterns in text data
    text := "The quick brown fox jumps over the lazy dog."
    pattern := regexp.MustCompile("quick")
    if pattern.MatchString(text) {
        fmt.Println("Pattern found in text.")
    }

    // Validating input forms (such as emails, phone numbers, etc.)
    email := "user@example.com"
    emailPattern := regexp.MustCompile(`^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$`)
    if emailPattern.MatchString(email) {
        fmt.Println("Email is valid.")
    }

    // Data scraping
    htmlData := "<h1>Hello, World!</h1>"
    tagPattern := regexp.MustCompile("<.*?>")
    cleanedData := tagPattern.ReplaceAllString(htmlData, "")
    fmt.Println("Cleaned data:", cleanedData)

    // Parsing and extracting information from structured data
    inputData := "Name: John, Age: 25, Gender: Male"
    infoPattern := regexp.MustCompile("Name: (.*), Age: (.*), Gender: (.*)")
    result := infoPattern.FindStringSubmatch(inputData)
    fmt.Println("Extracted information:")
    for i, v := range result {
        fmt.Printf("Group %d: %s\n", i, v)
    }

    // Replacing strings that match a certain pattern with another string
    sentence := "The cat sat on the mat."
    replacePattern := regexp.MustCompile("cat|mat")
    replacedSentence := replacePattern.ReplaceAllString(sentence, "dog")
    fmt.Println("Replaced sentence:", replacedSentence)

    // Tokenizing strings into smaller components
    textToTokenize := "Hello, World!"
    tokenizer := regexp.MustCompile(`\b\w+\b`)
    tokens := tokenizer.FindAllString(textToTokenize, -1)
    fmt.Println("Tokens:", tokens)

    // More code snippets can be added for other use cases
}
