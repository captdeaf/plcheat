// Concatenating two strings together
const string1 = "Hello";
const string2 = "World";
const concatenatedString = string1 + " " + string2;
console.log(concatenatedString);

// Splitting a string into an array of substrings
const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(words);

// Replacing a specific substring within a larger string
const originalString = "I like apples";
const replacedString = originalString.replace("apples", "oranges");
console.log(replacedString);

// Removing leading and trailing whitespace from a string
const stringWithSpaces = "   Trim this sentence   ";
const trimmedString = stringWithSpaces.trim();
console.log(trimmedString);

// Converting a string to uppercase or lowercase
const lowercaseString = "lowercase";
const uppercaseString = lowercaseString.toUpperCase();
console.log(uppercaseString);

// Checking if a string contains a certain substring
const paragraph = "The quick brown fox jumps over the lazy dog";
const containsSubstring = paragraph.includes("fox");
console.log(containsSubstring);

// Finding the index of a specific substring within a larger string
const index = paragraph.indexOf("brown");
console.log(index);

// Getting the length of a string
const str = "Hello, World!";
const length = str.length;
console.log(length);

// Reversing a string
const originalWord = "hello";
const reversedWord = originalWord.split("").reverse().join("");
console.log(reversedWord);

// Formatting a string with placeholders for variables
const name = "Alice";
const age = 30;
const formattedMessage = `Hello, my name is ${name} and I am ${age} years old`;
console.log(formattedMessage);

// Parsing and manipulating data stored in a string format
const jsonString = '{"name": "John", "age": 25}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name);

// Generating a string representation of an object for debugging or logging
const obj = { name: "Tom", age: 40, city: "New York" };
const stringifiedObj = JSON.stringify(obj);
console.log(stringifiedObj);

// Validating and sanitizing user input received as strings
const userInput = " <script>alert('XSS');</script> ";
const sanitizedInput = userInput.replace(/(<([^>]+)>)/gi, "");
console.log(sanitizedInput);

// Implementing algorithms like string matching, searching, or sorting
const inputStrings = ["banana", "apple", "orange"];
const sortedStrings = inputStrings.sort();
console.log(sortedStrings);
