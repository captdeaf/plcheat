# Displaying the current date and time
current_time = Time.now
puts "Current date and time: #{current_time}"

# Calculating the difference between two dates
date1 = Time.new(2021, 7, 1)
date2 = Time.new(2021, 7, 15)
difference = (date2 - date1) / (60 * 60 * 24)
puts "Difference between the two dates: #{difference} days"

# Formatting dates and times for user-friendly display
formatted_time = current_time.strftime("%A, %B %d, %Y %H:%M:%S")
puts "Formatted date and time: #{formatted_time}"

# Converting between different date and time formats
date_string = "2021-07-20 12:00:00"
converted_time = DateTime.strptime(date_string, "%Y-%m-%d %H:%M:%S")
puts "Converted time: #{converted_time}"

# Scheduling tasks or events based on specific dates and times
upcoming_event = Time.new(2022, 1, 1, 10, 0, 0)
puts "Upcoming event scheduled for: #{upcoming_event}"

# Implementing countdown timers or timers for specific events
remaining_time = (upcoming_event - current_time).to_i
puts "Time remaining until the event: #{remaining_time} seconds"

# Handling time zones and daylight saving time adjustments
require 'tzinfo'
time_zone = TZInfo::Timezone.get('America/New_York')
local_time = time_zone.utc_to_local(current_time)
puts "Current time in New York: #{local_time}"

# Finding the day of week or month for a given date
day_of_week = current_time.strftime("%A")
month = current_time.strftime("%B")
puts "Day of the week: #{day_of_week}, Month: #{month}"

# Working with timestamps for tracking when events occur
event_timestamps = [Time.new(2022, 1, 1), Time.new(2022, 2, 1), Time.new(2022, 3, 1)]
puts "Event timestamps: #{event_timestamps}"
