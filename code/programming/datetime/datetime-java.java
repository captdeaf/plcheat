import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.Duration;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;

public class DateTimeExamples {
    public static void main(String[] args) {
        // Displaying the current date and time
        LocalDate currentDate = LocalDate.now();
        LocalTime currentTime = LocalTime.now();
        System.out.println("Current Date: " + currentDate);
        System.out.println("Current Time: " + currentTime);
        
        // Calculating the difference between two dates
        LocalDate date1 = LocalDate.of(2022, 12, 25);
        LocalDate date2 = LocalDate.now();
        long daysDifference = ChronoUnit.DAYS.between(date2, date1);
        System.out.println("Days until Christmas: " + daysDifference);
        
        // Formatting dates and times for user-friendly display
        LocalDateTime dateTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = dateTime.format(formatter);
        System.out.println("Formatted Date and Time: " + formattedDateTime);
        
        // Converting between different date and time formats
        String dateStr = "2021-09-15";
        LocalDate parsedDate = LocalDate.parse(dateStr);
        System.out.println("Parsed Date: " + parsedDate);
        
        // Scheduling tasks or events based on specific dates and times
        LocalDateTime eventDateTime = LocalDateTime.of(2022, 8, 10, 15, 30);
        if (LocalDateTime.now().isAfter(eventDateTime)) {
            System.out.println("Event has passed");
        } else {
            System.out.println("Event is scheduled for: " + eventDateTime);
        }
        
        // Implementing countdown timers or timers for specific events
        LocalDateTime countdownEnd = LocalDateTime.of(2022, 11, 1, 12, 0);
        Duration timeUntilEnd = Duration.between(LocalDateTime.now(), countdownEnd);
        long hours = timeUntilEnd.toHours();
        long minutes = timeUntilEnd.toMinutes() % 60;
        System.out.println("Time until the end: " + hours + " hours and " + minutes + " minutes");
        
        // Handling time zones and daylight saving time adjustments
        LocalDateTime localDateTime = LocalDateTime.now();
        ZoneId zoneId = ZoneId.of("America/New_York");
        ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, zoneId);
        System.out.println("New York Time: " + zonedDateTime);
        
        // Finding the day of the week for a given date
        LocalDate someDate = LocalDate.of(2022, 5, 20);
        System.out.println("Day of the week: " + someDate.getDayOfWeek());
        
        // Working with timestamps for tracking when events occur
        long timestamp = System.currentTimeMillis();
        System.out.println("Timestamp in milliseconds: " + timestamp);
    }
}
