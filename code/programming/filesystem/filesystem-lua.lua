-- Reading a file in a specific format and processing its contents
local file = io.open("input.txt", "r")
if file then
   local contents = file:read("*all")
   print("File contents:", contents)
   file:close()
end

-- Writing data to a file or creating a new file
local newFile = io.open("output.txt", "w")
newFile:write("Hello, World!")
newFile:close()

-- Appending data to an existing file
local appendFile = io.open("output.txt", "a")
appendFile:write("\nThis is additional content.")
appendFile:close()

-- Checking if a file or directory exists
function fileOrDirExists(name)
   return os.rename(name, name) and true or false
end

-- Listing all files and directories within a given directory
for file in io.popen('ls /path/to/directory'):lines() do
   print(file)
end

-- Deleting a file or directory
os.remove("fileToDelete.txt")

-- Moving or renaming a file or directory
os.rename("oldName.txt", "newName.txt")

-- Creating a temporary file or directory
local tempFile = io.open(os.tmpname(), "w")
tempFile:write("Temporary content")
tempFile:close()

-- Changing file permissions or ownership
os.execute("chmod 777 myFile.txt")

-- Searching for a specific file or directory within a directory
for file in io.popen('ls /path/to/directory | grep searchFile.txt'):lines() do
   print("Found file:", file)
end
