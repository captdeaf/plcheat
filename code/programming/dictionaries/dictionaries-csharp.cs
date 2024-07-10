using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Storing key-value pairs for quick retrieval
        Dictionary<string, int> keyValuePairs = new Dictionary<string, int>();
        keyValuePairs.Add("apple", 5);
        keyValuePairs.Add("banana", 3);

        Console.WriteLine("Value of apple: " + keyValuePairs["apple"]);

        // Implementing a cache or memoization system
        Dictionary<int, int> memoizationCache = new Dictionary<int, int>();

        int Fibonacci(int n)
        {
            if (n <= 1)
                return n;

            if (memoizationCache.ContainsKey(n))
                return memoizationCache[n];

            int result = Fibonacci(n - 1) + Fibonacci(n - 2);
            memoizationCache.Add(n, result);
            return result;
        }

        Console.WriteLine("Fibonacci value for 10: " + Fibonacci(10));

        // Counting occurrences of elements in a collection
        Dictionary<int, int> occurrences = new Dictionary<int, int>();

        int[] numbers = { 1, 2, 2, 3, 3, 3 };

        foreach (int num in numbers)
        {
            if (occurrences.ContainsKey(num))
                occurrences[num]++;
            else
                occurrences[num] = 1;
        }

        Console.WriteLine("Occurrences of 3: " + occurrences[3]);

        // Mapping unique identifiers to objects or data
        Dictionary<Guid, string> objectMapping = new Dictionary<Guid, string>();
        Guid id = Guid.NewGuid();
        objectMapping.Add(id, "John Doe");

        Console.WriteLine("Name for Guid " + id + ": " + objectMapping[id]);
    }
}
