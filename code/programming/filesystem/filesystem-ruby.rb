# Reading a file in a specific format and processing its contents
file_path = "example.txt"

File.open(file_path, "r") do |file|
  file.each_line do |line|
    # Your processing logic here
    puts line
  end
end

# Writing data to a file or creating a new file
File.open("output.txt", "w") do |file|
  file.puts "Hello, World!"
end

# Appending data to an existing file
File.open("output.txt", "a") do |file|
  file.puts "Appending more data"
end

# Checking if a file or directory exists
file_path = "example.txt"
puts File.exist?(file_path)

# Listing all files and directories within a given directory
dir_path = "path/to/directory"
Dir.entries(dir_path).each do |entry|
  puts entry
end

# Deleting a file
File.delete("file_to_delete.txt")

# Moving or renaming a file or directory
File.rename("old_file.txt", "new_file.txt")

# Creating a temporary file
temp_file = Tempfile.new("temp")
puts temp_file.path

# Changing file permissions or ownership
File.chmod(0644, "file_to_change_permissions.txt")

# Searching for a specific file or directory within a directory
dir_path = "path/to/search"
search_query = "file_to_search.txt"
Dir.glob(File.join(dir_path, '**', search_query)).each do |file|
  puts file
end
