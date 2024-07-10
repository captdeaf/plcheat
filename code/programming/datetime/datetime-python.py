# Importing necessary libraries for handling dates and times
import datetime
import pytz

# Displaying the current date and time
current_datetime = datetime.datetime.now()
print("Current date and time:", current_datetime)

# Calculating the difference between two dates
date1 = datetime.datetime(2022, 5, 1)
date2 = datetime.datetime(2022, 5, 15)
date_diff = date2 - date1
print("Difference between two dates:", date_diff)

# Formatting dates and times for user-friendly display
formatted_datetime = current_datetime.strftime("%Y-%m-%d %H:%M:%S")
print("Formatted date and time:", formatted_datetime)

# Converting between different date and time formats
date_str = "2022-12-31 23:59:59"
converted_datetime = datetime.datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
print("Converted date string to datetime object:", converted_datetime)

# Scheduling tasks or events based on specific dates and times
meeting_date = datetime.datetime(2023, 1, 10, 14, 0)
reminder = meeting_date - datetime.timedelta(days=1)
print("Reminder set for:", reminder)

# Implementing countdown timers or timers for specific events
start_time = datetime.datetime.now()
end_time = start_time + datetime.timedelta(minutes=30)
while datetime.datetime.now() < end_time:
    remaining_time = end_time - datetime.datetime.now()
    print("Time remaining:", remaining_time, end="\r")

print("\nCountdown timer completed!")

# Handling time zones and daylight saving time adjustments
utc_dt = datetime.datetime.now(pytz.utc)
pst_tz = pytz.timezone('US/Pacific')
pst_dt = pst_tz.normalize(utc_dt.astimezone(pst_tz))
print("Current time in PST:", pst_dt)

# Finding the day of week or month for a given date
given_date = datetime.date(2022, 7, 15)
day_of_week = given_date.strftime('%A')
month_name = given_date.strftime('%B')
print("Day of week for the given date:", day_of_week)
print("Month name for the given date:", month_name)

# Working with timestamps for tracking when events occur
timestamp = datetime.datetime.now().timestamp()
print("Timestamp for current time:", timestamp)
