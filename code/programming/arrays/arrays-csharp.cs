using System;
using System.Linq;

class Program
{
    static void Main()
    {
        // Storing a collection of elements of the same data type
        int[] numbersArray = { 5, 2, 7, 9, 1 };

        // Accessing individual elements via index
        int thirdElement = numbersArray[2];
        Console.WriteLine("Third element: " + thirdElement);

        // Iterating over elements using loops
        foreach (int number in numbersArray)
        {
            Console.Write(number + " ");
        }
        Console.WriteLine();

        // Sorting elements in ascending order
        Array.Sort(numbersArray);

        // Searching for a specific element within the array
        int searchNumber = 7;
        int index = Array.IndexOf(numbersArray, searchNumber);
        Console.WriteLine("Index of " + searchNumber + " is " + index);

        // Modifying elements at specific positions
        numbersArray[1] = 10;

        // Adding elements to the end of the array
        numbersArray = numbersArray.Concat(new int[] { 4 }).ToArray();

        // Removing elements from the array
        numbersArray = numbersArray.Where(num => num != 9).ToArray();

        // Merging two arrays into a single array
        int[] anotherArray = { 3, 8 };
        int[] mergedArray = numbersArray.Concat(anotherArray).ToArray();

        // Splitting an array into multiple smaller arrays
        int[][] jaggedArray = numbersArray.Select(val => new int[] { val }).ToArray();

        // Finding the maximum element in the array
        int maxNumber = numbersArray.Max();
        Console.WriteLine("Maximum number: " + maxNumber);

        // Filtering elements based on a condition
        int[] filteredArray = numbersArray.Where(num => num % 2 == 0).ToArray();
        
        // Mapping elements to a new value
        int[] incrementedArray = numbersArray.Select(num => num + 1).ToArray();

        // Reversing the order of elements in the array
        Array.Reverse(numbersArray);

        // Calculating the sum of array elements
        int sum = numbersArray.Sum();
        Console.WriteLine("Sum: " + sum);

        // Copying elements from one array to another
        int[] copiedArray = new int[numbersArray.Length];
        Array.Copy(numbersArray, copiedArray, numbersArray.Length);

        // Checking if an array contains a certain element
        bool containsElement = numbersArray.Contains(5);
        Console.WriteLine("Contains 5: " + containsElement);

        // Converting an array to a string
        string arrayAsString = string.Join(", ", numbersArray);
        Console.WriteLine("Array as string: " + arrayAsString);

        // Creating multi-dimensional arrays
        int[,] multiDimArray = { { 1, 2 }, { 3, 4 } };

        // Binary search using arrays
        int[] sortedArray = { 1, 2, 3, 4, 5 };
        int elementToSearch = 3;
        int binarySearchIndex = Array.BinarySearch(sortedArray, elementToSearch);
        Console.WriteLine("Binary search index: " + binarySearchIndex);

        // Quicksort using arrays
        Array.Sort(sortedArray);
    }
}
