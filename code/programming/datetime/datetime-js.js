// Displaying the current date and time
const currentDate = new Date();
console.log("Current Date and Time: " + currentDate);

// Calculating the difference between two dates
const date1 = new Date("2022-12-31");
const date2 = new Date("2022-01-01");
const differenceInDays = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log("Difference between dates: " + differenceInDays + " days");

// Formatting dates and times for user-friendly display
const formattedDate = currentDate.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
console.log("Formatted Date: " + formattedDate);

// Converting between different date and time formats
const isoDateString = currentDate.toISOString();
console.log("ISO Date Format: " + isoDateString);

// Scheduling tasks or events based on specific dates and times
const eventDate = new Date("2023-10-15 09:00:00");
const currentTime = new Date();
if (eventDate > currentTime) {
  console.log("Event scheduled for: " + eventDate);
}

// Implementing countdown timers or timers for specific events
const countdownDate = new Date("2023-12-31");
const timeLeft = countdownDate - currentDate;
console.log("Time left until countdown date: " + (timeLeft / (1000 * 60 * 60 * 24)) + " days");

// Handling time zones and daylight saving time adjustments
const timeInNewYork = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
console.log("Current Time in New York: " + timeInNewYork);

// Finding the day of week or month for a given date
const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
console.log("Day of the Week: " + dayOfWeek);

// Working with timestamps for tracking when events occur
const eventTimestamp = eventDate.getTime();
console.log("Event Timestamp: " + eventTimestamp);
