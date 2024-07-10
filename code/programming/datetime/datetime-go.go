package main

import (
	"fmt"
	"time"
)

func main() {
	// Displaying the current date and time
	currentTime := time.Now()
	fmt.Println("Current date and time:", currentTime)

	// Calculating the difference between two dates
	date1, _ := time.Parse("2006-01-02", "2022-01-01")
	date2, _ := time.Parse("2006-01-02", "2022-06-01")
	difference := date2.Sub(date1)
	fmt.Println("Difference between two dates:", difference)

	// Formatting dates and times for user-friendly display
	formattedTime := currentTime.Format("Monday, Jan 2, 2006 15:04:05")
	fmt.Println("Formatted time:", formattedTime)

	// Converting between different date and time formats
	parsedTime, _ := time.Parse("01/02/2006", "12/25/2022")
	fmt.Println("Parsed time in another format:", parsedTime)

	// Scheduling tasks or events based on specific dates and times
	deadline := time.Date(2023, time.January, 1, 0, 0, 0, 0, time.UTC)
	fmt.Println("Task deadline:", deadline)

	// Implementing countdown timers or timers for specific events
	eventTime := time.Date(2022, time.December, 25, 0, 0, 0, 0, time.UTC)
	durationUntilEvent := eventTime.Sub(currentTime)
	fmt.Println("Time until event:", durationUntilEvent)

	// Handling time zones and daylight saving time adjustments
	location, _ := time.LoadLocation("America/New_York")
	newYorkTime := currentTime.In(location)
	fmt.Println("Current time in New York:", newYorkTime)

	// Finding the day of week or month for a given date
	dayOfWeek := date1.Weekday()
	month := date1.Month()
	fmt.Println("Day of week for date1:", dayOfWeek)
	fmt.Println("Month of date1:", month)

	// Working with timestamps for tracking when events occur
	eventTimestamp := eventTime.Unix()
	fmt.Println("Timestamp for eventTime:", eventTimestamp)
}
