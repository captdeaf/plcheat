using System;
using System.IO;

class Program
{
    static void Main()
    {
        // Reading a file in a specific format and processing its contents
        string filePath = "example.txt";
        if (File.Exists(filePath))
        {
            string[] lines = File.ReadAllLines(filePath);
            foreach (string line in lines)
            {
                // Process each line in the file
            }
        }

        // Writing data to a file or creating a new file
        string newFilePath = "newfile.txt";
        File.WriteAllText(newFilePath, "Hello, World!");

        // Appending data to an existing file
        File.AppendAllText(newFilePath, "This is additional text.");

        // Checking if a file or directory exists
        string directoryPath = "exampleDirectory";
        if (Directory.Exists(directoryPath))
        {
            Console.WriteLine("Directory exists.");
        }

        // Listing all files and directories within a given directory
        string[] files = Directory.GetFiles(directoryPath);
        string[] directories = Directory.GetDirectories(directoryPath);

        // Deleting a file or directory
        File.Delete(newFilePath);
        Directory.Delete(directoryPath);

        // Moving or renaming a file or directory
        string newDirectoryPath = "newDirectory";
        Directory.Move(directoryPath, newDirectoryPath);
        File.Move(newFilePath, "renamedFile.txt");

        // Creating a temporary file or directory
        string tempFilePath = Path.GetTempFileName();
        string tempDirectoryPath = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString());
        Directory.CreateDirectory(tempDirectoryPath);

        // Changing file permissions or ownership
        File.SetAttributes(newFilePath, FileAttributes.ReadOnly);

        // Searching for a specific file or directory within a directory
        string[] foundFiles = Directory.GetFiles(directoryPath, "searchKeyword*");
    }
}
