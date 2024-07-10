using System;

class Program
{
    static void Main()
    {
        // Concatenating two strings together
        string concatenated = "Hello, " + "World!";
        Console.WriteLine(concatenated);

        // Splitting a string into an array of substrings based on a delimiter
        string sentence = "The quick brown fox jumps over the lazy dog";
        string[] words = sentence.Split(' ');
        foreach (string word in words)
        {
            Console.WriteLine(word);
        }

        // Replacing a specific substring
        string original = "Hello, World!";
        string replaced = original.Replace("World", "Universe");
        Console.WriteLine(replaced);

        // Removing leading and trailing whitespace
        string withWhitespaces = "  Trim me!    ";
        string trimmed = withWhitespaces.Trim();
        Console.WriteLine(trimmed);

        // Converting to uppercase and lowercase
        string uppercase = "hello".ToUpper();
        string lowercase = "WORLD".ToLower();
        Console.WriteLine(uppercase);
        Console.WriteLine(lowercase);

        // Checking if a string contains a certain substring
        string checkString = "Hello, Universe!";
        bool containsSubstr = checkString.Contains("Universe");
        Console.WriteLine(containsSubstr);

        // Finding the index of a specific substring
        string parentString = "The quick brown fox";
        int index = parentString.IndexOf("brown");
        Console.WriteLine(index);

        // Getting the length of a string
        string lengthString = "C# Programming";
        int length = lengthString.Length;
        Console.WriteLine(length);

        // Reversing a string
        char[] charArray = "Reverse".ToCharArray();
        Array.Reverse(charArray);
        string reversed = new string(charArray);
        Console.WriteLine(reversed);

        // Formatting a string with placeholders for variables
        string formatted = string.Format("{0} is {1} years old.", "Alice", 25);
        Console.WriteLine(formatted);

        // Parsing and manipulating data stored in JSON format
        string jsonString = "{\"name\":\"John\",\"age\":30}";
        // Example of deserializing JSON using a serializer (Newtonsoft.Json)
        dynamic parsedJson = Newtonsoft.Json.JsonConvert.DeserializeObject(jsonString);
        Console.WriteLine($"Name: {parsedJson.name}, Age: {parsedJson.age}");

        // Generating a string representation of an object
        // Example using a custom object
        Person person = new Person { Name = "Bob", Age = 28 };
        string debugString = person.ToString();
        Console.WriteLine(debugString);

        // Validating and sanitizing user input
        string userInput = "   Input    ";
        string validatedInput = userInput.Trim();
        Console.WriteLine(validatedInput);

        // Implementing string matching algorithm
        string mainString = "programming";
        string pattern = "gram";
        // Example using IndexOf for simple pattern matching
        int matchIndex = mainString.IndexOf(pattern);
        Console.WriteLine(matchIndex);
    }
}

class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public override string ToString()
    {
        return $"Person: {Name}, Age: {Age}";
    }
}
