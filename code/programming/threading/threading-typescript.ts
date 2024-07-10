// Import necessary modules
import * as fetch from 'node-fetch';

// Improving performance by running tasks concurrently
function performConcurrentTasks() {
    const task1 = asyncTask1();
    const task2 = asyncTask2();
    
    return Promise.all([task1, task2]);
}

// Handling multiple tasks simultaneously without blocking the main program
async function handleMultipleTasks() {
    const result1 = await asyncTask1();
    const result2 = await asyncTask2();
    
    return { result1, result2 };
}

// Updating UI elements in response to asynchronous events
function updateUI() {
    asyncTask1().then((data) => {
        // Update UI with data
    });
}

// Processing large amounts of data in the background while the main thread remains responsive
function processDataInBackground() {
    // Start background thread or worker to process data
    // Main thread remains responsive
}

// Performing network requests without freezing the application's user interface
async function performNetworkRequest() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    return data;
}

async function asyncTask1() {
    // Simulate some asynchronous task
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task 1 completed');
        }, 2000);
    });
}

async function asyncTask2() {
    // Simulate another asynchronous task
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task 2 completed');
        }, 3000);
    });
}

// Call the functions
performConcurrentTasks().then((results) => {
    console.log(results);
});

handleMultipleTasks().then((results) => {
    console.log(results);
});

updateUI();

processDataInBackground();

performNetworkRequest().then((data) => {
    console.log(data);
});
