<?php

// Displaying the current date and time
$currentDateTime = date("Y-m-d H:i:s");
echo "Current Date and Time: " . $currentDateTime . "\n";

// Calculating the difference between two dates
$dateStart = new DateTime("2022-01-01");
$dateEnd = new DateTime("2023-01-01");
$interval = $dateStart->diff($dateEnd);
echo "Difference in Dates: " . $interval->format('%R%a days') . "\n";

// Formatting dates and times for user-friendly display
$rawDate = "2022-11-20";
$userFriendlyDate = date("F j, Y", strtotime($rawDate));
echo "User-Friendly Date: " . $userFriendlyDate . "\n";

// Converting between different date and time formats
$timestamp = strtotime("2023-12-31");
$newDateFormat = date("d/m/Y", $timestamp);
echo "New Date Format: " . $newDateFormat . "\n";

// Scheduling tasks or events based on specific dates and times
$taskDate = new DateTime("next Monday");
echo "Task Scheduled for: " . $taskDate->format("l, F j, Y") . "\n";

// Implementing countdown timers or timers for specific events
$eventDate = new DateTime("2022-12-25");
$now = new DateTime();
$countdown = $now->diff($eventDate);
echo "Countdown to Christmas: " . $countdown->format('%a days') . "\n";

// Handling time zones and daylight saving time adjustments
$timezone = new DateTimeZone('America/New_York');
$timeInNY = new DateTime('now', $timezone);
echo "Current time in New York: " . $timeInNY->format('H:i:s') . "\n";

// Finding the day of week or month for a given date
$dayOfWeek = date("l", strtotime("2022-10-15"));
echo "Day of Week: " . $dayOfWeek . "\n";

// Working with timestamps for tracking when events occur
$eventTimestamp = time();
echo "Event occurred at: " . date("Y-m-d H:i:s", $eventTimestamp) . "\n";

?>
