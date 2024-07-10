// Storing key-value pairs for quick retrieval
val dictionary = mutableMapOf<String, Int>()
dictionary["apple"] = 5
dictionary["banana"] = 10
println("Value for key 'apple': ${dictionary["apple"]}")

// Implementing a cache or memoization system
val cache = mutableMapOf<Int, Int>()
fun fibonacci(n: Int): Int {
    return cache.getOrPut(n) {
        if (n <= 1) n else fibonacci(n - 1) + fibonacci(n - 2)
    }
}
println("Fibonacci value for 10: ${fibonacci(10)}")

// Counting occurrences of elements in a collection
val elements = listOf(1, 2, 3, 1, 2, 1, 4, 5)
val countMap = elements.groupingBy { it }.eachCount()
println("Occurrences of 1: ${countMap[1]}")

// Mapping unique identifiers to objects or data
data class Product(val id: String, val name: String)
val products = listOf(Product("A001", "Chair"), Product("A002", "Table"))
val productMap = products.associateBy { it.id }
println("Product with ID A001: ${productMap["A001"]}")

// Building efficient lookup tables for data processing
val employeeData = mapOf(
    "John" to 30,
    "Alice" to 25,
    "Bob" to 28
)
println("Age of Bob: ${employeeData["Bob"]}")

// Checking for the existence of an element in a collection
val fruits = setOf("apple", "banana", "orange")
if ("banana" in fruits) {
    println("Found banana in the set")
}

// Implementing a data structure like a symbol table or associative array
val symbolTable = mutableMapOf<Char, String>()
symbolTable['A'] = "Alpha"
symbolTable['B'] = "Beta"
println("Value for symbol 'A': ${symbolTable['A']}")

// Grouping and organizing data based on certain criteria
data class Person(val name: String, val age: Int)
val people = listOf(
    Person("Alice", 30),
    Person("Bob", 25),
    Person("Alice", 28)
)
val groupedByAge = people.groupBy { it.age }
println("People aged 28: ${groupedByAge[28]}")

// Providing a fast method for searching and accessing data
val bookCollection = mapOf(
    "SciFi" to listOf("Dune", "Foundation"),
    "Fantasy" to listOf("Harry Potter", "Lord of the Rings")
)
val sciFiBooks = bookCollection["SciFi"]
println("SciFi books: $sciFiBooks")
