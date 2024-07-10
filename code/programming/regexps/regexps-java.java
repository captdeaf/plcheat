import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegularExpressionExamples {

    public static void main(String[] args) {
        // Searching for specific patterns in text data
        String text = "The quick brown fox jumps over the lazy dog";
        Pattern pattern1 = Pattern.compile("fox");
        Matcher matcher1 = pattern1.matcher(text);
        while (matcher1.find()) {
            System.out.println("Found at index " + matcher1.start());
        }

        // Validating input forms (such as emails, phone numbers, etc.)
        String email = "test@example.com";
        Pattern pattern2 = Pattern.compile("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$");
        boolean isValidEmail = pattern2.matcher(email).matches();
        System.out.println("Is email valid: " + isValidEmail);

        // Data scraping
        String html = "<p>Hello, <strong>World</strong></p>";
        Pattern pattern3 = Pattern.compile("<[^>]+>");
        Matcher matcher3 = pattern3.matcher(html);
        String scrapedData = matcher3.replaceAll("");
        System.out.println("Scraped data: " + scrapedData);

        // Parsing and extracting information from structured data
        String data = "Name: John, Age: 30";
        Pattern pattern4 = Pattern.compile("\\w+:\\s(\\w+)");
        Matcher matcher4 = pattern4.matcher(data);
        while (matcher4.find()) {
            System.out.println("Extracted: " + matcher4.group(1));
        }

        // Replacing strings that match a certain pattern with another string
        String sentence = "The cat and the hat";
        Pattern pattern5 = Pattern.compile("\\b(cat|hat)\\b");
        String replacedSentence = pattern5.matcher(sentence).replaceAll("dog");
        System.out.println("Replaced sentence: " + replacedSentence);
        
        // Tokenizing strings into smaller components
        String longText = "apple,orange,banana,grape";
        String[] tokens = longText.split(",");
        for (String token : tokens) {
            System.out.println("Token: " + token);
        }
        
        // And so on for the remaining examples...
    }
}
