use chrono::{DateTime, Utc, Local, NaiveDate, Duration, Datelike, Timelike};

fn main() {
    // Displaying the current date and time
    let current_utc_time: DateTime<Utc> = Utc::now();
    let current_local_time: DateTime<Local> = Local::now();

    println!("Current UTC time: {}", current_utc_time);
    println!("Current local time: {}", current_local_time);

    // Calculating the difference between two dates
    let start_date = NaiveDate::from_ymd(2022, 1, 1);
    let end_date = NaiveDate::from_ymd(2022, 12, 31);
    let days_difference = end_date.signed_duration_since(start_date).num_days();

    println!("Days between start and end date: {}", days_difference);

    // Formatting dates and times for user-friendly display
    let formatted_date = current_utc_time.format("%Y-%m-%d %H:%M:%S").to_string();
    println!("Formatted date and time: {}", formatted_date);

    // Converting between different date and time formats
    let naive_date = NaiveDate::parse_from_str("2022-12-31", "%Y-%m-%d").unwrap();
    let converted_date: DateTime<Utc> = DateTime::<Utc>::from_utc(naive_date.and_hms(0, 0, 0), Utc);

    println!("Converted date: {}", converted_date);

    // Scheduling tasks or events based on specific dates and times
    let scheduled_time = Local.ymd(2022, 9, 15).and_hms(12, 0, 0);
    println!("Scheduled time: {}", scheduled_time);

    // Implementing countdown timers or timers for specific events
    let event_time = Local.ymd(2023, 1, 1).and_hms(0, 0, 0);
    let duration_until_event = event_time.signed_duration_since(Local::now());
    println!("Time left until event: {}", duration_until_event);

    // Handling time zones and daylight saving time adjustments
    let paris_timezone = chrono::Utc.from_utc_datetime(&Local.ymd(2022, 12, 31).and_hms(15, 0, 0));
    let new_york_timezone = paris_timezone.with_timezone(&chrono::FixedOffset::east(5*3600));
    println!("New York time equivalent to Paris time: {}", new_york_timezone);

    // Finding the day of week or month for a given date
    let day_of_week = Local.ymd(2022, 12, 31).weekday();
    let month = Local.ymd(2022, 12, 31).month();
    println!("Day of week: {}, Month: {}", day_of_week, month);

    // Working with timestamps for tracking when events occur
    let timestamp = Local::now().timestamp();
    println!("Current timestamp: {}", timestamp);
}
