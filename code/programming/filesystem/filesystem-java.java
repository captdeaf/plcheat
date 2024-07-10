import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class FileInteractionExamples {

    public static void main(String[] args) {
        // Reading a file in a specific format and processing its contents
        File file = new File("example.txt");
        // code for reading the file and processing its contents

        // Writing data to a file or creating a new file
        try {
            FileWriter writer = new FileWriter("output.txt");
            writer.write("Hello, this is some data to be written to the file.");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Appending data to an existing file
        try {
            FileWriter writer = new FileWriter("output.txt", true);
            writer.write("\nAdditional data to append to the file.");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Checking if a file or directory exists
        File checkFile = new File("example.txt");
        if (checkFile.exists()) {
            System.out.println("File exists.");
        }

        // Listing all files and directories within a given directory
        File directory = new File("path/to/directory");
        File[] files = directory.listFiles();
        for (File f : files) {
            System.out.println(f.getName());
        }

        // Deleting a file or directory
        File deleteFile = new File("fileToDelete.txt");
        deleteFile.delete();

        // Moving or renaming a file or directory
        File oldFile = new File("oldFile.txt");
        File newFile = new File("newFile.txt");
        oldFile.renameTo(newFile);

        // Creating a temporary file or directory
        try {
            File tempFile = File.createTempFile("tempFile", ".txt");
            System.out.println("Temp file created: " + tempFile.getAbsolutePath());
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Changing file permissions or ownership
        // This operation may vary based on the operating system and could be system-specific.

        // Searching for a specific file or directory within a directory
        File searchDirectory = new File("searchDirectory");
        File[] searchResults = searchDirectory.listFiles((dir, name) -> name.startsWith("specificFileName"));
        for (File result : searchResults) {
            System.out.println(result.getName());
        }
    }
}
