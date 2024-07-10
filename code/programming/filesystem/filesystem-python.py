import os

# Reading a file in a specific format and processing its contents
def read_file(filepath):
    with open(filepath, 'r') as file:
        data = file.read()
        # Process data here
        print(data)

# Writing data to a file or creating a new file
def write_to_file(filepath, data):
    with open(filepath, 'w') as file:
        file.write(data)

# Appending data to an existing file
def append_to_file(filepath, data):
    with open(filepath, 'a') as file:
        file.write(data)

# Checking if a file or directory exists
def check_existence(path):
    return os.path.exists(path)

# Listing all files and directories within a given directory
def list_files_in_directory(directory):
    return os.listdir(directory)

# Deleting a file or directory
def delete_file_or_directory(path):
    if os.path.isfile(path):
        os.remove(path)
    elif os.path.isdir(path):
        os.rmdir(path)

# Moving or renaming a file or directory
def move_or_rename_file(source, destination):
    os.rename(source, destination)

# Creating a temporary file 
def create_temp_file():
    with open('temp_file.txt', 'w') as file:
        file.write("This is a temporary file.")

# Changing file permissions or ownership
def change_permissions(filepath, permission):
    os.chmod(filepath, permission)

# Searching for a specific file or directory within a directory
def search_specific_file(directory, filename):
    for root, dirs, files in os.walk(directory):
        if filename in files:
            return os.path.join(root, filename)
    return None

# Example usages
read_file('example.txt')
write_to_file('new_file.txt', 'Hello, World!')
append_to_file('new_file.txt', '\nAppending new data.')
print(check_existence('new_file.txt'))
print(list_files_in_directory('.'))
delete_file_or_directory('temp_file.txt')
move_or_rename_file('new_file.txt', 'renamed_file.txt')
create_temp_file()
change_permissions('new_file.txt', 0o777)
print(search_specific_file('.', 'example.txt'))
