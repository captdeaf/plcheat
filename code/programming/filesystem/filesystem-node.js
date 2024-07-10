const fs = require('fs');
const path = require('path');

// Reading a file in a specific format and processing its contents
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing data to a file or creating a new file
fs.writeFile('newFile.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File created and data written successfully');
});

// Appending data to an existing file
fs.appendFile('existingFile.txt', 'More data to append', (err) => {
  if (err) throw err;
  console.log('Data appended to existing file');
});

// Checking if a file or directory exists
fs.access('someFile.txt', (err) => {
  if (err) {
    console.log('File does not exist');
  } else {
    console.log('File exists');
  }
});

// Listing all files and directories within a given directory
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Files and directories in the current directory:', files);
});

// Deleting a file or directory
fs.unlink('fileToDelete.txt', (err) => {
  if (err) throw err;
  console.log('File deleted successfully');
});

// Moving or renaming a file or directory
fs.rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('File moved/renamed successfully');
});

// Creating a temporary file or directory
const tempDir = fs.mkdtempSync(path.join(__dirname, 'tmp-'));
console.log('Temporary directory created:', tempDir);

// Changing file permissions or ownership
fs.chmod('file.txt', 0o755, (err) => {
  if (err) throw err;
  console.log('File permissions changed successfully');
});

// Searching for a specific file or directory within a directory
const searchTerm = 'searchFile.txt';
fs.readdir('.', (err, files) => {
  if (err) throw err;

  const fileFound = files.find(file => file === searchTerm);
  if (fileFound) {
    console.log(`${searchTerm} found in the directory`);
  } else {
    console.log(`${searchTerm} not found in the directory`);
  }
});
