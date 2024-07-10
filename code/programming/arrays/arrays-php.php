<?php

// 1. Storing a collection of elements of the same data type
$nums = [1, 2, 3, 4, 5];

// 2. Accessing individual elements via index
echo $nums[0]; // Output: 1

// 3. Iterating over elements using loops
foreach ($nums as $num) {
    echo $num . " ";
}

// 4. Sorting elements in ascending order
sort($nums);

// 5. Searching for a specific element within the array
$index = array_search(3, $nums); // Output: 2

// 6. Modifying elements at specific positions
$nums[2] = 10;

// 7. Adding elements to the end of the array
$nums[] = 6;

// 8. Removing elements from the array
unset($nums[1]);

// 9. Merging two arrays into a single array
$moreNums = [7, 8, 9];
$combinedNums = array_merge($nums, $moreNums);

// 10. Splitting an array into multiple smaller arrays
$chunks = array_chunk($combinedNums, 2);

// 11. Finding the maximum element in the array
$maxNum = max($combinedNums);

// 12. Filtering elements based on a condition
$filteredNums = array_filter($combinedNums, function ($num) {
    return $num % 2 == 0;
});

// 13. Mapping elements to a new value
$mappedNums = array_map(function ($num) {
    return $num * 2;
}, $nums);

// 14. Reversing the order of elements in the array
$reversedNums = array_reverse($nums);

// 15. Calculating the sum or average of array elements
$sum = array_sum($nums);
$avg = $sum / count($nums);

// 16. Copying elements from one array to another
$copyOfNums = $nums;

// 17. Checking if an array contains a certain element
$containsThree = in_array(3, $nums); // Output: true

// 18. Converting an array to a string
$numsString = implode(", ", $nums);

// 19. Creating multi-dimensional arrays for complex data structures
$multiDimArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 20. Implementing algorithms like binary search or quicksort using arrays

?>
