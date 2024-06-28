// C++ - regex_examples.cpp
#include <iostream>
#include <regex>
#include <string>

int main() {
    // Pattern Matching
    std::regex pattern("\\d+");  // Match one or more digits
    std::string text = "There are 123 apples";
    std::smatch match;
    std::cout << "Pattern Matching: " << (std::regex_search(text, match, pattern) ? "Match found!" : "No match found.") << std::endl;

    // Search and Replace
    text = "Hello 123, meet 456";
    std::string result = std::regex_replace(text, pattern, "number");
    std::cout << "Search and Replace: " << result << std::endl;  // "Hello number, meet number"

    // String Splitting
    text = "apple, orange; banana, grape";
    std::regex re("[,;]");
    std::sregex_token_iterator it(text.begin(), text.end(), re, -1);
    std::sregex_token_iterator end;
    std::cout << "String Splitting: ";
    while (it != end) {
        std::cout << *it++ << ", ";
    }
    std::cout << std::endl;  // ["apple", " orange", " banana", " grape"]

    // Extracting Substrings
    text = "The date is 2024-06-27";
    pattern = std::regex("(\\d{4})-(\\d{2})-(\\d{2})");
    if (std::regex_search(text, match, pattern)) {
        std::cout << "Extracting Substrings: " << match[1] << ", " << match[2] << ", " << match[3] << std::endl;  // ["2024", "06", "27"]
    }

    // Validation
    std::string email = "example@test.com";
    pattern = std::regex("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    std::cout << "Validation: " << (std::regex_match(email, pattern) ? "Valid email address!" : "Invalid email address.") << std::endl;

    // Removing Unwanted Characters
    text = "Hello, World!";
    result = std::regex_replace(text, std::regex("[^\\w\\s]"), "");  // Remove all non-alphanumeric characters
    std::cout << "Removing Unwanted Characters: " << result << std::endl;  // "Hello World"

    // Anchoring Searches
    text = "The quick brown fox";
    pattern = std::regex("\\bfox\\b");  // Match 'fox' as a whole word
    std::cout << "Anchoring Searches: " << (std::regex_search(text, match, pattern) ? "Found" : "Not Found") << std::endl;

    // Escaping Characters
    std::string user_input = "some[unsafe]input";
    std::string escaped_input = std::regex_replace(user_input, std::regex("[.*+?^${}()|\\[\\]\\\\]"), "\\$&");
    std::cout << "Escaping Characters: " << escaped_input << std::endl;  // "some\[unsafe\]input"

[O    // Conditional Matching
    pattern = std::regex("foo(?=bar)");  // Match 'foo' only if followed by 'bar'
    text = "foobar and foo";
    auto words_begin = std::sregex_iterator(text.begin(), text.end(), pattern);
    auto words_end = std::sregex_iterator();
    std::cout << "Conditional Matching: ";
    for (std::sregex_iterator i = words_begin; i != words_end; ++i) {
        std::smatch match = *i;
        std::cout << match.str() << ", ";  // "foo"
    }
    std::cout << std::endl;

    return 0;
}

