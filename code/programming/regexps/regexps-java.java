// Java - RegexExamples.java
import java.util.regex.*;

public class RegexExamples {
    public static void main(String[] args) {
        // Pattern Matching
        Pattern pattern = Pattern.compile("\\d+");  // Match one or more digits
        String text = "There are 123 apples";
        Matcher matcher = pattern.matcher(text);
        System.out.println("Pattern Matching: " + (matcher.find() ? "Match found!" : "No match found."));

        // Search and Replace
        text = "Hello 123, meet 456";
        String result = text.replaceAll("\\d+", "number");
        System.out.println("Search and Replace: " + result);  // "Hello number, meet number"

        // String Splitting
        text = "apple, orange; banana, grape";
        String[] resultArray = text.split("[,;]");
        System.out.println("String Splitting: " + String.join(", ", resultArray));  // ["apple", " orange", " banana", " grape"]

        // Extracting Substrings
        text = "The date is 2024-06-27";
        pattern = Pattern.compile("(\\d{4})-(\\d{2})-(\\d{2})");
        matcher = pattern.matcher(text);
        if (matcher.find()) {
            System.out.println("Extracting Substrings: " + matcher.group(1) + ", " + matcher.group(2) + ", " + matcher.group(3));  // ["2024", "06", "27"]
        }

        // Validation
        String email = "example@test.com";
        pattern = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
        matcher = pattern.matcher(email);
        System.out.println("Validation: " + (matcher.find() ? "Valid email address!" : "Invalid email address."));

        // Removing Unwanted Characters
        text = "Hello, World!";
        result = text.replaceAll("[^\\w\\s]", "");  // Remove all non-alphanumeric characters
        System.out.println("Removing Unwanted Characters: " + result);  // "Hello World"

        // Anchoring Searches
        text = "The quick brown fox";
        pattern = Pattern.compile("\\bfox\\b");  // Match 'fox' as a whole word
        matcher = pattern.matcher(text);
        System.out.println("Anchoring Searches: " + (matcher.find() ? "Found" : "Not Found"));

        // Escaping Characters
        String user_input = "some[unsafe]input";
        String escaped_input = Pattern.quote(user_input);
        System.out.println("Escaping Characters: " + escaped_input);  // "some\[unsafe\]input"

        // Conditional Matching
        pattern = Pattern.compile("foo(?=bar)");  // Match 'foo' only if followed by 'bar'
        text = "foobar and foo";
        matcher = pattern.matcher(text);
        while (matcher.find()) {
            System.out.println("Conditional Matching: " + matcher.group());  // "foo"
        }
    }
}

