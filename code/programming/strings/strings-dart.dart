void main() {
  // Concatenating two strings together
  String concatenation1 = "Hello";
  String concatenation2 = "World";
  String concatenatedString = concatenation1 + " " + concatenation2;
  print(concatenatedString);

  // Splitting a string into an array of substrings based on a delimiter
  String splitString = "apple,banana,orange";
  List<String> splitArray = splitString.split(",");
  print(splitArray);

  // Replacing a specific substring within a larger string
  String replacedString = "The quick brown fox jumps";
  String newString = replacedString.replaceAll("quick", "lazy");
  print(newString);

  // Removing leading and trailing whitespace from a string
  String stringWithSpaces = "   Trim this string  ";
  String trimmedString = stringWithSpaces.trim();
  print(trimmedString);

  // Converting a string to uppercase or lowercase
  String originalString = "Hello World";
  String upperCaseString = originalString.toUpperCase();
  String lowerCaseString = originalString.toLowerCase();
  print(upperCaseString);
  print(lowerCaseString);

  // Checking if a string contains a certain substring
  String mainString = "I love programming in Dart";
  bool containsSubstring = mainString.contains("programming");
  print(containsSubstring);

  // Finding the index of a specific substring within a larger string
  String searchString = "The quick brown fox jumps over the lazy dog";
  int index = searchString.indexOf("lazy");
  print(index);

  // Getting the length of a string
  String lengthString = "Dart Programming";
  int length = lengthString.length;
  print(length);

  // Reversing a string
  String original = "hello";
  String reversed = original.split('').reversed.join();
  print(reversed);

  // Formatting a string with placeholders for variables
  String name = "Alice";
  int age = 30;
  String formatted = "My name is $name and I am $age years old";
  print(formatted);

  // Parsing and manipulating data stored in a string format
  String jsonData = '{"name": "John", "age": 25}';
  Map<String, dynamic> parsedData = json.decode(jsonData);
  print(parsedData);

  // Generating a string representation of an object for debugging or logging
  String obj = Object().toString();
  print(obj);

  // Validating and sanitizing user input received as strings
  String userInput = " user123 ";
  String sanitizedInput = userInput.trim();
  print(sanitizedInput);

  // Implementing algorithms like string matching, searching, or sorting
  String searchString = "programming";
  String text = "I love programming in Dart";
  if (text.contains(searchString)) {
    print("String found");
  } else {
    print("String not found");
  }
}
