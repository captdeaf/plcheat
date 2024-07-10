const moment = require('moment');

// Displaying the current date and time
const currentDateAndTime = moment().format('LLLL');
console.log('Current Date and Time:', currentDateAndTime);

// Calculating the difference between two dates
const firstDate = moment('2022-01-01');
const secondDate = moment('2022-12-31');
const dateDifference = secondDate.diff(firstDate, 'days');
console.log('Difference in days between two dates:', dateDifference);

// Formatting dates and times for user-friendly display
const userFormattedDate = moment().format('DD/MM/YYYY');
console.log('User-friendly formatted date:', userFormattedDate);

// Converting between different date and time formats
const isoDateTime = '2023-06-15T13:30:00Z';
const convertedDateTime = moment(isoDateTime).format('MMMM Do, YYYY h:mm:ss a');
console.log('Converted Date and Time:', convertedDateTime);

// Scheduling tasks or events based on specific dates and times
const eventDate = moment('2022-09-15 10:00');
const currentDate = moment();
if (currentDate.isBefore(eventDate)) {
  console.log('Event scheduled for September 15, 2022.');
} else {
  console.log('Event has passed.');
}

// Implementing countdown timers or timers for specific events
const countdownToDate = moment('2023-01-01');
const countdownDuration = moment.duration(countdownToDate.diff(moment()));
console.log(`Countdown to ${countdownToDate.format('MMM DD, YYYY')}: ${countdownDuration.humanize()}`);

// Handling time zones and daylight saving time adjustments
const dateTimeInNewYork = moment().tz('America/New_York').format('LLLL');
console.log('Current Date and Time in New York:', dateTimeInNewYork);

// Finding the day of week or month for a given date
const dayOfWeek = moment().format('dddd');
console.log('Day of the week:', dayOfWeek);
const dayOfMonth = moment().format('MMMM Do');
console.log('Day of the month:', dayOfMonth);

// Working with timestamps for tracking when events occur
const eventTimestamp = moment('2022-06-01').unix();
console.log('Timestamp of the event:', eventTimestamp);
