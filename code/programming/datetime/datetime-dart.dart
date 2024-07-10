// Displaying the current date and time
void displayCurrentDateTime() {
  DateTime now = DateTime.now();
  print('Current date and time: $now');
}

// Calculating the difference between two dates
void calculateDateDifference() {
  DateTime date1 = DateTime(2022, 1, 1);
  DateTime date2 = DateTime(2023, 1, 1);
  Duration difference = date2.difference(date1);
  print('Difference between two dates: ${difference.inDays} days');
}

// Formatting dates and times for user-friendly display
void formatDatesAndTimes() {
  DateTime now = DateTime.now();
  print('Formatted date: ${now.day}-${now.month}-${now.year}');
  print('Formatted time: ${now.hour}:${now.minute}:${now.second}');
}

// Converting between different date and time formats
void convertDateFormats() {
  DateTime now = DateTime.now();
  print('ISO 8601 format: ${now.toIso8601String()}');
  print('Readable format: ${now.toString()}');
}

// Scheduling tasks or events based on specific dates and times
void scheduleEvents(DateTime eventDate) {
  // Implement your scheduling logic here
  print('Event scheduled for: $eventDate');
}

// Implementing countdown timers or timers for specific events
void countdownTimer(DateTime eventDate) {
  Duration timeLeft = eventDate.difference(DateTime.now());
  print('Time left until event: ${timeLeft.inHours} hours');
}

// Handling time zones and daylight saving time adjustments
void handleTimezones() {
  DateTime now = DateTime.now();
  print('Current time in UTC: ${now.toUtc()}');
}

// Finding the day of week or month for a given date
void findDayOfWeekOrMonth(DateTime date) {
  print('Day of week: ${date.weekday}');
  print('Month: ${date.month}');
}

// Working with timestamps for tracking when events occur
void trackEventTimestamp() {
  DateTime eventTime = DateTime.now();
  int timestamp = eventTime.millisecondsSinceEpoch; // Convert DateTime to timestamp
  print('Event timestamp: $timestamp');
}

void main() {
  displayCurrentDateTime();
  calculateDateDifference();
  formatDatesAndTimes();
  convertDateFormats();

  scheduleEvents(DateTime(2022, 12, 25, 18, 30));
  countdownTimer(DateTime(2022, 12, 31));
  handleTimezones();
  findDayOfWeekOrMonth(DateTime.now());
  trackEventTimestamp();
}
