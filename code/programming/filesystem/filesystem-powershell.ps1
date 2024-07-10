[
    "# Reading a file in a specific format and processing its contents",
    "Get-Content -Path 'C:\\path\\to\\file.txt' -Encoding UTF8",
    
    "# Writing data to a file or creating a new file",
    "Set-Content -Path 'C:\\path\\to\\newfile.txt' -Value 'Hello, World!' -Encoding UTF8",
    
    "# Appending data to an existing file",
    "'New content to append' | Add-Content -Path 'C:\\path\\to\\existingfile.txt'",
    
    "# Checking if a file or directory exists",
    "Test-Path -Path 'C:\\path\\to\\file_or_directory'",
    
    "# Listing all files and directories within a given directory",
    "Get-ChildItem -Path 'C:\\path\\to\\directory' -Recurse",
    
    "# Deleting a file or directory",
    "Remove-Item -Path 'C:\\path\\to\\file_or_directory' -Force",
    
    "# Moving or renaming a file or directory",
    "Move-Item -Path 'C:\\path\\to\\file_or_directory' -Destination 'C:\\new\\path'",
    
    "# Creating a temporary file or directory",
    "$tempFile = [System.IO.Path]::GetTempFileName(); Remove-Item $tempFile",
    
    "# Changing file permissions or ownership",
    "$acl = Get-Acl -Path 'C:\\path\\to\\file_or_directory'; $rules = New-Object System.Security.AccessControl.FileSystemAccessRule('USERNAME', 'FullControl', 'Allow'); $acl.SetAccessRule($rules); Set-Acl -Path 'C:\\path\\to\\file_or_directory' -AclObject $acl",
    
    "# Searching for a specific file or directory within a directory",
    "Get-ChildItem -Path 'C:\\path\\to\\directory' -Filter 'filename_pattern' -Recurse"
]
