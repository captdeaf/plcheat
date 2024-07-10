#include <iostream>
#include <chrono>
#include <ctime>
#include <iomanip>

int main() {
    // Displaying the current date and time
    auto now = std::chrono::system_clock::now();
    std::time_t current_time = std::chrono::system_clock::to_time_t(now);
    std::cout << "Current Date and Time: " << std::ctime(&current_time);

    // Calculating the difference between two dates
    std::tm date1 = {0, 0, 0, 1, 1, 120}; // Date: Jan 1, 2020
    std::tm date2 = {0, 0, 0, 1, 1, 121}; // Date: Jan 1, 2021
    std::time_t time1 = std::mktime(&date1);
    std::time_t time2 = std::mktime(&date2);
    double difference_in_seconds = std::difftime(time2, time1);
    std::cout << "Difference in seconds between two dates: " << difference_in_seconds << " seconds\n";

    // Formatting dates and times for user-friendly display
    std::tm user_date = {0, 0, 0, 1, 0, 121}; // Date: Jan 1, 2021
    std::cout << "Formatted Date: " << std::put_time(&user_date, "%d-%m-%Y") << "\n";

    // Converting between different date and time formats
    std::string date_str = "2021-04-15 12:30:00";
    std::tm converted_date = {};
    std::istringstream ss(date_str);
    ss >> std::get_time(&converted_date, "%Y-%m-%d %H:%M:%S");
    std::cout << "Converted Date: " << std::put_time(&converted_date, "%d-%m-%Y %H:%M:%S") << "\n";

    // Scheduling tasks or events based on specific dates and times
    // Implementation for task scheduling can vary based on requirements

    // Implementing countdown timers or timers for specific events
    // Implementation for countdown timers depends on specific use case

    // Handling time zones and daylight saving time adjustments
    // Time zone handling involves system-specific API calls

    // Finding the day of week or month for a given date
    std::tm day_of_week = {0, 0, 0, 23, 7, 121}; // Date: July 23, 2021
    std::mktime(&day_of_week);
    std::cout << "Day of week for the given date: " << day_of_week.tm_wday << "\n";

    // Working with timestamps for tracking when events occur
    std::chrono::steady_clock::time_point start_time = std::chrono::steady_clock::now();
    // Perform some task here
    std::chrono::steady_clock::time_point end_time = std::chrono::steady_clock::now();
    std::chrono::duration<double> elapsed_seconds = end_time - start_time;
    std::cout << "Time taken for the task: " << elapsed_seconds.count() << " seconds\n";

    return 0;
}
