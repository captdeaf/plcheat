use std::fs;
use std::io::{self, Write};
use std::fs::File;
use std::path::Path;

fn main() {
    // Reading a file in a specific format and processing its contents
    let contents = fs::read_to_string("example.txt")
        .expect("Error reading the file");
    println!("File contents:\n{}", contents);

    // Writing data to a file or creating a new file
    let mut file = File::create("new_file.txt")
        .expect("Error creating the file");
    writeln!(file, "Hello, world!").expect("Error writing to the file");

    // Appending data to an existing file
    let mut file = fs::OpenOptions::new()
        .append(true)
        .open("existing_file.txt")
        .expect("Error opening the file");
    writeln!(file, "Appending new content").expect("Error appending to the file");

    // Checking if a file or directory exists
    if Path::new("example.txt").exists() {
        println!("example.txt exists");
    }

    // Listing all files and directories within a given directory
    if let Ok(entries) = fs::read_dir(".") {
        for entry in entries {
            if let Ok(entry) = entry {
                println!("{:?}", entry.path());
            }
        }
    }

    // Deleting a file or directory
    fs::remove_file("file_to_delete.txt")
        .expect("Error deleting the file");

    // Moving or renaming a file or directory
    fs::rename("old_name.txt", "new_name.txt")
        .expect("Error renaming the file");

    // Creating a temporary file or directory
    let temp_dir = tempdir::TempDir::new("example_dir")
        .expect("Error creating temp directory");

    // Changing file permissions or ownership
    fs::set_permissions("file.txt", fs::Permissions::from_mode(0o755))
        .expect("Error setting file permissions");

    // Searching for a specific file or directory within a directory
    if let Ok(entries) = fs::read_dir(".") {
        for entry in entries {
            if let Ok(entry) = entry {
                let path = entry.path();
                if path.is_file() && path.file_name().unwrap() == "searched_file.txt" {
                    println!("Found searched_file.txt at {:?}", path);
                }
            }
        }
    }
}
