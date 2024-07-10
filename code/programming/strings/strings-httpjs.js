// Concatenating two strings together to create a longer string
const str1 = "Hello";
const str2 = "World";
const concatenatedStr = str1 + " " + str2;

// Splitting a string into an array of substrings based on a delimiter
const originalString = "apple,banana,orange";
const splitArr = originalString.split(",");

// Replacing a specific substring with another substring within a larger string
const originalStr = "I like cats";
const replacedStr = originalStr.replace("cats", "dogs");

// Removing leading and trailing whitespace from a string
const stringWithWhitespace = "  Trim Me!    ";
const trimmedStr = stringWithWhitespace.trim();

// Converting a string to uppercase or lowercase
const originalLowercaseStr = "hello world";
const uppercaseStr = originalLowercaseStr.toUpperCase();

// Checking if a string contains a certain substring
const checkStr = "The quick brown fox";
const containsFox = checkStr.includes("fox");

// Finding the index of a specific substring within a larger string
const largeStr = "Jumps over the lazy dog";
const indexOfDog = largeStr.indexOf("dog");

// Getting the length of a string
const poem = "Roses are red, violets are blue";
const poemLength = poem.length;

// Reversing a string
const original = "hello";
const reversedStr = original.split('').reverse().join('');

// Formatting a string with placeholders for variables
const name = "Alice";
const age = 30;
const formattedStr = `Hello, my name is ${name} and I am ${age} years old`;

// Parsing and manipulating data stored in a string format (such as JSON or XML)
const jsonString = '{"name": "Alice", "age": 30}';
const parsedData = JSON.parse(jsonString);

// Generating a string representation of an object for debugging or logging
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Bob", 25);
const personStr = JSON.stringify(person);

// Validating and sanitizing user input received as strings
function sanitizeInput(input) {
    return input.trim(); // Example of trimming input
}

// Implementing algorithms like string matching, searching, or sorting
const searchStr = "The quick brown fox jumps over the lazy dog";
const searchTerm = "fox";
const foundIndex = searchStr.indexOf(searchTerm);

