# Displaying the current date and time
Get-Date

# Calculating the difference between two dates
$date1 = Get-Date
$date2 = Get-Date
$datediff = New-TimeSpan -Start $date1 -End $date2
$datediff.TotalDays

# Formatting dates and times for user-friendly display
$customFormat = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$customFormat

# Converting between different date and time formats
$dateString = "2022-06-01"
$dateObject = [DateTime]::ParseExact($dateString, "yyyy-MM-dd", $null)
$dateObject

# Scheduling tasks or events based on specific dates and times
Register-ScheduledJob -Name "MyScheduledJob" -ScriptBlock { Write-Host "Scheduled task executed" } -Trigger (New-JobTrigger -Once -At $(Get-Date).AddMinutes(1))

# Implementing countdown timers or timers for specific events
Start-Sleep -Seconds 10
Write-Host "Timer finished!"

# Handling time zones and daylight saving time adjustments
$currentTime = Get-Date
$currentTime.ToUniversalTime()

# Finding the day of week or month for a given date
$date = Get-Date
$dayOfWeek = $date.DayOfWeek
$month = $date.Month
$dayOfWeek
$month

# Working with timestamps for tracking when events occur
$startTimestamp = Get-Date -UFormat "%s"
Start-Sleep -Seconds 5
$endTimestamp = Get-Date -UFormat "%s"
$elapsedTime = $endTimestamp - $startTimestamp
$elapsedTime
