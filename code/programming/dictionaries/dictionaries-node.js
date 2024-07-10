// Storing key-value pairs for quick retrieval
const dictionary = {
  apple: 'a fruit',
  banana: 'a fruit',
  carrot: 'a vegetable'
};

// Implementing a cache or memoization system
const cache = {};

function fibonacci(n) {
  if (n <= 1) return n;
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  }
}

// Counting occurrences of elements in a collection
const elements = ['apple', 'banana', 'apple', 'carrot', 'banana', 'apple'];
const occurrences = elements.reduce((acc, el) => {
  acc[el] = acc[el] ? acc[el] + 1 : 1;
  return acc;
}, {});

// Mapping unique identifiers to objects or data
const userMap = new Map();
userMap.set(1, { name: 'Alice', age: 30 });
userMap.set(2, { name: 'Bob', age: 25 });

// Building efficient lookup tables for data processing
const hashMap = new Map();
hashMap.set('key1', 'value1');
hashMap.set('key2', 'value2');

// Checking for the existence of an element in a collection
const collection = ['apple', 'banana', 'carrot'];
const elementExists = collection.includes('banana');

// Implementing a data structure like a symbol table or associative array
const symbolTable = new Map();
symbolTable.set('keyA', 'valueA');
symbolTable.set('keyB', 'valueB');

// Grouping and organizing data based on certain criteria
const data = [
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'banana' },
  { type: 'vegetable', name: 'carrot' }
];

const groupedData = data.reduce((acc, obj) => {
  acc[obj.type] = acc[obj.type] || [];
  acc[obj.type].push(obj.name);
  return acc;
}, {});

// Providing a fast method for searching and accessing data
const lookupTable = {
  key1: 'value1',
  key2: 'value2'
};

const valueForKey = lookupTable['key1'];
