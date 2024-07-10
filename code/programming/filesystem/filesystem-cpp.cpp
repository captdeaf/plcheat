#include <iostream>
#include <fstream>
#include <filesystem>

namespace fs = std::filesystem;

int main() {
    // Reading a file in a specific format and processing its contents
    std::ifstream inputFile("input.txt");
    std::string line;
    if (inputFile.is_open()) {
        while (std::getline(inputFile, line)) {
            // Process each line here
            std::cout << line << std::endl;
        }
        inputFile.close();
    }

    // Writing data to a file or creating a new file
    std::ofstream outputFile("output.txt");
    if (outputFile.is_open()) {
        outputFile << "Writing data to file\n";
        outputFile.close();
    }

    // Appending data to an existing file
    std::ofstream appendFile("append.txt", std::ios::app);
    if (appendFile.is_open()) {
        appendFile << "Appending data to file\n";
        appendFile.close();
    }

    // Checking if a file or directory exists
    if (fs::exists("test.txt")) {
        std::cout << "File exists\n";
    }

    // Listing all files and directories within a given directory
    for (const auto& entry : fs::directory_iterator("path/to/directory")) {
        std::cout << entry.path() << std::endl;
    }

    // Deleting a file
    fs::remove("file_to_delete.txt");

    // Moving or renaming a file
    fs::rename("old_name.txt", "new_name.txt");

    // Creating a temporary file
    std::ofstream tempFile(fs::temp_directory_path() / "temp.txt");

    // Changing file permissions or ownership 
    fs::permissions("file.txt", fs::perms::owner_read | fs::perms::owner_write);

    // Searching for a specific file or directory within a directory
    for (const auto& entry : fs::directory_iterator("path/to/search")) {
        if (entry.is_regular_file() && entry.path().filename() == "target_file.txt") {
            std::cout << "Found target_file.txt at: " << entry.path() << std::endl;
            break;
        }
    }

    return 0;
}
