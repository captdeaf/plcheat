# Storing a collection of elements of the same data type
$numbers = @(1, 2, 3, 4, 5)

# Accessing individual elements via index
$secondNumber = $numbers[1]

# Iterating over elements using loops
foreach ($number in $numbers) {
    Write-Output $number
}

# Sorting elements in ascending or descending order
$numbersSorted = $numbers | Sort-Object
$numbersSortedDescending = $numbers | Sort-Object -Descending

# Searching for a specific element within the array
$foundNumber = $numbers -contains 3

# Modifying elements at specific positions
$numbers[2] = 10

# Adding elements to the end of the array
$numbers += 6

# Removing elements from the array
$numbersRemoved = $numbers | Where-Object { $_ -ne 4 }

# Merging two arrays into a single array
$moreNumbers = @(7, 8, 9)
$combinedNumbers = $numbers + $moreNumbers

# Splitting an array into multiple smaller arrays
$chunks = $numbers | Group-Object -Property { [math]::Floor($_ / 2) }

# Finding the maximum or minimum element in the array
$maximumNumber = $numbers | Measure-Object -Maximum
$minimumNumber = $numbers | Measure-Object -Minimum

# Filtering elements based on a condition
$filteredNumbers = $numbers | Where-Object { $_ -gt 2 }

# Mapping elements to a new value
$mappedNumbers = $numbers | ForEach-Object { $_ * 2 }

# Reversing the order of elements in the array
$reversedNumbers = $numbers | Select-Object -Last ($numbers.Length) -First $numbers.Length

# Calculating the sum or average of array elements
$sum = ($numbers | Measure-Object -Sum).Sum
$average = ($numbers | Measure-Object -Average).Average

# Copying elements from one array to another
$copiedNumbers = $numbers.Clone()

# Checking if an array contains a certain element
$containsNumber = $numbers -contains 5

# Converting an array to a string or vice versa
$numbersAsString = $numbers -join ","
$numbersFromString = $numbersAsString -split ","

# Creating multi-dimensional arrays for complex data structures
$multiArray = @( @("A", "B"), @("C", "D") )

# Implementing algorithms like binary search or quicksort using arrays
function BinarySearch([int[]]$arr, [int]$target) {
    $left = 0
    $right = $arr.Length - 1

    while ($left -le $right) {
        $mid = [math]::Floor(($left + $right) / 2)

        if ($arr[$mid] -eq $target) {
            return $mid
        } elseif ($arr[$mid] -lt $target) {
            $left = $mid + 1
        } else {
            $right = $mid - 1
        }
    }

    return -1
}

# Example usage of BinarySearch algorithm
$binarySearchResult = BinarySearch $numbers 3

# End of examples
