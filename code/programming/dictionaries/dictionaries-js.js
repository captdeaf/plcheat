// Storing key-value pairs for quick retrieval
let dictionary = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

// Implementing a cache or memoization system
let cache = new Map();

function memoize(func) {
    return function(...args) {
        const key = args.join("-");
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
    }
}

// Counting occurrences of elements in a collection
let elements = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let occurrences = {};

elements.forEach(element => {
    occurrences[element] = (occurrences[element] || 0) + 1;
});

// Mapping unique identifiers to objects or data
let idMap = new Map();

let obj1 = {name: "John"};
let obj2 = {name: "Jane"};

idMap.set("id1", obj1);
idMap.set("id2", obj2);

// Building efficient lookup tables for data processing
let lookupTable = new Map();

// Checking for the existence of an element in a collection
let collection = ["a", "b", "c"];

if (collection.includes("b")) {
    console.log("Element exists in collection");
}

// Implementing a data structure like a symbol table or associative array
let symbolTable = new Map();

// Grouping and organizing data based on certain criteria
let data = [{category: "A", value: 1}, {category: "B", value: 2}, {category: "A", value: 3}];

let groupedData = {};

data.forEach(item => {
    if (!groupedData[item.category]) {
        groupedData[item.category] = [];
    }
    groupedData[item.category].push(item);
});

// Providing a fast method for searching and accessing data
let fastLookup = new Map();

fastLookup.set("key1", "value1");
fastLookup.set("key2", "value2");

console.log(fastLookup.get("key1"));
