use std::collections::HashMap;

fn main() {
    // Storing key-value pairs for quick retrieval
    let mut dictionary: HashMap<&str, i32> = HashMap::new();
    dictionary.insert("apple", 5);
    dictionary.insert("banana", 3);
    dictionary.insert("orange", 8);

    // Implementing a cache or memoization system
    let mut cache: HashMap<i32, i32> = HashMap::new();
    fn fibonacci(n: i32, cache: &mut HashMap<i32, i32>) -> i32 {
        if let Some(&result) = cache.get(&n) {
            return result;
        }
        let result = if n <= 2 { 1 } 
                    else { fibonacci(n - 1, cache) + fibonacci(n - 2, cache) };
        cache.insert(n, result);
        result
    }

    // Counting occurrences of elements in a collection
    let collection = vec![1, 2, 3, 4, 5, 2, 3, 4, 2];
    let mut occurrences: HashMap<i32, i32> = HashMap::new();
    for &element in &collection {
        *occurrences.entry(element).or_insert(0) += 1;
    }

    // Mapping unique identifiers to objects or data
    struct Person {
        name: String,
        age: u8,
    }
    let mut people_map: HashMap<u32, Person> = HashMap::new();
    let person_id = 1;
    let person = Person { name: String::from("Alice"), age: 30 };
    people_map.insert(person_id, person);

    // Building efficient lookup tables for data processing
    let lookup_table: HashMap<&str, &str> = [
        ("A", "Alpha"),
        ("B", "Bravo"),
        ("C", "Charlie"),
    ].iter().cloned().collect();

    // Checking for the existence of an element in a collection
    let fruits = vec!["apple", "banana", "orange"];
    if fruits.contains(&"banana") {
        println!("Banana is in the list");
    }

    // Implementing a data structure like a symbol table or associative array
    let mut symbol_table: HashMap<&str, f64> = HashMap::new();
    symbol_table.insert("PI", 3.14159);

    // Grouping and organizing data based on certain criteria
    let ungrouped_data = vec![("a", 1), ("a", 2), ("b", 3), ("b", 4)];
    let mut grouped_data: HashMap<&str, Vec<i32>> = HashMap::new();
    for (key, value) in ungrouped_data {
        grouped_data.entry(key).or_insert(Vec::new()).push(value);
    }

    // Providing a fast method for searching and accessing data
    let mut data_table: HashMap<&str, i32> = HashMap::new();
    data_table.insert("Alice", 25);
    data_table.insert("Bob", 30);

    if let Some(age) = data_table.get("Alice") {
        println!("Alice's age is {}", age);
    }
}
