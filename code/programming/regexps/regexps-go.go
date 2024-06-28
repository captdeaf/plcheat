// Go - regex_examples.go
package main

import (
    "fmt"
    "regexp"
)

func main() {
    // Pattern Matching
    pattern := `\d+`  // Match one or more digits
    text := "There are 123 apples"
    matched, _ := regexp.MatchString(pattern, text)
    fmt.Println("Pattern Matching:", matched)

    // Search and Replace
    re := regexp.MustCompile(pattern)
    text = "Hello 123, meet 456"
    result := re.ReplaceAllString(text, "number")
    fmt.Println("Search and Replace:", result)  // "Hello number, meet number"

    // String Splitting
    text = "apple, orange; banana, grape"
    re = regexp.MustCompile(`[ ,;]+`)
    resultSlice := re.Split(text, -1)
    fmt.Println("String Splitting:", resultSlice)  // ["apple", "orange", "banana", "grape"]

    // Extracting Substrings
    log_entry := "The date is 2024-06-27"
    re = regexp.MustCompile(`(\d{4})-(\d{2})-(\d{2})`)
    match := re.FindStringSubmatch(log_entry)
    fmt.Println("Extracting Substrings:", match)  // ["2024-06-27", "2024", "06", "27"]

    // Validation
    email := "example@test.com"
    pattern = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
    matched, _ = regexp.MatchString(pattern, email)
    fmt.Println("Validation:", matched)

    // Removing Unwanted Characters
    text = "Hello, World!"
    re = regexp.MustCompile(`[^\w\s]`)  // Remove all non-alphanumeric characters
    cleaned_text := re.ReplaceAllString(text, "")
    fmt.Println("Removing Unwanted Characters:", cleaned_text)  // "Hello World"

    // Anchoring Searches
    text = "The quick brown fox"
    re = regexp.MustCompile(`\bfox\b`)  // Match 'fox' as a whole word
    fmt.Println("Anchoring Searches:", re.MatchString(text))

    // Escaping Characters
    user_input := "some[unsafe]input"
    escaped_input := regexp.QuoteMeta(user_input)
    fmt.Println("Escaping Characters:", escaped_input)  // "some\[unsafe\]input"

    // Conditional Matching
    re = regexp.MustCompile(`foo(?=bar)`)  // Match 'foo' only if followed by 'bar'
    text = "foobar and foo"
    matches := re.FindAllString(text, -1)
    fmt.Println("Conditional Matching:", matches)  // ["foo"]
}

