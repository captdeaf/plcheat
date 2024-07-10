// Importing the built-in Node.js 'fs' module for file system operations
const fs = require('fs');
// Importing the built-in Node.js 'readline' module for reading input
const readline = require('readline');

// Example 1: Searching for specific patterns in text data
const searchPattern = /example/;
const textData = 'This is an example sentence.';
if (searchPattern.test(textData)) {
  console.log('Pattern found in text data.');
}

// Example 2: Validating input forms (emails)
const emailPattern = /^\S+@\S+\.\S+$/;
const email = 'example@email.com';
if (emailPattern.test(email)) {
  console.log('Email is valid.');
}

// Example 3: Data scraping
// Assume data to be scraped is in 'scrapedData.txt'
fs.readFile('scrapedData.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const scrapedPattern = /regex pattern/;
  const scrapedResults = data.match(scrapedPattern);
  console.log('Scraped data results:', scrapedResults);
});

// Example 4: Replacing strings that match a certain pattern
const replacePattern = /example/;
const replaceText = 'This is an example text.';
const replacedText = replaceText.replace(replacePattern, 'replacement');
console.log('Replaced text:', replacedText);

// More examples can be added following a similar structure
