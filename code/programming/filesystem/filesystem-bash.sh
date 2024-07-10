#!/bin/bash

# Reading a file in a specific format and processing its contents
cat input.txt

# Writing data to a file or creating a new file
echo "Hello, World!" > output.txt

# Appending data to an existing file
echo "This is additional data" >> output.txt

# Checking if a file or directory exists
if [ -e output.txt ]; then
    echo "output.txt exists."
fi

# Listing all files and directories within a given directory
ls

# Deleting a file or directory
rm output.txt

# Moving or renaming a file or directory
mv input.txt new_name.txt

# Creating a temporary file or directory
tmpfile=$(mktemp)
echo "Temporary file created: $tmpfile"

# Changing file permissions or ownership
chmod 755 new_name.txt

# Searching for a specific file or directory within a directory
if [ -f "specificFile.txt" ]; then
    echo "specificFile.txt exists in the directory."
fi
