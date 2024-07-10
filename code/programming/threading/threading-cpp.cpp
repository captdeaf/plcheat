#include <iostream>
#include <thread>
#include <chrono>

// Function to simulate performing a task
void performTask(int taskID) {
    // Simulating task execution
    std::this_thread::sleep_for(std::chrono::seconds(2));
    std::cout << "Task " << taskID << " completed!" << std::endl;
}

int main() {
    // Example: Improving performance by running tasks concurrently
    // Launching multiple threads to perform tasks concurrently
    std::thread task1(performTask, 1);
    std::thread task2(performTask, 2);

    // Waiting for the tasks to finish
    task1.join();
    task2.join();

    // Example: Handling multiple tasks simultaneously without blocking the main program
    // These tasks are independent and run concurrently

    // Example: Updating UI elements in response to asynchronous events
    // In a GUI application, you can use asynchronous tasks to update elements

    // Example: Processing large amounts of data in the background while the main thread remains responsive
    // Offloading data processing to separate threads to keep the main thread responsive

    // Example: Performing network requests without freezing the application's user interface
    // Running network requests on separate threads to prevent UI freezing

    return 0;
}
