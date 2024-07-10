public class WorkingWithStrings {
    public static void main(String[] args) {
        // Concatenating two strings
        String str1 = "Hello";
        String str2 = "World";
        String concatenatedString = str1 + " " + str2;
        System.out.println(concatenatedString);

        // Splitting a string
        String sentence = "This is a sample sentence";
        String[] words = sentence.split(" ");
        for (String word : words) {
            System.out.println(word);
        }

        // Replacing a substring
        String originalString = "I love programming";
        String replacedString = originalString.replace("programming", "coding");
        System.out.println(replacedString);

        // Removing leading and trailing whitespace
        String stringWithSpaces = "  Trim this string  ";
        String trimmedString = stringWithSpaces.trim();
        System.out.println(trimmedString);

        // Converting to uppercase and lowercase
        String lowercaseString = "lowercase";
        System.out.println(lowercaseString.toUpperCase());
        String uppercaseString = "UPPERCASE";
        System.out.println(uppercaseString.toLowerCase());

        // Checking if a string contains a substring
        String mainString = "Check if this contains a substring";
        String substring = "contains";
        System.out.println(mainString.contains(substring));

        // Finding the index of a specific substring
        String longString = "This is a long text with a word";
        String wordToFind = "word";
        int index = longString.indexOf(wordToFind);
        System.out.println("Index of 'word': " + index);

        // Getting the length of a string
        String countMe = "Count me!";
        System.out.println(countMe.length());

        // Reversing a string
        String original = "reverse";
        StringBuilder reversed = new StringBuilder(original).reverse();
        System.out.println(reversed);

        // Formatting a string with placeholders
        String formattedString = String.format("Hello, %s! Today is %dth day of the year.", "John", 200);
        System.out.println(formattedString);

        // JSON manipulation
        String json = "{\"key\":\"value\"}";
        // Add library for JSON handling and perform manipulation here

        // Logging object as string
        Object obj = new Object();
        System.out.println("Object as string: " + obj.toString());

        // Input validation and sanitization
        String userInput = "user input";
        String sanitizedInput = userInput.replaceAll("[^a-zA-Z0-9]", "");
        System.out.println("Sanitized input: " + sanitizedInput);

        // String algorithms
        String[] names = {"Alice", "Bob", "Charlie"};
        Arrays.sort(names);
        System.out.println("Sorted names: " + Arrays.toString(names));
    }
}
