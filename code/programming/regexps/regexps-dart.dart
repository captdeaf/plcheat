void main() {
  // Searching for specific patterns in text data
  RegExp pattern1 = RegExp(r'\b\d{3}-\d{2}-\d{4}\b');
  String text1 = 'Social Security number: 123-45-6789';
  print(pattern1.hasMatch(text1)); // true

  // Validating input forms (such as emails, phone numbers, etc.)
  RegExp emailPattern = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
  String email = 'test@example.com';
  print(emailPattern.hasMatch(email)); // true

  // Data scraping
  RegExp scrapePattern = RegExp(r'<h1>(.*?)<\/h1>');
  String html = '<h1>Welcome</h1>';
  print(scrapePattern.firstMatch(html)?.group(1)); // Welcome

  // Parsing and extracting information from structured data
  RegExp dataPattern = RegExp(r'(\d{2})[\/\-](\d{2})[\/\-](\d{4})');
  String date = '10/25/2022';
  var match = dataPattern.firstMatch(date);
  print('${match?.group(1)}/${match?.group(2)}/${match?.group(3)}'); // 10/25/2022

  // Other examples can be implemented in a similar manner
}
