#!/bin/bash

# Displaying the current date and time
current_date=$(date +"%Y-%m-%d")
current_time=$(date +"%H:%M:%S")
echo "Current Date: $current_date"
echo "Current Time: $current_time"

# Calculating the difference between two dates
date1="2022-10-10"
date2="2022-10-05"
diff=$(( ($(date -d "$date1" +%s) - $(date -d "$date2" +%s)) / (60*60*24) ))
echo "Difference between $date1 and $date2: $diff days"

# Formatting dates and times for user-friendly display
formatted_date=$(date +"%A, %B %d, %Y")
formatted_time=$(date +"%I:%M %p")
echo "Formatted Date: $formatted_date"
echo "Formatted Time: $formatted_time"

# Converting between different date and time formats
original_date="2022-12-25"
converted_date=$(date -d "$original_date" +"%d/%m/%Y")
echo "Converted Date: $converted_date"

# Scheduling tasks or events based on specific dates and times
event_date="2022-11-15 18:30:00"
echo "Task scheduled for: $event_date"

# Implementing countdown timers or timers for specific events
countdown_date=$(date -d "2023-01-01 00:00:00" +%s)
current_timestamp=$(date +%s)
countdown=$((countdown_date - current_timestamp))
echo "Countdown to 2023: $((countdown / 86400)) days"

# Handling time zones and daylight saving time adjustments
utc_time=$(date -u)
echo "UTC Time: $utc_time"

# Finding the day of week or month for a given date
day_of_week=$(date -d "2022-10-10" +"%A")
echo "Day of the Week: $day_of_week"

# Working with timestamps for tracking when events occur
event_timestamp=$(date -d "2022-10-10 15:30:00" +%s)
echo "Event Timestamp: $event_timestamp"
