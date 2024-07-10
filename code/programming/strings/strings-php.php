<?php

// Concatenating two strings together to create a longer string
$string1 = "Hello";
$string2 = "World";
$concatenatedString = $string1 . " " . $string2;
echo $concatenatedString . "\n";

// Splitting a string into an array of substrings based on a delimiter
$originalString = "Apple,Orange,Banana,Grape";
$splitArray = explode(",", $originalString);
print_r($splitArray);

// Replacing a specific substring with another substring within a larger string
$bigString = "I like apples and apples are delicious.";
$newString = str_replace("apples", "bananas", $bigString);
echo $newString . "\n";

// Removing leading and trailing whitespace from a string
$whitespaceString = "   Trim whitespaces   ";
$trimmedString = trim($whitespaceString);
echo $trimmedString . "\n";

// Converting a string to uppercase or lowercase
$originalCaseString = "Hello, World!";
$uppercaseString = strtoupper($originalCaseString);
$lowercaseString = strtolower($originalCaseString);
echo $uppercaseString . "\n";
echo $lowercaseString . "\n";

// Checking if a string contains a certain substring
$searchString = "The quick brown fox jumps over the lazy dog";
$substrToCheck = "brown";
if (strpos($searchString, $substrToCheck) !== false) {
    echo "Substring found!\n";
} else {
    echo "Substring not found.\n";
}

// Finding the index of a specific substring within a larger string
$subStrToFind = "lazy";
$index = strpos($searchString, $subStrToFind);
echo "Index of '{$subStrToFind}': {$index}\n";

// Getting the length of a string
$lengthString = "This is a string";
$length = strlen($lengthString);
echo "Length of string: {$length}\n";

// Reversing a string
$reverseString = strrev($lengthString);
echo "Reversed string: {$reverseString}\n";

// Formatting a string with placeholders for variables
$name = "Alice";
$age = 30;
$formattedString = sprintf("Name: %s, Age: %d", $name, $age);
echo $formattedString . "\n";

// Parsing and manipulating data stored in a string format (such as JSON or XML)
$jsonData = '{"name": "Bob", "age": 25}';
$decodedData = json_decode($jsonData, true);
echo "Name: " . $decodedData['name'] . ", Age: " . $decodedData['age'] . "\n";

// Generating a string representation of an object for debugging or logging
class Person {
    public $name = "John";
    public $age = 40;
}

$person = new Person();
$objectString = print_r($person, true);
echo $objectString . "\n";

// Validating and sanitizing user input received as strings
$userInput = "<script>alert('XSS');</script>";
$sanitizedInput = htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
echo $sanitizedInput . "\n";

// Implementing algorithms like string matching, searching, or sorting
$haystack = "The quick brown fox jumps over the lazy dog";
$needle = "fox";
if (strpos($haystack, $needle) !== false) {
    echo "Needle found!\n";
} else {
    echo "Needle not found.\n";
}

?>
