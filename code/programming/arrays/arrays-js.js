// Creating an array to store elements of the same data type
const numbers = [1, 2, 3, 4, 5];

// Accessing elements via index
const secondElement = numbers[1];

// Iterating over elements using loops
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Sorting elements in ascending order
numbers.sort((a, b) => a - b);

// Searching for a specific element (e.g., 3) within the array
const index = numbers.indexOf(3);

// Modifying element at a specific position (e.g., changing 2 to 8)
numbers[1] = 8;

// Adding elements to the end of the array
numbers.push(6);

// Removing elements from the array (e.g., removing the first element)
numbers.shift();

// Merging two arrays into a single array
const newNumbers = numbers.concat([7, 9]);

// Splitting an array into smaller arrays
const smallerArrays = [];
while (numbers.length) {
  smallerArrays.push(numbers.splice(0, 2));
}

// Finding the maximum element in the array
const max = Math.max(...numbers);

// Filtering elements based on a condition (e.g., even numbers)
const filteredNumbers = numbers.filter(num => num % 2 === 0);

// Mapping elements to a new value (e.g., doubling each element)
const doubledNumbers = numbers.map(num => num * 2);

// Reversing the order of elements in the array
const reversedNumbers = numbers.reverse();

// Calculating the sum of array elements
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Copying elements from one array to another
const copiedNumbers = [...numbers];

// Checking if an array contains a certain element (e.g., if 5 is present)
const containsFive = numbers.includes(5);

// Converting an array to a string
const numbersString = numbers.join(',');

// Converting a string back to an array
const newNumbersArr = numbersString.split(',');

// Creating multi-dimensional arrays
const multiArray = [[1, 2], [3, 4]];

// Implementing algorithms like binary search or quicksort
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1; // element not found
}
