// Concatenating two strings together to create a longer string
const concatStrings = (str1: string, str2: string): string => {
  return str1 + str2;
}

// Splitting a string into an array of substrings based on a delimiter
const splitString = (str: string, delimiter: string): string[] => {
  return str.split(delimiter);
}

// Replacing a specific substring with another substring within a larger string
const replaceSubstring = (str: string, oldSubstr: string, newSubstr: string): string => {
  return str.replace(oldSubstr, newSubstr);
}

// Removing leading and trailing whitespace from a string
const trimString = (str: string): string => {
  return str.trim();
}

// Converting a string to uppercase or lowercase
const convertToUpperCase = (str: string): string => {
  return str.toUpperCase();
}

const convertToLowerCase = (str: string): string => {
  return str.toLowerCase();
}

// Checking if a string contains a certain substring
const checkSubstring = (str: string, substr: string): boolean => {
  return str.includes(substr);
}

// Finding the index of a specific substring within a larger string
const findSubstringIndex = (str: string, substr: string): number => {
  return str.indexOf(substr);
}

// Getting the length of a string
const getStringLength = (str: string): number => {
  return str.length;
}

// Reversing a string
const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
}

// Formatting a string with placeholders for variables
const formatString = (str: string, ...args: string[]): string => {
  return str.replace(/{(\d+)}/g, (match, index) => args[index]);
}

// Parsing and manipulating data stored in a string format (such as JSON or XML)
interface User {
  name: string;
  age: number;
}

const parseJSONString = (jsonStr: string): User => {
  return JSON.parse(jsonStr);
}

// Generating a string representation of an object for debugging or logging
const objectToString = (obj: object): string => {
  return JSON.stringify(obj);
}

// Validating and sanitizing user input received as strings
const sanitizeInput = (input: string): string => {
  // add sanitization logic as needed
  return input.trim();
}

// Implementing algorithms like string matching, searching, or sorting
const sortString = (str: string): string => {
  return str.split('').sort().join('');
}

export {
  concatStrings,
  splitString,
  replaceSubstring,
  trimString,
  convertToUpperCase,
  convertToLowerCase,
  checkSubstring,
  findSubstringIndex,
  getStringLength,
  reverseString,
  formatString,
  parseJSONString,
  objectToString,
  sanitizeInput,
  sortString
};
