// Import the necessary modules
const { Worker, isMainThread, parentPort } = require('worker_threads');
const axios = require('axios');
const express = require('express');

// Create an Express server
const app = express();

// Route for handling asynchronous processing of data in the background while keeping the main thread responsive
app.get('/process-data', async (req, res) => {
  // Create a Worker thread to process the large data in the background
  const worker = new Worker(`
    const { parentPort } = require('worker_threads');
    
    // Simulating processing large data asynchronously
    setTimeout(() => {
      parentPort.postMessage('Data processing completed');
    }, 5000);
  `, { eval: true });
  
  worker.on('message', (message) => {
    // Once processing is completed, send a response back to the user
    res.json({ message: message });
  });
});

// Route for making a network request asynchronously without blocking the UI
app.get('/make-request', async (req, res) => {
  try {
    // Make a network request to a sample API using Axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    // Send the response back to the user
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while making the request' });
  }
});

// Start the Express server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
