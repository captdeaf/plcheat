package main

import (
    "fmt"
    "os"
    "io/ioutil"
)

func main() {
    // Reading a file in a specific format and processing its contents
    fileContents, err := ioutil.ReadFile("example.txt")
    if err != nil {
        fmt.Println("Error reading file:", err)
    } else {
        fmt.Println(string(fileContents))
    }

    // Writing data to a file or creating a new file
    data := []byte("Hello, World!")
    err = ioutil.WriteFile("newfile.txt", data, 0644)
    if err != nil {
        fmt.Println("Error writing to file:", err)
    }

    // Appending data to an existing file
    file, err := os.OpenFile("existingfile.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil {
        fmt.Println("Error appending to file:", err)
    }
    defer file.Close()
    file.Write([]byte(" Appending data"))

    // Checking if a file exists
    if _, err := os.Stat("example.txt"); err == nil {
        fmt.Println("File exists")
    } else {
        fmt.Println("File does not exist")
    }

    // Listing all files and directories within a given directory
    files, err := ioutil.ReadDir("directory/path")
    if err != nil {
        fmt.Println("Error listing directory:", err)
    }
    for _, file := range files {
        fmt.Println(file.Name())
    }

    // Deleting a file or directory
    err = os.Remove("filetodelete.txt")
    if err != nil {
        fmt.Println("Error deleting file:", err)
    }

    // Moving or renaming a file or directory
    err = os.Rename("oldfile.txt", "newfile.txt")
    if err != nil {
        fmt.Println("Error renaming file:", err)
    }

    // Creating a temporary file or directory
    tempFile, err := ioutil.TempFile("", "temp")
    if err != nil {
        fmt.Println("Error creating temp file:", err)
    }
    defer os.Remove(tempFile.Name())
    fmt.Println("Temporary file created at:", tempFile.Name())

    // Changing file permissions
    err = os.Chmod("file.txt", 0777)
    if err != nil {
        fmt.Println("Error changing file permissions:", err)
    }

    // Searching for a specific file or directory within a directory
    files, err = ioutil.ReadDir("directory/path")
    if err != nil {
        fmt.Println("Error listing directory:", err)
    }
    for _, file := range files {
        if file.Name() == "specificfile.txt" {
            fmt.Println("File found:", file.Name())
            break
        }
    }
}
