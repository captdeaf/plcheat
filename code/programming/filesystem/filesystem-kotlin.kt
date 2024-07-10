import java.io.File
import java.nio.file.Files
import java.nio.file.Paths

fun main() {
    val fileName = "example.txt"

    // Reading a file in a specific format and processing its contents
    val fileContents = File(fileName).readText()
    println("File contents: $fileContents")

    // Writing data to a file or creating a new file
    File("newFile.txt").writeText("Hello, World!")

    // Appending data to an existing file
    File(fileName).appendText("\nThis is new content.")

    // Checking if a file or directory exists
    val fileExists = File("newFile.txt").exists()
    println("Does file exist? $fileExists")

    // Listing all files and directories within a given directory
    val filesInDirectory = File(".").listFiles()?.map { it.name }
    println("Files in directory: $filesInDirectory")

    // Deleting a file or directory
    Files.delete(Paths.get("newFile.txt"))

    // Moving or renaming a file or directory
    Files.move(Paths.get("example.txt"), Paths.get("newName.txt"))

    // Creating a temporary file or directory
    val tempFile = File.createTempFile("temp", ".txt")
    println("Temporary file created: ${tempFile.absolutePath}")

    // Changing file permissions or ownership (Not recommended in Kotlin, typically done on lower-level APIs)

    // Searching for a specific file or directory within a directory
    val searchFileName = "searchFile.txt"
    val directory = File(".")
    val matchingFiles = directory.listFiles { file -> file.isDirectory || file.name == searchFileName }
    println("Matching files: ${matchingFiles.map { it.name }}")
}
