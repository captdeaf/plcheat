fn main() {
    // Concatenating two strings
    let hello = "Hello".to_string();
    let world = "World".to_string();
    let combined = format!("{} {}", hello, world);
    println!("{}", combined);

    // Splitting a string
    let sentence = "The quick brown fox".to_string();
    let words: Vec<&str> = sentence.split(" ").collect();
    println!("{:?}", words);

    // Replacing a substring
    let mut sentence = "Hello, World!".to_string();
    sentence = sentence.replace("World", "Rust");
    println!("{}", sentence);

    // Removing leading and trailing whitespace
    let sentence = "   Trim me    ".trim();
    println!("{}", sentence);

    // Converting a string to uppercase or lowercase
    let sentence = "Rust is Cool".to_string();
    println!("{}", sentence.to_uppercase());
    println!("{}", sentence.to_lowercase());

    // Checking if a string contains a certain substring
    let sentence = "The rust programming language".to_string();
    let is_contained = sentence.contains("rust");
    println!("{}", is_contained);

    // Finding the index of a substring
    let sentence = "Rust syntax is easy".to_string();
    if let Some(index) = sentence.find("syntax") {
        println!("{}", index);
    }

    // Getting the length of a string
    let sentence = "Length of this sentence".to_string();
    println!("{}", sentence.len());

    // Reversing a string
    let sentence = "reverse".chars().rev().collect::<String>();
    println!("{}", sentence);

    // Formatting a string with placeholders
    let name = "Alice";
    let age = 25;
    let sentence = format!("My name is {} and I am {} years old.", name, age);
    println!("{}", sentence);

    // Parsing and manipulating data stored in JSON format
    use serde_json::Value;
    let json_data = r#"{"name": "Bob", "age": 30}"#;
    let parsed_json: Value = serde_json::from_str(json_data).unwrap();
    println!("{}", parsed_json);

    // Generating a string representation of an object
    #[derive(Debug)]
    struct Person {
        name: String,
        age: u32,
    }
    let alice = Person { name: "Alice".to_string(), age: 30 };
    println!("{:?}", alice);

    // Validating and sanitizing user input
    let user_input = "User input <script>alert('xss')</script>".to_string();
    let sanitized_input = user_input.replace("<", "&lt;").replace(">", "&gt;");
    println!("{}", sanitized_input);

    // String matching, searching, or sorting
    let sentence = "The quick brown fox jumps over the lazy dog".to_string();
    let searched_word = "fox";
    let found_index = sentence.find(searched_word);
    println!("{}", found_index.is_some());

    let mut words = sentence.split(" ").collect::<Vec<&str>>();
    words.sort();
    println!("{:?}", words);
}
