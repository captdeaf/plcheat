using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        // Improving performance by running tasks concurrently
        Task.Run(() =>
        {
            Console.WriteLine("Task 1 is running on a separate thread.");
        });

        // Handling multiple tasks simultaneously without blocking the main program
        Task task2 = Task.Run(() =>
        {
            Console.WriteLine("Task 2 is running concurrently with Task 1.");
        });

        task2.Wait(); // Wait for task2 to complete before proceeding

        // Updating UI elements in response to asynchronous events
        Task.Run(() =>
        {
            UpdateUI("Updated UI asynchronously");
        });

        // Processing large amounts of data in the background while the main thread remains responsive
        Task.Run(() =>
        {
            ProcessDataInBackground();
        });

        // Performing network requests without freezing the application's user interface
        Task.Run(() =>
        {
            MakeNetworkRequest();
        });

        Console.ReadKey();
    }

    static void UpdateUI(string message)
    {
        Console.WriteLine(message);
    }

    static void ProcessDataInBackground()
    {
        for (int i = 0; i < 1000000; i++)
        {
            // Process large data here
        }
        Console.WriteLine("Data processing in the background completed.");
    }

    static void MakeNetworkRequest()
    {
        Console.WriteLine("Network request is being made asynchronously.");
    }
}
