[
  "// Reading a file in a specific format and processing its contents",
  "const fs = require('fs');",
  "const content = fs.readFileSync('example.txt', 'utf8');",
  "console.log(content);",
  
  "// Writing data to a file or creating a new file",
  "fs.writeFileSync('output.txt', 'Hello World!');",
  
  "// Appending data to an existing file",
  "fs.appendFileSync('output.txt', '\\nAppended content');",
  
  "// Checking if a file or directory exists",
  "if (fs.existsSync('example.txt')) {",
  "  console.log('File exists!');",
  "} else {",
  "  console.log('File does not exist!');",
  "}",
  
  "// Listing all files and directories within a given directory",
  "fs.readdirSync('./').forEach(file => {",
  "  console.log(file);",
  "});",
  
  "// Deleting a file or directory",
  "fs.unlinkSync('output.txt');",
  
  "// Moving or renaming a file or directory",
  "fs.renameSync('oldname.txt', 'newname.txt');",
  
  "// Creating a temporary file or directory",
  "const tempFile = fs.mkstempSync('./tempfile-');",
  
  "// Changing file permissions or ownership",
  "fs.chmodSync('example.txt', 0o755);",
  
  "// Searching for a specific file or directory within a directory",
  "const files = fs.readdirSync('./');",
  "const foundFile = files.find(file => file.includes('searchTerm'));",
  "if (foundFile) {",
  "  console.log('File found:', foundFile);",
  "} else {",
  "  console.log('File not found.');",
  "}"
]