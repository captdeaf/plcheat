#include <iostream>
#include <regex>
#include <string>

int main() {
    // Searching for specific patterns in text data
    std::string text = "Hello, regular expressions are powerful!";
    std::regex pattern("reg[a-z]+");

    if (std::regex_search(text, pattern)) {
        std::cout << "Pattern found in text." << std::endl;
    }

    // Validating input forms (such as emails, phone numbers, etc.)
    std::string email = "test@example.com";
    std::regex emailPattern(R"(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)");

    if (std::regex_match(email, emailPattern)) {
        std::cout << "Valid email." << std::endl;
    }

    // Replace strings that match a certain pattern with another string
    std::string sentence = "Regular expressions are cool!";
    std::regex word("cool");
    std::string newSentence = std::regex_replace(sentence, word, "awesome");

    std::cout << newSentence << std::endl;

    // Other uses of regular expressions can be added as needed

    return 0;
}
