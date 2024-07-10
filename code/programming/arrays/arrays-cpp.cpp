#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    // Storing a collection of elements of the same data type
    std::vector<int> myArray = {1, 2, 3, 4, 5};

    // Accessing individual elements via index
    std::cout << "Element at index 2: " << myArray[2] << std::endl;

    // Iterating over elements using loops
    for (int i = 0; i < myArray.size(); ++i) {
        std::cout << myArray[i] << " ";
    }
    std::cout << std::endl;

    // Sorting elements in ascending order
    std::sort(myArray.begin(), myArray.end());

    // Searching for a specific element within the array
    auto it = std::find(myArray.begin(), myArray.end(), 3);
    if (it != myArray.end()) {
        std::cout << "Element found at index: " << std::distance(myArray.begin(), it) << std::endl;
    }

    // Modifying elements at specific positions
    myArray[3] = 10;

    // Adding elements to the end of the array
    myArray.push_back(6);

    // Removing elements from the array
    myArray.pop_back();

    // Merging two arrays into a single array
    std::vector<int> anotherArray = {7, 8, 9};
    myArray.insert(myArray.end(), anotherArray.begin(), anotherArray.end());

    // Splitting an array into multiple smaller arrays
    std::vector<std::vector<int>> splitArrays;
    for (int i = 0; i < myArray.size(); i += 2) {
        splitArrays.push_back({myArray[i], myArray[i + 1]});
    }

    // Finding the maximum element in the array
    int maxElement = *std::max_element(myArray.begin(), myArray.end());

    // Filtering elements based on a condition
    std::vector<int> filteredArray;
    std::copy_if(myArray.begin(), myArray.end(), std::back_inserter(filteredArray), [](int num) {
        return num % 2 == 0;
    });

    // Mapping elements to a new value
    std::vector<int> mappedArray;
    std::transform(myArray.begin(), myArray.end(), std::back_inserter(mappedArray), [](int num) {
        return num * 2;
    });

    // Reversing the order of elements in the array
    std::reverse(myArray.begin(), myArray.end());

    // Calculating the sum of array elements
    int sum = std::accumulate(myArray.begin(), myArray.end(), 0);

    // Copying elements from one array to another
    std::vector<int> copiedArray(myArray.begin(), myArray.end());

    // Checking if an array contains a certain element
    bool containsElement = std::find(myArray.begin(), myArray.end(), 4) != myArray.end();

    // Converting an array to a string
    std::string arrayAsString;
    for (auto num : myArray) {
        arrayAsString += std::to_string(num) + " ";
    }

    std::cout << "Array as string: " << arrayAsString << std::endl;

    // Displaying the results
    std::cout << "Max Element: " << maxElement << std::endl;
    std::cout << "Filtered Array: ";
    for (auto num : filteredArray) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Mapped Array: ";
    for (auto num : mappedArray) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Reversed Array: ";
    for (auto num : myArray) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Sum of Array: " << sum << std::endl;

    std::cout << "Copied Array: ";
    for (auto num : copiedArray) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Array contains 4: " << (containsElement ? "Yes" : "No") << std::endl;

    return 0;
}
