<?php

// Searching for specific patterns in text data
$text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
$matches = [];
preg_match('/ipsum/', $text, $matches);
print_r($matches);

// Validating input forms (such as emails, phone numbers, etc.)
$email = "example@email.com";
if (preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $email)) {
    echo "Valid email";
}

// Data scraping
$html = file_get_contents("https://www.example.com");
preg_match('/<title>(.*?)<\/title>/', $html, $title);
echo $title[1];

// Parsing and extracting information from structured data
$data = "Name: John, Age: 30, City: New York";
preg_match_all('/(\w+): (\w+)/', $data, $matches);
print_r($matches);

// Replacing strings that match a certain pattern with another string
$str = "Hello 123 World";
$newstr = preg_replace('/\d+/', '456', $str);
echo $newstr;

// Tokenizing strings into smaller components
$words = preg_split('/\s+/', "Hello World");
print_r($words);

// Filtering and processing text
$text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
$filtered = preg_replace('/\b(ipsum|dolor)\b/', '', $text);
echo $filtered;

// Pattern matching in search algorithms
$keywords = ["Lorem", "ipsum", "dolores"];
$pattern = '/\b(' . implode('|', $keywords) . ')\b/';
if (preg_match($pattern, $text)) {
    echo "Match found";
}

// Checking for the presence of specific characters or words
if (preg_match('/\d+/', $text)) {
    echo "Numbers found";
}

// Text manipulation and transformation
$transformed = preg_replace_callback('/\w+/', function($match) {
    return strtoupper($match[0]);
}, $text);
echo $transformed;

// Input sanitization
$input = "<script>alert('XSS')</script>";
$clean_input = preg_replace('/<script>/', '', $input);
echo $clean_input;

// Pattern-based data extraction
$data = "Age: 25, Height: 180cm";
preg_match('/Age: (\d+), Height: (\d+)cm/', $data, $matches);
print_r($matches);

// Syntax highlighting in text editors or IDEs
$code = "function test() { echo 'Hello World'; }";
$highlighted = preg_replace('/\b(echo|function)\b/', '<span class="highlight">$1</span>', $code);
echo $highlighted;

// Data validation in form submission
$form_data = ["username" => "example123", "password" => "password"];
if (preg_match('/^[a-zA-Z0-9_]{5,}$/', $form_data["username"])) {
    echo "Valid username";
}

// Extracting data from log files or other text-based records
$log = "Error - File not found";
preg_match('/Error - (.+)$/', $log, $error);
echo $error[1];

// Pattern matching in natural language processing tasks
$text = "The quick brown fox jumps over the lazy dog";
$matches = [];
preg_match_all('/\b\w{4}\b/', $text, $matches);
print_r($matches);

// Data cleaning and preprocessing
$data = "123 456 789";
$cleaned = preg_replace('/\d+/', '', $data);
echo $cleaned;

// Automating repetitive text processing tasks
$text = "Lorem Ipsum";
$repeated = preg_replace('/(\w+)\s(\w+)/', "$1 $2 $1 $2", $text);
echo $repeated;

// Generating reports or summaries based on text patterns
$text = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit";
$summary = preg_replace('/(\b\w{4}\b)/', "[$1]", $text);
echo $summary;

// Customizing search functionality in web applications
$query = "Lorem+ipsum+dolor";
$search_query = urldecode($query);
$terms = explode("+", $search_query);
print_r($terms);

// Validating and formatting user input
$input = "john DOE";
$clean_input = ucfirst(strtolower($input));
echo $clean_input;

// Parsing URLs and query parameters
$url = "https://www.example.com/?page=1&limit=10";
preg_match('/\?([^#]+)/', $url, $query_params);
parse_str($query_params[1], $params);
print_r($params);

// Implementing text-based search functionality
$keywords = ["apple", "banana", "orange"];
$search_pattern = '/\b(' . implode('|', $keywords) . ')\b/i';
if (preg_match($search_pattern, $text)) {
    echo "Keyword found";
}

?>
