// Kotlin - RegexExamples.kt
fun main() {
    // Pattern Matching
    val pattern = "\\d+".toRegex()  // Match one or more digits
    val text = "There are 123 apples"
    println("Pattern Matching: ${if (pattern.containsMatchIn(text)) "Match found!" else "No match found."}")

    // Search and Replace
OBOBOB    var text = "Hello 123, meet 456"
    var result = text.replace("\\d+".toRegex(), "number")
    println("Search and Replace: $result")  // "Hello number, meet number"

    // String Splitting
    text = "apple, orange; banana, grape"
    val resultArray = text.split("[,;]".toRegex())
    println("String Splitting: ${resultArray.joinToString(", ")}")  // ["apple", " orange", " banana", " grape"]

    // Extracting Substrings
    text = "The date is 2024-06-27"
    pattern = "(\\d{4})-(\\d{2})-(\\d{2})".toRegex()
    val matchResult = pattern.find(text)
    matchResult?.groupValues?.let { groups ->
        println("Extracting Substrings: ${groups[1]}, ${groups[2]}, ${groups[3]}")  // ["2024", "06", "27"]
    }

    // Validation
    val email = "example@test.com"
    val emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$".toRegex()
    println("Validation: ${if (emailPattern.matches(email)) "Valid email address!" else "Invalid email address."}")

    // Removing Unwanted Characters
    text = "Hello, World!"
    result = text.replace("[^\\w\\s]".toRegex(), "")  // Remove all non-alphanumeric characters
    println("Removing Unwanted Characters: $result")  // "Hello World"

    // Anchoring Searches
    text = "The quick brown fox"
    val wordPattern = "\\bfox\\b".toRegex()  // Match 'fox' as a whole word
    println("Anchoring Searches: ${if (wordPattern.containsMatchIn(text)) "Found" else "Not Found"}")

    // Escaping Characters
    val user_input = "some[unsafe]input"
    val escaped_input = Regex.escape(user_input)
    println("Escaping Characters: $escaped_input")  // "some\[unsafe\]input"

    // Conditional Matching
    text = "foobar and foo"
    val lookaheadPattern = "foo(?=bar)".toRegex()  // Match 'foo' only if followed by 'bar'
    val matches = lookaheadPattern.findAll(text).map { it.value }.toList()
    println("Conditional Matching: ${matches.joinToString(", ")}")  // "foo"
}

