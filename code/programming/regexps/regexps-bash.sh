#!/bin/bash

# Example: Searching for specific patterns in text data
grep 'pattern' file.txt

# Example: Validating input forms (such as emails, phone numbers, etc.)
if [[ "$input" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
  echo "Valid email"
fi

# Example: Data scraping
curl http://website.com | grep 'data'

# Example: Parsing and extracting information from structured data
echo "data:123:456:data" | awk -F ":" '{print $2}'

# Example: Replacing strings that match a certain pattern with another string
sed 's/pattern/replacement/g' file.txt

# Example: Tokenizing strings into smaller components
read -a tokens <<< $(echo "Hello World" | tr " " "\n")
echo ${tokens[@]}

# Example: Filtering and processing text
awk '{print $1 " " $3}' file.txt

# Example: Pattern matching in search algorithms
awk '/pattern/' file.txt

# Example: Checking for the presence of specific characters or words
grep -q 'word' file.txt && echo "Word found"

# Example: Text manipulation and transformation
awk '{print tolower($0)}' file.txt

# Example: Input sanitization
sanitized_input=$(echo $input | sed 's/[^a-zA-Z0-9]//g')

# Example: Pattern-based data extraction
grep -o '[0-9]\+' file.txt

# Example: Syntax highlighting in text editors or IDEs
sed 's/red/\x1b[31mred\x1b[0m/' file.txt

# Example: Data validation in form submission
if [[ "$input" =~ ^[0-9]{3}-[0-9]{3}-[0-9]{4}$ ]]; then
  echo "Valid phone number"
fi

# Example: Extracting data from log files or other text-based records
awk '{print $2}' logfile.txt

# Example: Pattern matching in natural language processing tasks
awk '/[a-z]+/ {print $1}' file.txt

# Example: Data cleaning and preprocessing
sed '/pattern/d' file.txt

# Example: Automating repetitive text processing tasks
for file in *.txt; do
  sed 's/old/new/g' $file > $file.temp
done

# Example: Generating reports or summaries based on text patterns
awk '{sum+=$2} END {print sum}' file.txt

# Example: Customizing search functionality in web applications
curl "http://api.com/search?q=$searchterm"

# Example: Validating and formatting user input
if [[ "$input" == [0-9]{4} ]]; then
  formatted_input=$(echo $input | sed 's/\(.\{2\}\)/\1 /g')
fi

# Example: Parsing URLs and query parameters
echo "http://website.com/page?param=value" | grep -oP '(?<=\?).*(?=#|$)'

# Example: Implementing text-based search functionality
grep -irl 'searchterm' /path/to/directory
