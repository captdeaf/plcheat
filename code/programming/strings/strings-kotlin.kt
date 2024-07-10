class WorkingWithStrings {
    fun concatenateStrings(str1: String, str2: String): String {
        return str1 + str2
    }

    fun splitString(str: String, delimiter: String): List<String> {
        return str.split(delimiter)
    }

    fun replaceSubstring(str: String, oldSub: String, newSub: String): String {
        return str.replace(oldSub, newSub)
    }

    fun removeWhitespace(str: String): String {
        return str.trim()
    }

    fun convertToUpperCase(str: String): String {
        return str.toUpperCase()
    }

    fun convertToLowerCase(str: String): String {
        return str.toLowerCase()
    }

    fun checkSubstring(str: String, sub: String): Boolean {
        return str.contains(sub)
    }

    fun findSubstringIndex(str: String, sub: String): Int {
        return str.indexOf(sub)
    }

    fun getStringLength(str: String): Int {
        return str.length
    }

    fun reverseString(str: String): String {
        return str.reversed()
    }

    fun formatString(name: String, age: Int): String {
        return "My name is $name and I am $age years old."
    }

    fun manipulateData(str: String): String {
        // Parsing and manipulating data can vary based on specific format e.g., JSON or XML
        // Logic to parse and manipulate the input string
        return "Manipulated data: $str"
    }

    fun generateObjectString(obj: Any): String {
        return obj.toString()
    }

    fun validateUserInput(input: String): Boolean {
        // Validation and sanitization logic
        return input.isNotBlank()
    }

    fun stringMatching(str1: String, str2: String): Boolean {
        return str1 == str2
    }

    fun searchSubstring(str: String, sub: String): Boolean {
        return str.contains(sub)
    }

    fun sortStrings(strList: List<String>): List<String> {
        return strList.sorted()
    }
}

fun main() {
    val helper = WorkingWithStrings()

    // Examples
    println(helper.concatenateStrings("Hello", "World"))
    println(helper.splitString("Apple,Orange,Peach", ","))
    println(helper.replaceSubstring("Hello Kotlin", "Kotlin", "World"))
    println(helper.removeWhitespace("  Trim me  "))
    println(helper.convertToUpperCase("hello"))
    println(helper.convertToLowerCase("WORLD"))
    println(helper.checkSubstring("Hello World", "World"))
    println(helper.findSubstringIndex("Hello World", "World"))
    println(helper.getStringLength("Kotlin"))
    println(helper.reverseString("TechGig"))
    println(helper.formatString("Alice", 30))
    println(helper.manipulateData("{\"name\": \"Alice\"}"))
    println(helper.generateObjectString(42))
    println(helper.validateUserInput("Input"))
    println(helper.stringMatching("Hello", "Hello"))
    println(helper.searchSubstring("Hello World", "World"))
    println(helper.sortStrings(listOf("Banana", "Apple", "Orange")))
}
