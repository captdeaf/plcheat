import java.time.*
import java.time.format.DateTimeFormatter

fun main() {
    // Displaying the current date and time
    val currentDateTime = LocalDateTime.now()
    println("Current Date and Time: $currentDateTime")

    // Calculating the difference between two dates
    val date1 = LocalDate.of(2022, Month.JANUARY, 1)
    val date2 = LocalDate.now()
    val daysDifference = ChronoUnit.DAYS.between(date1, date2)
    println("Difference in days between $date1 and $date2: $daysDifference days")

    // Formatting dates and times for user-friendly display
    val dateToFormat = LocalDate.of(2022, Month.DECEMBER, 31)
    val formattedDate = dateToFormat.format(DateTimeFormatter.ofPattern("MM/dd/yyyy"))
    println("Formatted Date: $formattedDate")

    // Converting between different date and time formats
    val dateStr = "2022-06-30"
    val parsedDate = LocalDate.parse(dateStr, DateTimeFormatter.ISO_DATE)
    println("Parsed Date from String: $parsedDate")

    // Scheduling tasks or events based on specific dates and times
    val futureDateTime = LocalDateTime.of(2022, Month.AUGUST, 15, 10, 0)
    val eventScheduled = futureDateTime.isAfter(LocalDateTime.now())
    println("Is event scheduled for the future? $eventScheduled")

    // Implementing countdown timers or timers for specific events
    val eventDateTime = LocalDateTime.of(2023, Month.MARCH, 5, 18, 30)
    val timeLeft = Duration.between(LocalDateTime.now(), eventDateTime)
    println("Time left until the event: ${timeLeft.toDays()} days and ${timeLeft.toHoursPart()} hours")

    // Handling time zones and daylight saving time adjustments
    val newYorkZone = ZoneId.of("America/New_York")
    val newYorkDateTime = ZonedDateTime.now(newYorkZone)
    println("Current Date and Time in New York: $newYorkDateTime")

    // Finding the day of week or month for a given date
    val someDate = LocalDate.of(2022, Month.SEPTEMBER, 15)
    val dayOfWeek = someDate.dayOfWeek
    val month = someDate.month
    println("Day of Week for $someDate: $dayOfWeek, Month: $month")

    // Working with timestamps for tracking when events occur
    val eventTimestamp = Instant.now().epochSecond
    println("Event occurred at timestamp: $eventTimestamp seconds since epoch")
}
