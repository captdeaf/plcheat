// Create an empty vector to store elements of the same data type
let mut int_array: Vec<i32> = Vec::new();

// Add elements to the end of the array
int_array.push(5);
int_array.push(10);
int_array.push(3);

// Access individual elements via index
let third_element = int_array[2];

// Modify elements at specific positions
int_array[1] = 20;

// Iterate over elements using loops
for num in &int_array {
    println!("{}", num);
}

// Sorting elements in ascending order
int_array.sort();

// Searching for a specific element within the array
let index_of_10 = int_array.iter().position(|&x| x == 10);

// Removing elements from the array
int_array.pop();

// Merging two arrays into a single array
let mut second_array: Vec<i32> = vec![7, 8];
int_array.extend(&second_array);

// Splitting an array into multiple smaller arrays
let split_arrays = int_array.chunks(2).collect::<Vec<_>>();

// Finding the maximum element in the array
let max_element = int_array.iter().max();

// Filtering elements based on a condition
let filtered_array: Vec<i32> = int_array.iter().filter(|&x| x > &5).cloned().collect();

// Mapping elements to a new value
let mapped_array: Vec<i32> = int_array.iter().map(|&x| x * 2).collect();

// Reversing the order of elements in the array
int_array.reverse();

// Calculating the sum of array elements
let sum: i32 = int_array.iter().sum();

// Copying elements from one array to another
let copied_array: Vec<i32> = int_array.clone();

// Checking if an array contains a certain element
let contains_20 = int_array.contains(&20);

// Converting an array to a string
let string_representation = int_array.iter().map(|&x| x.to_string()).collect::<Vec<String>>();

// Implementing binary search using sorted array
int_array.sort();
let binary_search_result = int_array.binary_search(&10);

// Implementing quicksort
fn quicksort(mut arr: Vec<i32>) -> Vec<i32> {
    if arr.len() <= 1 {
        return arr;
    }
    let pivot = arr.pop().unwrap();
    let (less, greater): (Vec<i32>, Vec<i32>) = arr.into_iter().partition(|&x| x < pivot);
    let mut sorted = quicksort(less);
    sorted.push(pivot);
    sorted.extend(quicksort(greater));
    sorted
}

let unsorted_array = vec![6, 3, 9, 12, 1];
let sorted_array = quicksort(unsorted_array);

fn main() {
    // Rust code for common array operations
}
