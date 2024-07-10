// Improving performance by running tasks concurrently
function task1() {
  console.log("Task 1 started");
  setTimeout(() => {
    console.log("Task 1 completed");
  }, 2000);
}

function task2() {
  console.log("Task 2 started");
  setTimeout(() => {
    console.log("Task 2 completed");
  }, 1500);
}

// Handling multiple tasks simultaneously without blocking the main program
task1();
task2();

// Updating UI elements in response to asynchronous events
function updateUI() {
  console.log("Updating UI...");
}

setTimeout(updateUI, 1000);

// Processing large amounts of data in the background while the main thread remains responsive
const largeData = Array.from({ length: 1000000 }, (_, index) => index);

function processData(data) {
  console.log("Processing data...");
  // Perform data processing
}

setTimeout(() => {
  processData(largeData);
}, 3000);

// Performing network requests without freezing the application's user interface
function fetchData() {
  console.log("Fetching data...");
  // Make an async network request
  // For example using fetch API or Axios library
}

setTimeout(fetchData, 5000);
