[
  "// Storing a collection of elements of the same data type",
  "let numbersArray = [1, 2, 3, 4, 5];",
  
  "// Accessing individual elements via index",
  "let elementAtIndex = numbersArray[2]; // Accessing element at index 2",
  
  "// Iterating over elements using loops",
  "for(let i = 0; i < numbersArray.length; i++){",
  "  console.log(numbersArray[i]); // Log each element in the array",
  "}",
  
  "// Sorting elements in ascending order",
  "numbersArray.sort((a, b) => a - b);",
  
  "// Searching for a specific element within the array",
  "let indexOfElement = numbersArray.indexOf(3); // Searching for element 3",
  
  "// Modifying elements at specific positions",
  "numbersArray[1] = 10; // Modify element at index 1 to 10",
  
  "// Adding elements to the end of the array",
  "numbersArray.push(6); // Add element 6 to the end of the array",
  
  "// Removing elements from the array",
  "numbersArray.splice(2, 1); // Remove one element starting from index 2",
  
  "// Merging two arrays into a single array",
  "let secondArray = [7, 8, 9];",
  "let mergedArray = numbersArray.concat(secondArray); // Merge the two arrays",
  
  "// Splitting an array into multiple smaller arrays",
  "let splitArray = [];",
  "while(numbersArray.length){",
  "  splitArray.push(numbersArray.splice(0, 2)); // Split into arrays of maximum 2 elements",
  "}",
  
  "// Finding the maximum element in the array",
  "let maxElement = Math.max(...numbersArray);",
  
  "// Filtering elements based on a condition",
  "let filteredArray = numbersArray.filter(num => num > 3); // Filter elements greater than 3",
  
  "// Mapping elements to a new value",
  "let mappedArray = numbersArray.map(num => num * 2); // Double each element",
  
  "// Reversing the order of elements in the array",
  "numbersArray.reverse();",
  
  "// Calculating the sum of array elements",
  "let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);",
  
  "// Copying elements from one array to another",
  "let copiedArray = [...numbersArray];",
  
  "// Checking if an array contains a certain element",
  "let hasElement = numbersArray.includes(4); // Check if array contains 4",
  
  "// Converting an array to a string",
  "let stringArray = numbersArray.join(', ');",
  
  "// Creating multi-dimensional arrays",
  "let multiArray = [[1, 2], [3, 4], [5, 6]]; // 2D array",
  
  "// Implementing algorithms like binary search using arrays",
  "// Function to perform binary search on a sorted array",
  "function binarySearch(arr, target){",
  "  let left = 0;",
  "  let right = arr.length - 1;",
  "  while(left <= right){",
  "    let mid = Math.floor((left + right) / 2);",
  "    if(arr[mid] === target) return mid;",
  "    else if(arr[mid] < target) left = mid + 1;",
  "    else right = mid - 1;",
  "  }",
  "  return -1; // Target not found",
  "}"
]