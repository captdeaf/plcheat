// Importing the file system module
const fs = require('fs');

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Writing data to a file
fs.writeFile('newFile.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File was written successfully!');
});

// Appending data to a file
fs.appendFile('existingFile.txt', 'Additional content', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data was appended to the file!');
});

// Checking if a file or directory exists
fs.access('example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File does not exist');
    } else {
        console.log('File exists');
    }
});

// Listing all files and directories within a given directory
fs.readdir('./', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});

// Deleting a file
fs.unlink('fileToDelete.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File was deleted successfully!');
});

// Moving or renaming a file
fs.rename('oldFile.txt', 'newFile.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File was renamed successfully!');
});

// Creating a temporary file
fs.mkdtemp('temp-', (err, folder) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Temporary directory created:', folder);
});

// Changing file permissions
fs.chmod('example.txt', 0o775, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File permissions changed successfully');
});

// Searching for a specific file within a directory
const directoryPath = './';
const searchFile = 'example.txt';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    if (files.includes(searchFile)) {
        console.log(`${searchFile} found in the directory`);
    } else {
        console.log(`${searchFile} not found in the directory`);
    }
});
