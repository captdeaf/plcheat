// Dart - regex_examples.dart
void main() {
  // Pattern Matching
  String pattern = r'\d+';  // Match one or more digits
  String text = 'There are 123 apples';
  RegExp regExp = RegExp(pattern);
  print('Pattern Matching: ${regExp.hasMatch(text) ? "Match found!" : "No match found."}');

  // Search and Replace
  text = 'Hello 123, meet 456';
  String result = text.replaceAll(regExp, 'number');
  print('Search and Replace: $result');  // "Hello number, meet number"

  // String Splitting
  text = 'apple, orange; banana, grape';
  List<String> resultArray = text.split(RegExp(r'[ ,;]+'));
  print('String Splitting: ${resultArray.join(", ")}');  // ["apple", "orange", "banana", "grape"]

  // Extracting Substrings
  text = 'The date is 2024-06-27';
  pattern = r'(\d{4})-(\d{2})-(\d{2})';
  regExp = RegExp(pattern);
  RegExpMatch match = regExp.firstMatch(text)!;
  print('Extracting Substrings: ${match.group(1)}, ${match.group(2)}, ${match.group(3)}');  // ["2024", "06", "27"]

  // Validation
  String email = 'example@test.com';
  pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
  regExp = RegExp(pattern);
  print('Validation: ${regExp.hasMatch(email) ? "Valid email address!" : "Invalid email address."}');

  // Removing Unwanted Characters
  text = 'Hello, World!';
  result = text.replaceAll(RegExp(r'[^\w\s]'), '');  // Remove all non-alphanumeric characters
  print('Removing Unwanted Characters: $result');  // "Hello World"

  // Anchoring Searches
  text = 'The quick brown fox';
  pattern = r'\bfox\b';  // Match 'fox' as a whole word
  regExp = RegExp(pattern);
  print('Anchoring Searches: ${regExp.hasMatch(text) ? "Found" : "Not Found"}');

  // Escaping Characters
  String user_input = 'some[unsafe]input';
  String escaped_input = RegExp.escape(user_input);
  print('Escaping Characters: $escaped_input');  // "some\[unsafe\]input"

  // Conditional Matching
  text = 'foobar and foo';
  pattern = r'foo(?=bar)';  // Match 'foo' only if followed by 'bar'
  regExp = RegExp(pattern);
  Iterable<RegExpMatch> matches = regExp.allMatches(text);
  print('Conditional Matching: ${matches.map((m) => m.group(0)).join(", ")}');  // "foo"
}

