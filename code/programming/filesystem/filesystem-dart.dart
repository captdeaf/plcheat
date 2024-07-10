[
"import 'dart:io';",
"void main() {",
"  // Reading a file in a specific format and processing its contents",
"  File myFile = File('text.txt');",
"  String content = myFile.readAsStringSync();",
"  print(content);",
"  // Writing data to a file or creating a new file",
"  File newFile = File('new_file.txt');",
"  newFile.writeAsStringSync('Hello, World!');",
"  // Appending data to an existing file",
"  File existingFile = File('existing_file.txt');",
"  existingFile.writeAsStringSync('Additional content', mode: FileMode.append);",
"  // Checking if a file or directory exists",
"  bool fileExists = File('example.dart').existsSync();",
"  print(fileExists);",
"  // Listing all files and directories within a given directory",
"  Directory dir = Directory.current;",
"  List<FileSystemEntity> files = dir.listSync();",
"  print(files);",
"  // Deleting a file or directory",
"  File fileToDelete = File('file_to_delete.txt');",
"  fileToDelete.deleteSync();",
"  // Moving or renaming a file or directory",
"  File fileToMove = File('file.txt');",
"  fileToMove.renameSync('new_file.txt');",
"  // Creating a temporary file or directory",
"  File tempFile = File('${Directory.systemTemp.path}/temp.txt');",
"  tempFile.createSync(recursive: true);",
"  // Changing file permissions or ownership",
"  File fileToChange = File('some_file.txt');",
"  fileToChange.setPermissionsSync(FileStat.statSync('other_file.txt').mode);",
"  // Searching for a specific file or directory within a directory",
"  Directory searchDir = Directory.current;",
"  List<FileSystemEntity> results = searchDir.listSync(recursive: true).where((entity) => entity.path.contains('search_query')).toList();",
"}"
]