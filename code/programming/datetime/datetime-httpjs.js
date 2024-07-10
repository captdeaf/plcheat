// Displaying the current date and time
const currentDateTime = new Date();
console.log(currentDateTime);

// Calculating the difference between two dates
const date1 = new Date('2021-12-31');
const date2 = new Date();
const differenceInMilliseconds = Math.abs(date2 - date1);
const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);
console.log(differenceInDays);

// Formatting dates and times for user-friendly display
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
const formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);
console.log(formattedDateTime);

// Converting between different date and time formats
const isoString = currentDateTime.toISOString();
console.log(isoString);

// Scheduling tasks or events based on specific dates and times
const scheduledDate = new Date('2022-03-15T12:00:00');
const currentTime = new Date();

if (scheduledDate > currentTime) {
  console.log('Event scheduled in the future');
} else {
  console.log('Event has passed');
}

// Implementing countdown timers or timers for specific events
const eventDate = new Date('2022-12-25T00:00:00');
const timeRemaining = eventDate - currentTime;
const countdownTimer = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
console.log(countdownTimer);

// Handling time zones and daylight saving time adjustments
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timezone);

// Finding the day of week or month for a given date
const dayOfWeek = currentDateTime.toLocaleDateString('en-US', { weekday: 'long' });
const monthOfYear = currentDateTime.toLocaleDateString('en-US', { month: 'long' });
console.log(dayOfWeek);
console.log(monthOfYear);

// Working with timestamps for tracking when events occur
const timestamp = currentDateTime.getTime();
console.log(timestamp);
