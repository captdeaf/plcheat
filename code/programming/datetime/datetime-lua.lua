[
  "-- Displaying the current date and time",
  "local currentDateTime = os.date('%c')",
  
  "-- Calculating the difference between two dates",
  "local date1 = os.time({year=2022, month=4, day=1})",
  "local date2 = os.time({year=2022, month=4, day=10})",
  "local differenceInDays = math.floor((date2 - date1) / (24 * 60 * 60))",

  "-- Formatting dates and times for user-friendly display",
  "local formattedDate = os.date('%A, %B %d, %Y')",

  "-- Converting between different date and time formats",
  "local customFormat = os.date('%Y-%m-%d %H:%M:%S')",
  
  "-- Scheduling tasks or events based on specific dates and times",
  "-- Implementing countdown timers or timers for specific events",
  "-- Handling time zones and daylight saving time adjustments",
  "-- Finding the day of week or month for a given date",
  "-- Working with timestamps for tracking when events occur"
]