import * as fs from "fs";
import * as path from "path";

// Reading a file in a specific format and processing its contents
const readAndProcessFile = (filePath: string): void => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    // Process the data here
  });
};

// Writing data to a file or creating a new file
const writeToFile = (filePath: string, data: string): void => {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data has been written to the file.");
  });
};

// Appending data to an existing file
const appendToFile = (filePath: string, data: string): void => {
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data has been appended to the file.");
  });
};

// Checking if a file or directory exists
const checkFileOrDirectoryExists = (path: string): boolean => {
  return fs.existsSync(path);
};

// Listing all files and directories within a given directory
const listFilesAndDirectories = (directoryPath: string): void => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(files);
  });
};

// Deleting a file or directory
const deleteFileOrDirectory = (pathToDelete: string): void => {
  fs.rm(pathToDelete, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File or directory has been deleted.");
  });
};

// Moving or renaming a file or directory
const moveOrRenameFile = (sourcePath: string, targetPath: string): void => {
  fs.rename(sourcePath, targetPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File or directory has been moved/renamed.");
  });
};

// Creating a temporary file or directory
const createTempFileOrDir = (): string => {
  return fs.mkdtempSync(path.join(__dirname, "temp-"));
};

// Changing file permissions or ownership
const changeFilePermissions = (filePath: string, mode: string): void => {
  fs.chmod(filePath, mode, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File permissions have been changed.");
  });
};

// Searching for a specific file or directory within a directory
const searchFileOrDirectory = (directoryPath: string, searchTerm: string): void => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    const foundItems = files.filter((file) => file.includes(searchTerm));
    console.log(foundItems);
  });
};

// Example Usage:

// readAndProcessFile("example.txt");
// writeToFile("newfile.txt", "Hello, World!");
// appendToFile("existingfile.txt", "Some additional data.");
// console.log(checkFileOrDirectoryExists("example.txt"));
// listFilesAndDirectories(__dirname);
// deleteFileOrDirectory("fileToDelete.txt");
// moveOrRenameFile("source.txt", "destination.txt");
// const tempDir = createTempFileOrDir();
// console.log(tempDir);
// changeFilePermissions("file.txt", "755");
// searchFileOrDirectory(__dirname, "example");

