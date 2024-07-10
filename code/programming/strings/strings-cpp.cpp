#include <iostream>
#include <string>
#include <algorithm>

int main() {
    // Concatenating two strings together to create a longer string
    std::string str1 = "Hello";
    std::string str2 = "World";
    std::string concatenated = str1 + " " + str2;
    std::cout << "Concatenated string: " << concatenated << std::endl;

    // Splitting a string into an array of substrings based on a delimiter
    std::string sentence = "This is a sample sentence";
    size_t pos = 0;
    std::string token;
    while ((pos = sentence.find(" ")) != std::string::npos) {
        token = sentence.substr(0, pos);
        std::cout << token << std::endl;
        sentence.erase(0, pos + 1);
    }
    
    // Replacing a specific substring with another substring within a larger string
    std::string text = "Replace this text with new text";
    std::string toReplace = "text";
    std::string replacement = "string";
    size_t found = text.find(toReplace);
    if (found != std::string::npos) {
        text.replace(found, toReplace.size(), replacement);
    }
    std::cout << "Replaced string: " << text << std::endl;

    // Removing leading and trailing whitespace from a string
    std::string spacedString = "   Trim the spaces    ";
    spacedString.erase(0, spacedString.find_first_not_of(' '));
    spacedString.erase(spacedString.find_last_not_of(' ') + 1, std::string::npos);
    std::cout << "Trimmed string: " << spacedString << std::endl;

    // Converting a string to uppercase or lowercase
    std::string mixedCase = "MiXeD CaSe";
    std::transform(mixedCase.begin(), mixedCase.end(), mixedCase.begin(), ::tolower);
    std::cout << "Lowercase string: " << mixedCase << std::endl;

    // Checking if a string contains a certain substring
    std::string checkSubstring = "This is a sample string";
    std::string substringToCheck = "sample";
    if (checkSubstring.find(substringToCheck) != std::string::npos) {
        std::cout << "String contains substring" << std::endl;
    }

    // Finding the index of a specific substring within a larger string
    std::string searchStr = "Find the index of 'index' in this string";
    size_t indexPos = searchStr.find("index");
    std::cout << "Index position: " << indexPos << std::endl;

    // Getting the length of a string
    std::string longString = "This is a very long string";
    std::cout << "Length of the string: " << longString.size() << std::endl;

    // Reversing a string
    std::string originalString = "Reverse me";
    std::reverse(originalString.begin(), originalString.end());
    std::cout << "Reversed string: " << originalString << std::endl;

    return 0;
}
