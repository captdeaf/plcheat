// Displaying the current date and time
const currentDateTime: Date = new Date();
console.log(`Current Date and Time: ${currentDateTime}`);

// Calculating the difference between two dates
const date1: Date = new Date('2022-01-01');
const date2: Date = new Date('2022-12-31');
const differenceInMilliseconds: number = date2.getTime() - date1.getTime();
const differenceInDays: number = differenceInMilliseconds / (1000 * 3600 * 24);
console.log(`Difference between two dates: ${differenceInDays} days`);

// Formatting dates and times for user-friendly display
const formattedDate: string = currentDateTime.toLocaleDateString('en-US');
const formattedTime: string = currentDateTime.toLocaleTimeString('en-US');
console.log(`Formatted Date: ${formattedDate}`);
console.log(`Formatted Time: ${formattedTime}`);

// Converting between different date and time formats
const isoString: string = currentDateTime.toISOString();
console.log(`ISO String: ${isoString}`);

// Scheduling tasks or events based on specific dates and times
const eventDateTime: Date = new Date('2022-09-15T12:00:00');
const now: number = Date.now();
const timeUntilEvent: number = eventDateTime.getTime() - now;
setTimeout(() => {
    console.log('Event is happening now!');
}, timeUntilEvent);

// Implementing countdown timers or timers for specific events
const countdownDate: Date = new Date('2023-01-01T00:00:00');
const countdownTimer = setInterval(() => {
    const currentTime: number = Date.now();
    const timeRemaining: number = countdownDate.getTime() - currentTime;
    console.log(`Time remaining until countdown: ${timeRemaining} milliseconds`);
}, 1000); // Update every second

// Handling time zones and daylight saving time adjustments
const dateWithTimeZone: Date = new Date('2022-06-21T12:00:00-07:00');
console.log(`Date in specific time zone: ${dateWithTimeZone}`);

// Finding the day of week or month for a given date
const dayOfWeek: number = currentDateTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
const month: number = currentDateTime.getMonth(); // 0 = January, 1 = February, ..., 11 = December
console.log(`Day of Week: ${dayOfWeek}, Month: ${month}`);

// Working with timestamps for tracking when events occur
const timestamp: number = currentDateTime.getTime();
console.log(`Timestamp for current date and time: ${timestamp}`);
