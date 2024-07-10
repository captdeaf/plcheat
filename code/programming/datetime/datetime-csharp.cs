using System;

class Program
{
    static void Main()
    {
        // Displaying the current date and time
        DateTime currentDateTime = DateTime.Now;
        Console.WriteLine("Current Date and Time: " + currentDateTime);

        // Calculating the difference between two dates
        DateTime date1 = new DateTime(2022, 12, 25);
        DateTime date2 = new DateTime(2023, 1, 10);
        TimeSpan difference = date2 - date1;
        Console.WriteLine("Difference between two dates: " + difference.TotalDays + " days");

        // Formatting dates and times for user-friendly display
        string formattedDateTime = currentDateTime.ToString("dddd, MMMM dd, yyyy h:mm tt");
        Console.WriteLine("Formatted Date and Time: " + formattedDateTime);

        // Converting between different date and time formats
        string iso8601DateTime = currentDateTime.ToString("yyyy-MM-ddTHH:mm:ss.fffffffK");
        Console.WriteLine("ISO 8601 Date and Time: " + iso8601DateTime);

        // Scheduling tasks or events based on specific dates and times
        DateTime eventDateTime = new DateTime(2023, 6, 30, 14, 0, 0); // June 30, 2023, 2:00 PM
        Console.WriteLine("Event Scheduled on: " + eventDateTime);

        // Implementing countdown timers or timers for specific events
        TimeSpan timeUntilEvent = eventDateTime - DateTime.Now;
        Console.WriteLine("Time Until Event: " + timeUntilEvent);

        // Handling time zones and daylight saving time adjustments
        DateTime utcNow = DateTime.UtcNow;
        Console.WriteLine("UTC Date and Time: " + utcNow);

        // Finding the day of week or month for a given date
        DayOfWeek dayOfWeek = currentDateTime.DayOfWeek;
        Console.WriteLine("Day of Week: " + dayOfWeek);

        int month = currentDateTime.Month;
        Console.WriteLine("Current Month: " + month);

        // Working with timestamps for tracking when events occur
        long timestamp = currentDateTime.Ticks;
        Console.WriteLine("Timestamp: " + timestamp);

    }
}
