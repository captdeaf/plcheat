#!/bin/bash

# Storing a collection of elements of the same data type
fruit_array=("apple" "banana" "orange")

# Accessing individual elements via index
echo "First fruit: ${fruit_array[0]}"

# Iterating over elements using loops
for fruit in "${fruit_array[@]}"
do
    echo "Fruit: $fruit"
done

# Sorting elements in ascending order
sorted_array=($(echo "${fruit_array[@]}" | tr ' ' '\n' | sort))

# Searching for a specific element within the array
if [[ " ${fruit_array[@]} " =~ " banana " ]]; then
    echo "Banana found in array"
fi

# Modifying elements at specific positions
fruit_array[1]="grape"
echo "New second fruit: ${fruit_array[1]}"

# Adding elements to the end of the array
fruit_array+=("watermelon")

# Removing elements from the array
unset fruit_array[2]

# Merging two arrays into a single array
more_fruits=("peach" "kiwi")
combined_array=("${fruit_array[@]}" "${more_fruits[@]}")

# Splitting an array into multiple smaller arrays
smaller_arrays=()
for i in $(seq 0 2 $((${#combined_array[@]} - 1)))
do
    smaller_arrays+=("${combined_array[@]:$i:2}")
done

# Finding the maximum element in the array
max_element=$(printf "%s\n" "${combined_array[@]}" | sort -nr | head -1)
echo "Max element: $max_element"

# Filtering elements based on a condition
filtered_array=()
for fruit in "${combined_array[@]}"
do
    if [[ $fruit != "grape" ]]; then
        filtered_array+=("$fruit")
    fi
done

# Reversing the order of elements in the array
reversed_array=()
for ((i=${#combined_array[@]}-1; i>=0; i--))
do
    reversed_array+=("${combined_array[$i]}")
done

# Calculating the sum of array elements
sum=0
for num in {1..10}
do
    sum=$((sum + num))
done
echo "Sum of numbers 1 to 10 is: $sum"

# Copying elements from one array to another
copied_array=("${combined_array[@]}")

# Checking if an array contains a certain element
if [[ " ${combined_array[@]} " =~ " kiwi " ]]; then
    echo "Kiwi found in array"
fi

# Converting an array to a string
array_string=$(IFS=,; echo "${combined_array[*]}")
echo "Array as string: $array_string"

# Creating multi-dimensional arrays for complex data structures
multi_array=(["key1"]="value1" ["key2"]="value2")

# Displaying array elements
echo "Combined array: ${combined_array[@]}"
echo "Filtered array: ${filtered_array[@]}"
echo "Reversed array: ${reversed_array[@]}"
echo "Copied array: ${copied_array[@]}"
echo "Multi-dimensional array: ${multi_array["key1"]} ${multi_array["key2"]}"
```
