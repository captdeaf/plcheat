// Concatenating two strings together to create a longer string
const concatStrings = (str1, str2) => {
  return str1 + str2;
};

// Splitting a string into an array of substrings based on a delimiter
const splitString = (str, delimiter) => {
  return str.split(delimiter);
};

// Replacing a specific substring with another substring within a larger string
const replaceSubstring = (str, oldSubstr, newSubstr) => {
  return str.replace(oldSubstr, newSubstr);
};

// Removing leading and trailing whitespace from a string
const trimString = (str) => {
  return str.trim();
};

// Converting a string to uppercase or lowercase
const toUpperCase = (str) => {
  return str.toUpperCase();
};

const toLowerCase = (str) => {
  return str.toLowerCase();
};

// Checking if a string contains a certain substring
const containsSubstring = (str, substring) => {
  return str.includes(substring);
};

// Finding the index of a specific substring within a larger string
const findSubstringIndex = (str, substring) => {
  return str.indexOf(substring);
};

// Getting the length of a string
const getStringLength = (str) => {
  return str.length;
};

// Reversing a string
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// Formatting a string with placeholders for variables
const formatString = (str, ...args) => {
  return str.replace(/{(\d+)}/g, (match, index) => args[index]);
};

// Parsing and manipulating data stored in a string format (such as JSON or XML)
const parseJSON = (jsonString) => {
  return JSON.parse(jsonString);
};

// Generating a string representation of an object for debugging or logging
const stringifyObject = (obj) => {
  return JSON.stringify(obj);
};

// Validating and sanitizing user input received as strings
const sanitizeInput = (input) => {
  // Add sanitization logic here
  return sanitizedInput;
};

// Implementing algorithms like string matching, searching, or sorting
// Example: String Matching using regular expression
const matchString = (str, regex) => {
  return str.match(regex);
};

// example usage
const str1 = 'Hello';
const str2 = 'World';
console.log(concatStrings(str1, str2));
console.log(splitString('apple,orange,banana', ','));
console.log(replaceSubstring('Hello World', 'World', 'Universe'));
console.log(trimString('   Hello   '));
console.log(toUpperCase('hello'));
console.log(toLowerCase('WORLD'));
console.log(containsSubstring('Hello World', 'World'));
console.log(findSubstringIndex('Hello World', 'World'));
console.log(getStringLength('Hello'));
console.log(reverseString('hello'));
console.log(formatString('The {0} is {1}', 'sky', 'blue'));
console.log(parseJSON('{"key": "value"}'));
console.log(stringifyObject({ key: 'value' }));
console.log(matchString('The quick brown fox jumps over the lazy dog.', /quick/));

module.exports = {
  concatStrings,
  splitString,
  replaceSubstring,
  trimString,
  toUpperCase,
  toLowerCase,
  containsSubstring,
  findSubstringIndex,
  getStringLength,
  reverseString,
  formatString,
  parseJSON,
  stringifyObject,
  sanitizeInput,
  matchString
};
