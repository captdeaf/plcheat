<?php

// Storing key-value pairs for quick retrieval
$phonebook = [
    "Alice" => 123456,
    "Bob" => 654321,
    "Charlie" => 987654
];

// Implementing a cache or memoization system
$cache = [
    "result" => "some result"
];

// Counting occurrences of elements in a collection
$fruitCounts = [];
$fruits = ["apple", "banana", "apple", "orange"];
foreach ($fruits as $fruit) {
    $fruitCounts[$fruit] = isset($fruitCounts[$fruit]) ? $fruitCounts[$fruit] + 1 : 1;
}

// Mapping unique identifiers to objects or data
$userData = [];
$userIdMapping = [
    "9876" => "Alice",
    "5432" => "Bob",
    "1234" => "Charlie"
];

// Building efficient lookup tables for data processing
$lookupTable = [
    "key1" => "value1",
    "key2" => "value2",
    "key3" => "value3"
];

// Checking for the existence of an element in a collection
$numbers = [1, 2, 3, 4, 5];
$elementToCheck = 3;
$elementExists = in_array($elementToCheck, $numbers);

// Implementing a data structure like a symbol table or associative array
$symbolTable = [
    "key1" => "value1",
    "key2" => "value2"
];

// Grouping and organizing data based on certain criteria
$people = [
    ["name" => "Alice", "age" => 30],
    ["name" => "Bob", "age" => 25],
    ["name" => "Charlie", "age" => 35]
];
$groupedPeople = [];
foreach ($people as $person) {
    $ageGroup = $person["age"] >= 30 ? "30 and above" : "below 30";
    $groupedPeople[$ageGroup][] = $person;
}

// Providing a fast method for searching and accessing data
$fastAccessData = [
    "key1" => "value1",
    "key2" => "value2",
    "key3" => "value3"
];

?>
