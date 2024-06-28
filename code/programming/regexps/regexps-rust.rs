// Rust - regex_examples.rs
extern crate regex;
use regex::Regex;

fn main() {
    // Pattern Matching
    let pattern = Regex::new(r"\d+").unwrap();  // Match one or more digits
    let text = "There are 123 apples";
    println!("Pattern Matching: {}", if pattern.is_match(text) { "Match found!" } else { "No match found." });

    // Search and Replace
    let text = "Hello 123, meet 456";
    let result = pattern.replace_all(text, "number");
    println!("Search and Replace: {}", result);  // "Hello number, meet number"

    // String Splitting
    let text = "apple, orange; banana, grape";
    let pattern = Regex::new(r"[ ,;]+").unwrap();
    let result: Vec<&str> = pattern.split(text).collect();
    println!("String Splitting: {:?}", result);  // ["apple", "orange", "banana", "grape"]

    // Extracting Substrings
    let log_entry = "The date is 2024-06-27";
    let pattern = Regex::new(r"(\d{4})-(\d{2})-(\d{2})").unwrap();
    if let Some(caps) = pattern.captures(log_entry) {
        println!("Extracting Substrings: {:?}", &caps[1..4]);  // ["2024", "06", "27"]
    }

    // Validation
    let email = "example@test.com";
    let pattern = Regex::new(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").unwrap();
    println!("Validation: {}", if pattern.is_match(email) { "Valid email address!" } else { "Invalid email address." });

    // Parsing Structured Text
    let log_entry = "127.0.0.1 - - [27/Jun/2024:10:00:00 +0000] \"GET /index.html HTTP/1.1\" 200 1234";
    let pattern = Regex::new(r"(?P<ip>\d+\.\d+\.\d+\.\d+) - - \[(?P<date>[^\]]+)\] \"(?P<request>[^\"]+)\" (?P<status>\d+) (?P<size>\d+)").unwrap();
    if let Some(caps) = pattern.captures(log_entry) {
        println!("Parsing Structured Text: {:?}", caps);
    }

    // Removing Unwanted Characters
    let text = "Hello, World!";
    let pattern = Regex::new(r"[^\w\s]").unwrap();  // Remove all non-alphanumeric characters
    let cleaned_text = pattern.replace_all(text, "");
    println!("Removing Unwanted Characters: {}", cleaned_text);  // "Hello World"

    // Anchoring Searches
    let text = "The quick brown fox";
    let pattern = Regex::new(r"\bfox\b").unwrap();  // Match 'fox' as a whole word
    println!("Anchoring Searches: {}", if pattern.is_match(text) { "Found" } else { "Not Found" });

    // Escaping Characters
    let user_input = "some[unsafe]input";
    let escaped_input = regex::escape(user_input);
    let pattern = Regex::new(&escaped_input).unwrap();
    println!("Escaping Characters: {:?}", pattern);  // "some\[unsafe\]input"

    // Conditional Matching
    let pattern = Regex::new(r"foo(?=bar)").unwrap();  // Match 'foo' only if followed by 'bar'
    let text = "foobar and foo";
    let matches: Vec<&str> = pattern.find_iter(text).map(|mat| mat.as_str()).collect();
    println!("Conditional Matching: {:?}", matches);  // ["foo"]
}

