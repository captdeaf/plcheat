# Concatenating two strings together to create a longer string
$concatenatedString = "Hello, " + "World"

# Splitting a string into an array of substrings based on a delimiter
$stringToSplit = "apple,banana,orange"
$splitArray = $stringToSplit -split ","

# Replacing a specific substring with another substring within a larger string
$originalString = "Hello, World!"
$modifiedString = $originalString -replace "World", "Everyone"

# Removing leading and trailing whitespace from a string
$whitespaceString = "   Trimmed String    "
$trimmedString = $whitespaceString.Trim()

# Converting a string to uppercase or lowercase
$lowerCaseString = "lowercase"
$upperCaseString = $lowerCaseString.ToUpper()

# Checking if a string contains a certain substring
$searchString = "This is a sample string"
$containsSubstring = $searchString.Contains("sample")

# Finding the index of a specific substring within a larger string
$findIndexString = "Finding index in a string"
$index = $findIndexString.IndexOf("index")

# Getting the length of a string
$lengthOfString = "Count me"
$stringLength = $lengthOfString.Length

# Reversing a string
$stringToReverse = "ReverseMe"
$reversedString = [char[]]::new($stringToReverse.ToCharArray(), $stringToReverse.Length) -join ""

# Formatting a string with placeholders for variables
$placeholderString = "This is {0} example"
$formattedString = $placeholderString -f "an"

# Parsing and manipulating data stored in a string format (such as JSON or XML)
$jsonString = '{ "key": "value" }'
$parsedJson = ConvertFrom-Json $jsonString

# Generating a string representation of an object for debugging or logging
$sampleObject = [PSCustomObject]@{
    Name = "Alice"
    Age = 30
}
$stringRepresentation = $sampleObject | Out-String

# Validating and sanitizing user input received as strings
$userInput = Read-Host "Enter your name"
$sanitizedInput = $userInput -replace '[^\w\s]'

# Implementing algorithms like string matching, searching, or sorting
$haystack = "Look for needle in haystack"
$needle = "needle"
$needleFound = $haystack -match $needle

# Output results for demonstration
Write-Host $concatenatedString
Write-Host $splitArray
Write-Host $modifiedString
Write-Host $trimmedString
Write-Host $upperCaseString
Write-Host $containsSubstring
Write-Host $index
Write-Host $stringLength
Write-Host $reversedString
Write-Host $formattedString
Write-Host $parsedJson
Write-Host $stringRepresentation
Write-Host $sanitizedInput
Write-Host $needleFound
