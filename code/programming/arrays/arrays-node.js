// Storing a collection of elements of the same data type
const numbers = [1, 2, 3, 4, 5];

// Accessing individual elements via index
const firstElement = numbers[0]; // Output: 1
const lastElement = numbers[numbers.length - 1]; // Output: 5

// Iterating over elements using loops
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Sorting elements in ascending or descending order
const sortedNumbersAsc = numbers.slice().sort((a, b) => a - b);
const sortedNumbersDesc = numbers.slice().sort((a, b) => b - a);

// Searching for a specific element within the array
const searchElement = numbers.indexOf(3); // Output: 2

// Modifying elements at specific positions
numbers[2] = 10; // Update element at index 2

// Adding elements to the end of the array
numbers.push(6);

// Removing elements from the array
numbers.pop();

// Merging two arrays into a single array
const numbers2 = [6, 7, 8];
const mergedArray = numbers.concat(numbers2);

// Splitting an array into multiple smaller arrays
const chunks = Array.from(Array(Math.ceil(numbers.length / 2)), (_, i) =>
  numbers.slice(i * 2, i * 2 + 2)
);

// Finding the maximum or minimum element in the array
const maxElement = Math.max(...numbers);
const minElement = Math.min(...numbers);

// Filtering elements based on a condition
const filteredNumbers = numbers.filter((num) => num % 2 === 0);

// Mapping elements to a new value
const mappedNumbers = numbers.map((num) => num * 2);

// Reversing the order of elements in the array
const reversedNumbers = numbers.slice().reverse();

// Calculating the sum or average of array elements
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
const average = sum / numbers.length;

// Copying elements from one array to another
const copiedArray = [...numbers];

// Checking if an array contains a certain element
const hasElement = numbers.includes(4); // Output: true

// Converting an array to a string or vice versa
const stringArray = numbers.join(',');
const parsedArray = stringArray.split(',');

// Creating multi-dimensional arrays for complex data structures
const matrix = [[1, 2], [3, 4], [5, 6]];

// Implementing algorithms like binary search or quicksort using arrays
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
