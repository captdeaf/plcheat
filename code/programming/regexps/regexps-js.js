// JavaScript - regex_examples.js

// Pattern Matching
let pattern = /\d+/;  // Match one or more digits
let text = "There are 123 apples";
console.log("Pattern Matching:", pattern.test(text) ? "Match found!" : "No match found.");

// Search and Replace
text = "Hello 123, meet 456";
let result = text.replace(/\d+/g, 'number');
console.log("Search and Replace:", result);  // "Hello number, meet number"

// String Splitting
text = "apple, orange; banana, grape";
result = text.split(/[,;]/);
console.log("String Splitting:", result);  // ["apple", " orange", " banana", " grape"]

// Extracting Substrings
text = "The date is 2024-06-27";
pattern = /(\d{4})-(\d{2})-(\d{2})/;
let match = text.match(pattern);
console.log("Extracting Substrings:", match ? match.slice(1) : "No match found");  // ["2024", "06", "27"]

// Validation
let email = "example@test.com";
pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("Validation:", pattern.test(email) ? "Valid email address!" : "Invalid email address.");

// Removing Unwanted Characters
text = "Hello, World!";
let cleanedText = text.replace(/[^\w\s]/g, '');  // Remove all non-alphanumeric characters
console.log("Removing Unwanted Characters:", cleanedText);  // "Hello World"

// Anchoring Searches
text = "The quick brown fox";
pattern = /\bfox\b/;  // Match 'fox' as a whole word
console.log("Anchoring Searches:", pattern.test(text) ? "Found" : "Not Found");

// Escaping Characters
user_input = "some[unsafe]input";
let escaped_input = user_input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
pattern = new RegExp(escaped_input);
console.log("Escaping Characters:", pattern);  // /some\[unsafe\]input/

// Conditional Matching
pattern = /foo(?=bar)/;  // Match 'foo' only if followed by 'bar'
text = "foobar and foo";
matches = text.match(pattern);
console.log("Conditional Matching:", matches);  // ["foo"]

