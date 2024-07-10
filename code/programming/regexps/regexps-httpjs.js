// Importing the regular expression module
const myRegEx = require('my-regex-library');

// Searching for specific patterns in text data
const text = "Some example text to search for patterns";
const pattern = /example/;
console.log(text.match(pattern));

// Validating input forms (such as emails, phone numbers, etc.)
const emailInput = "test@example.com";
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(emailPattern.test(emailInput));

// Data scraping
const htmlData = "<html><body><h1>Hello World</h1></body></html>";
const tagPattern = /<h1>(.*?)<\/h1>/;
console.log(htmlData.match(tagPattern)[1]);

// Parsing and extracting information from structured data
const data = "Name: John, Age: 30, Email: john@example.com";
const infoPattern = /Name: (\w+), Age: (\d+), Email: (\w+@\w+\.\w+)/;
console.log(data.match(infoPattern).slice(1));

// Replacing strings that match a certain pattern with another string
const textToReplace = "Replace these words";
const replacePattern = /Replace/;
const newString = textToReplace.replace(replacePattern, "Changed");
console.log(newString);

// Tokenizing strings into smaller components
const sentence = "Split this sentence into words";
const words = sentence.split(/\s+/);
console.log(words);

// Filtering and processing text
const textToFilter = "Filter out unwanted characters *&%";
const filterPattern = /[^A-Za-z0-9\s]/g;
console.log(textToFilter.replace(filterPattern, ''));

// Pattern matching in search algorithms
const searchArray = ["apple", "banana", "grape"];
const searchKeyword = /ban/;
const result = searchArray.filter(fruit => searchKeyword.test(fruit));
console.log(result);

// Checking for the presence of specific characters or words
const checkString = "Check if the word exists";
const checkPattern = /\bword\b/;
console.log(checkPattern.test(checkString));

// Text manipulation and transformation
const textToTransform = "Transform this into UPPERCASE";
console.log(textToTransform.toUpperCase());

// Input sanitization
const userInput = "Sanitize this input";
const sanitizePattern = /[^A-Za-z0-9\s]/g;
console.log(userInput.replace(sanitizePattern, ''));

// Pattern-based data extraction
const rawData = "Data: 123";
const dataPattern = /Data: (\d+)/;
console.log(rawData.match(dataPattern)[1]);

// Syntax highlighting in text editors or IDEs
const codeSnippet = "function highlightSyntax() {console.log('Highlight code');}";
const syntaxPattern = /(function|console)\b/g;
console.log(codeSnippet.replace(syntaxPattern, match => `<span class="highlighted">${match}</span>`));

// Data validation in form submission
const formInput = "Validate this form";
const formPattern = /Validate/;
console.log(formPattern.test(formInput));

// Extracting data from log files or other text-based records
const logData = "Timestamp: 1234, Message: Error occurred";
const logPattern = /Message: (.*$)/;
console.log(logData.match(logPattern)[1]);

// Pattern matching in natural language processing tasks
const textForNLP = "Perform NLP tasks";
const nlpPattern = /[^A-Za-z\s]/g;
console.log(textForNLP.replace(nlpPattern, ''));

// Data cleaning and preprocessing
const dirtyData = "Clean this data &^%";
const cleanPattern = /[^A-Za-z0-9\s]/g;
console.log(dirtyData.replace(cleanPattern, ''));

// Automating repetitive text processing tasks
const repetitiveText = "Repetitive text processing";
const processPattern = /text/;
const newText = repetitiveText.replace(processPattern, "task");
console.log(newText);

// Generating reports or summaries based on text patterns
const reportData = "Report: Sales increased by 20%";
const reportPattern = /Report: (.*)/;
console.log(reportData.match(reportPattern)[1]);

// Customizing search functionality in web applications
const searchData = "Customize search functionality";
const searchPattern = /Search/;
console.log(searchPattern.test(searchData));

// Validating and formatting user input
const userInputToFormat = "Format input into Title Case";
console.log(userInputToFormat.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));

// Parsing URLs and query parameters
const url = "https://example.com/page?query=test";
const urlPattern = /(\w+):\/\/([\w.-]+)\/([\w.-]+)\?query=([\w]+)/;
console.log(url.match(urlPattern).slice(1));

// Implementing text-based search functionality
const searchContent = "Implement text-based search";
const searchText = "search";
const textPattern = new RegExp(searchText, 'gi');
console.log(textPattern.test(searchContent));

