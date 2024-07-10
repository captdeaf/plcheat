// Storing a collection of elements of the same data type
const numbers: number[] = [1, 2, 3, 4, 5];

// Accessing individual elements via index
const firstElement: number = numbers[0];
const thirdElement: number = numbers[2];

// Iterating over elements using loops
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Sorting elements in ascending order
const sortedNumbersAscending: number[] = numbers.sort((a, b) => a - b);

// Sorting elements in descending order
const sortedNumbersDescending: number[] = numbers.sort((a, b) => b - a);

// Searching for a specific element within the array
const searchElement: number = 3;
const indexOfElement: number = numbers.indexOf(searchElement);

// Modifying elements at specific positions
numbers[1] = 10;

// Adding elements to the end of the array
numbers.push(6);

// Removing elements from the array
numbers.pop();

// Merging two arrays into a single array
const newNumbers: number[] = [7, 8, 9];
const mergedArray: number[] = numbers.concat(newNumbers);

// Splitting an array into multiple smaller arrays
const chunkedArray: number[][] = [];
const chunkSize = 2;
for (let i = 0; i < numbers.length; i += chunkSize) {
    chunkedArray.push(numbers.slice(i, i + chunkSize));
}

// Finding the maximum or minimum element in the array
const maxElement: number = Math.max(...numbers);
const minElement: number = Math.min(...numbers);

// Filtering elements based on a condition
const filteredArray: number[] = numbers.filter(num => num > 3);

// Mapping elements to a new value
const mappedArray: number[] = numbers.map(num => num * 2);

// Reversing the order of elements in the array
const reversedArray: number[] = numbers.reverse();

// Calculating the sum or average of array elements
const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
const average: number = sum / numbers.length;

// Copying elements from one array to another
const copiedArray: number[] = [...numbers];

// Checking if an array contains a certain element
const includesElement: boolean = numbers.includes(4);

// Converting an array to a string or vice versa
const arrayAsString: string = numbers.join(',');
const stringAsArray: string[] = '1,2,3,4'.split(',');

// Creating multi-dimensional arrays for complex data structures
const multiDimArray: number[][] = [[1, 2], [3, 4], [5, 6]];

// Implementing algorithms like binary search or quicksort using arrays
// Binary search example
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Element not found
}

const indexFound: number = binarySearch(numbers, 3);
