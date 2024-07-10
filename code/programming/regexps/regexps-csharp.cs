using System;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        // Searching for specific patterns in text data
        string text = "The quick brown fox jumps over the lazy dog.";
        string pattern = @"\b\w{5}\b"; // Match 5-letter words
        MatchCollection matches = Regex.Matches(text, pattern);
        foreach (Match match in matches)
        {
            Console.WriteLine(match.Value);
        }

        // Validating input forms (such as emails, phone numbers, etc.)
        string email = "example@example.com";
        string emailPattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
        bool isValidEmail = Regex.IsMatch(email, emailPattern);
        Console.WriteLine(isValidEmail);

        // Data scraping
        string htmlContent = "<html><body><h1>Hello, World!</h1></body></html>";
        string htmlTagPattern = "<.*?>"; // Match HTML tags
        string cleanText = Regex.Replace(htmlContent, htmlTagPattern, "");
        Console.WriteLine(cleanText);

        // Parsing and extracting information from structured data
        string data = "Name: John, Age: 30, Location: USA";
        string agePattern = @"Age:\s(\d+)";
        Match ageMatch = Regex.Match(data, agePattern);
        if (ageMatch.Success)
        {
            Console.WriteLine(ageMatch.Groups[1].Value);
        }

        // Replace strings that match a certain pattern with another string
        string input = "Programming is fun!";
        string replaced = Regex.Replace(input, @"\bfun\b", "awesome");
        Console.WriteLine(replaced);

        // Tokenizing strings into smaller components
        string sentence = "Hello, World!";
        string[] tokens = Regex.Split(sentence, @"\W");
        foreach (string token in tokens)
        {
            Console.WriteLine(token);
        }

        // Filter and process text
        string textToFilter = "123abc456xyz789";
        string filteredText = Regex.Replace(textToFilter, @"\d", "");
        Console.WriteLine(filteredText);

        // Other examples omitted for brevity
    }
}
