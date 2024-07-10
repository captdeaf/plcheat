import java.util.Arrays;

public class ArrayExamples {

    public static void main(String[] args) {
        // Storing a collection of elements of the same data type
        int[] intArray = {4, 6, 2, 8, 1};

        // Accessing individual elements via index
        int elementAtIndexTwo = intArray[2];

        // Iterating over elements using loops
        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }

        // Sorting elements in ascending order
        Arrays.sort(intArray);

        // Searching for a specific element within the array
        int indexOfElement = Arrays.binarySearch(intArray, 6);

        // Modifying elements at specific positions
        intArray[3] = 10;

        // Adding elements to the end of the array
        int[] newArray = Arrays.copyOf(intArray, intArray.length + 1);
        newArray[newArray.length - 1] = 5;

        // Removing elements from the array
        int[] smallerArray = Arrays.copyOfRange(intArray, 0, intArray.length - 1);
        
        // Merging two arrays into a single array
        int[] secondArray = {3, 7, 9};
        int[] mergedArray = new int[intArray.length + secondArray.length];
        System.arraycopy(intArray, 0, mergedArray, 0, intArray.length);
        System.arraycopy(secondArray, 0, mergedArray, intArray.length, secondArray.length);

        // Splitting an array into multiple smaller arrays
        int[][] splitArrays = {Arrays.copyOfRange(intArray, 0, 2), Arrays.copyOfRange(intArray, 2, intArray.length)};

        // Finding the maximum element in the array
        int maxElement = Arrays.stream(intArray).max().getAsInt();

        // Filtering elements based on a condition
        int[] filteredArray = Arrays.stream(intArray).filter(x -> x > 5).toArray();

        // Mapping elements to a new value
        int[] mappedArray = Arrays.stream(intArray).map(x -> x * 2).toArray();

        // Reversing the order of elements in the array
        int[] reversedArray = new int[intArray.length];
        for (int i = 0; i < intArray.length; i++) {
            reversedArray[i] = intArray[intArray.length - 1 - i];
        }

        // Calculating the sum of array elements
        int sum = Arrays.stream(intArray).sum();

        // Copying elements from one array to another
        int[] copiedArray = Arrays.copyOf(intArray, intArray.length);

        // Checking if an array contains a certain element
        boolean containsElement = Arrays.stream(intArray).anyMatch(x -> x == 2);

        // Converting an array to a string
        String arrayAsString = Arrays.toString(intArray);

        // Creating multi-dimensional arrays for complex data structures
        int[][] multiDimArray = new int[3][3];

        // Implementing binary search using arrays
        int searchValue = 6;
        int binaryIndex = Arrays.binarySearch(intArray, searchValue);

        // Print outputs for verification
        System.out.println("Element at index 2: " + elementAtIndexTwo);
        System.out.println("Sorted Array: " + Arrays.toString(intArray));
        System.out.println("Index of element 6: " + indexOfElement);
        System.out.println("Modified Array: " + Arrays.toString(intArray));
        System.out.println("New Array with added element: " + Arrays.toString(newArray));
        System.out.println("Smaller Array: " + Arrays.toString(smallerArray));
        System.out.println("Merged Array: " + Arrays.toString(mergedArray));
        System.out.println("Split Arrays: " + Arrays.deepToString(splitArrays));
        System.out.println("Max Element: " + maxElement);
        System.out.println("Filtered Array: " + Arrays.toString(filteredArray));
        System.out.println("Mapped Array: " + Arrays.toString(mappedArray));
        System.out.println("Reversed Array: " + Arrays.toString(reversedArray));
        System.out.println("Sum of Array: " + sum);
        System.out.println("Copied Array: " + Arrays.toString(copiedArray));
        System.out.println("Array contains element 2: " + containsElement);
        System.out.println("Array as String: " + arrayAsString);
        System.out.println("Multi-dimensional Array: " + Arrays.deepToString(multiDimArray));
        System.out.println("Index of element 6 (Binary Search): " + binaryIndex);
    }
}
