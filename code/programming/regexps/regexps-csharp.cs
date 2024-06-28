// C# - RegexExamples.cs
using System;
using System.Text.RegularExpressions;

class RegexExamples
{
    static void Main()
    {
        // Pattern Matching
        string text = "There are 123 apples";
        string pattern = @"\d+";  // Match one or more digits
        bool isMatch = Regex.IsMatch(text, pattern);
        Console.WriteLine("Pattern Matching: " + (isMatch ? "Match found!" : "No match found."));

        // Search and Replace
        text = "Hello 123, meet 456";
        string result = Regex.Replace(text, pattern, "number");
        Console.WriteLine("Search and Replace: " + result);  // "Hello number, meet number"

        // String Splitting
        text = "apple, orange; banana, grape";
        string[] resultArray = Regex.Split(text, "[,;]");
        Console.WriteLine("String Splitting: " + string.Join(", ", resultArray));  // ["apple", " orange", " banana", " grape"]

        // Extracting Substrings
        text = "The date is 2024-06-27";
        pattern = @"(\d{4})-(\d{2})-(\d{2})";
        Match match = Regex.Match(text, pattern);
        if (match.Success)
        {
            Console.WriteLine("Extracting Substrings: " + match.Groups[1] + ", " + match.Groups[2] + ", " + match.Groups[3]);  // ["2024", "06", "27"]
        }

        // Validation
        string email = "example@test.com";
        pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
        isMatch = Regex.IsMatch(email, pattern);
        Console.WriteLine("Validation: " + (isMatch ? "Valid email address!" : "Invalid email address."));

        // Removing Unwanted Characters
        text = "Hello, World!";
        result = Regex.Replace(text, "[^\\w\\s]", "");  // Remove all non-alphanumeric characters
        Console.WriteLine("Removing Unwanted Characters: " + result);  // "Hello World"

        // Anchoring Searches
        text = "The quick brown fox";
        pattern = @"\bfox\b";  // Match 'fox' as a whole word
        isMatch = Regex.IsMatch(text, pattern);
        Console.WriteLine("Anchoring Searches: " + (isMatch ? "Found" : "Not Found"));

[O        // Escaping Characters
        string user_input = "some[unsafe]input";
        string escaped_input = Regex.Escape(user_input);
        Console.WriteLine("Escaping Characters: " + escaped_input);  // "some\[unsafe\]input"

        // Conditional Matching
        pattern = @"foo(?=bar)";  // Match 'foo' only if followed by 'bar'
        text = "foobar and foo";
        MatchCollection matches = Regex.Matches(text, pattern);
        Console.Write("Conditional Matching: ");
        foreach (Match m in matches)
        {
            Console.Write(m.Value + " ");  // "foo"
        }
        Console.WriteLine();
    }
}

