# PowerShell - regex_examples.ps1

# Pattern Matching
$text = "There are 123 apples"
$pattern = "\d+"  # Match one or more digits
if ($text -match $pattern) {
    Write-Output "Pattern Matching: Match found!"
} else {
    Write-Output "Pattern Matching: No match found."
}

# Search and Replace
$text = "Hello 123, meet 456"
$result = $text -replace $pattern, "number"
Write-Output "Search and Replace: $result"  # "Hello number, meet number"

# String Splitting
$text = "apple, orange; banana, grape"
$result = $text -split "[,;]"
Write-Output "String Splitting: $($result -join ", ")"  # ["apple", " orange", " banana", " grape"]

# Extracting Substrings
$text = "The date is 2024-06-27"
if ($text -match "(\d{4})-(\d{2})-(\d{2})") {
    Write-Output "Extracting Substrings: $($matches[1]), $($matches[2]), $($matches[3])"  # ["2024", "06", "27"]
}

# Validation
$email = "example@test.com"
$pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
if ($email -match $pattern) {
    Write-Output "Validation: Valid email address!"
} else {
    Write-Output "Validation: Invalid email address."
}

# Removing Unwanted Characters
$text = "Hello, World!"
$cleaned_text = $text -replace "[^\w\s]", ""  # Remove all non-alphanumeric characters
Write-Output "Removing Unwanted Characters: $cleaned_text"  # "Hello World"

# Anchoring Searches
$text = "The quick brown fox"
$pattern = "\bfox\b"  # Match 'fox' as a whole word
if ($text -match $pattern) {
    Write-Output "Anchoring Searches: Found"
} else {
    Write-Output "Anchoring Searches: Not Found"
}

# Escaping Characters
function Escape-RegexPattern {
    param ($input)
    [Regex]::Escape($input)
}
$user_input = "some[unsafe]input"
$escaped_input = Escape-RegexPattern $user_input
Write-Output "Escaping Characters: $escaped_input"  # "some\[unsafe\]input"

# Conditional Matching
$text = "foobar and foo"
$pattern = "foo(?=bar)"  # Match 'foo' only if followed by 'bar'
$matches = [regex]::Matches($text, $pattern)
Write-Output "Conditional Matching: $($matches | ForEach-Object { $_.Value })"  # "foo"

