package main

import (
	"fmt"
	"time"
)

func performTask(taskID int) {
	// Simulating task execution
	time.Sleep(2 * time.Second)
	fmt.Printf("Task %d completed\n", taskID)
}

func main() {
	// Improving performance by running tasks concurrently
	for i := 1; i <= 5; i++ {
		go performTask(i)
	}

	// Handling multiple tasks simultaneously without blocking the main program
	for j := 6; j <= 10; j++ {
		go performTask(j)
	}

	// Updating UI elements in response to asynchronous events
	go func() {
		time.Sleep(3 * time.Second)
		fmt.Println("Updating UI elements")
	}()

	// Processing large amounts of data in the background while the main thread remains responsive
	go func() {
		time.Sleep(3 * time.Second)
		fmt.Println("Processing data in the background")
	}()

	// Performing network requests without freezing the application's user interface
	go func() {
		time.Sleep(5 * time.Second)
		fmt.Println("Performing network request")
	}()

	// Keeping the program running to observe the asynchronous tasks
	time.Sleep(10 * time.Second)
}
