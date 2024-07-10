<?php

// Reading a file in a specific format and processing its contents
$filename = "example.txt";
$file_content = file_get_contents($filename);
// Process the content as needed

// Writing data to a file or creating a new file
$output_filename = "output.txt";
$output_data = "Hello, World!";
file_put_contents($output_filename, $output_data);

// Appending data to an existing file
$append_content = "Appended Text";
file_put_contents($output_filename, $append_content, FILE_APPEND);

// Checking if a file or directory exists
if (file_exists($filename)) {
    echo "File exists!";
}

// Listing all files and directories within a given directory
$directory = "/path/to/directory";
$files = scandir($directory);
foreach ($files as $file) {
    echo $file . "\n";
}

// Deleting a file or directory
$file_to_delete = "file_to_delete.txt";
unlink($file_to_delete);

// Moving or renaming a file or directory
$old_name = "old_file.txt";
$new_name = "new_file.txt";
rename($old_name, $new_name);

// Creating a temporary file or directory
$temp_file = tmpfile();
$temp_path = stream_get_meta_data($temp_file)['uri'];

// Changing file permissions or ownership
$filename_to_change = "file_to_change.txt";
chmod($filename_to_change, 0755);
chown($filename_to_change, 'your_username');

// Searching for a specific file or directory within a directory
$dir_to_search = "/path/to/search";
$file_to_search = "file_to_search.txt";
if (in_array($file_to_search, scandir($dir_to_search))) {
    echo "File found!";
}
```
