void main() {
  // Storing a collection of elements of the same data type
  List<int> numbers = [1, 2, 3, 4, 5];

  // Accessing individual elements via index
  int elementAtIndex2 = numbers[2];
  
  // Iterating over elements using loops
  for (int i = 0; i < numbers.length; i++) {
    print(numbers[i]);
  }

  // Sorting elements in ascending order
  numbers.sort();

  // Searching for a specific element within the array
  int searchElement = 4;
  bool isPresent = numbers.contains(searchElement);

  // Modifying elements at specific positions
  numbers[3] = 10;

  // Adding elements to the end of the array
  numbers.add(6);

  // Removing elements from the array
  numbers.remove(2);

  // Merging two arrays into a single array
  List<int> otherNumbers = [7, 8, 9];
  List<int> mergedNumbers = [...numbers, ...otherNumbers];

  // Splitting an array into multiple smaller arrays
  List<List<int>> chunks = [];
  for (var i = 0; i < numbers.length; i += 2) {
    chunks.add(numbers.sublist(i, i + 2));
  }

  // Finding the maximum or minimum element in the array
  int maxElement = numbers.reduce((current, next) => current > next ? current : next);
  int minElement = numbers.reduce((current, next) => current < next ? current : next);

  // Filtering elements based on a condition
  List<int> evenNumbers = numbers.where((element) => element % 2 == 0).toList();

  // Mapping elements to a new value
  List<int> squaredNumbers = numbers.map((element) => element * element).toList();

  // Reversing the order of elements in the array
  numbers = numbers.reversed.toList();

  // Calculating the sum or average of array elements
  int sum = numbers.reduce((value, element) => value + element);
  double average = sum / numbers.length;

  // Copying elements from one array to another
  List<int> copiedNumbers = List.from(numbers);

  // Checking if an array contains a certain element
  bool containsElement = numbers.contains(4);

  // Converting an array to a string
  String numbersString = numbers.join(", ");

  // Creating multi-dimensional arrays for complex data structures
  List<List<int>> matrix = [
    [1, 2],
    [3, 4]
  ];

  // Implementing binary search algorithm using arrays
  int binarySearch(List<int> array, int target) {
    int low = 0;
    int high = array.length - 1;

    while (low <= high) {
      int mid = (low + high) ~/ 2;

      if (array[mid] == target) {
        return mid;
      } else if (array[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1; // Element not found
  }

  // Implementing quicksort algorithm using arrays
  void quickSort(List<int> array, int left, int right) {
    if (left < right) {
      int partitionIndex = partition(array, left, right);

      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
  }

  int partition(List<int> array, int left, int right) {
    int pivot = array[right];
    int i = left - 1;

    for (int j = left; j < right; j++) {
      if (array[j] < pivot) {
        i++;
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    int temp = array[i + 1];
    array[i + 1] = array[right];
    array[right] = temp;

    return i + 1;
  }

  // Testing binary search
  print(binarySearch(numbers, elementAtIndex2));

  // Testing quicksort
  quickSort(numbers, 0, numbers.length - 1);
}
