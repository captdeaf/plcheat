import java.util.regex.Pattern

fun main() {
    val text = "Regular expressions are very useful for text processing."
    
    // Searching for specific patterns in text data
    val pattern1 = Pattern.compile("text")
    val matcher1 = pattern1.matcher(text)
    while (matcher1.find()) {
        println("Found: ${matcher1.group()}")
    }
    
    // Validating input forms (such as emails, phone numbers, etc.)
    val emailPattern = Pattern.compile("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z]{2,}\\b", Pattern.CASE_INSENSITIVE)
    val email = "example@email.com"
    println("Is email valid: ${emailPattern.matcher(email).matches()}")
    
    // Data scraping
    val html = "<h1>Hello, World!</h1>"
    val tagPattern = Pattern.compile("<.*?>")
    val scrapedText = tagPattern.matcher(html).replaceAll("")
    println("Scraped text: $scrapedText")
    
    // Parsing and extracting information from structured data
    val data = "Name: John, Age: 30"
    val extractPattern = Pattern.compile("Name: (.*), Age: (\\d+)")
    val matcher2 = extractPattern.matcher(data)
    while (matcher2.find()) {
        val name = matcher2.group(1)
        val age = matcher2.group(2)
        println("Name: $name, Age: $age")
    }
    
    // Replacing strings that match a certain pattern with another string
    val replacePattern = Pattern.compile("\\buseful\\b")
    val updatedText = replacePattern.matcher(text).replaceAll("powerful")
    println("Updated text: $updatedText")
    
    // Tokenizing strings into smaller components
    val tokens = text.split("\\s+".toRegex())
    println("Tokens: $tokens")
    
    // Other use cases can be implemented similarly using regular expressions
}
