// Importing the 'http' module for creating a basic HTTP server
const http = require('http');

// Handling incoming HTTP requests
const server = http.createServer((req, res) => {
  if (req.url === '/async-task') {
    // Improving performance by running tasks concurrently
    setTimeout(() => {
      res.end('Async task completed');
    }, 1000);
  } else if (req.url === '/multi-task') {
    // Handling multiple tasks simultaneously without blocking the main program
    Promise.all([
      new Promise((resolve) => setTimeout(() => resolve('Task 1 done'), 2000)),
      new Promise((resolve) => setTimeout(() => resolve('Task 2 done'), 1500))
    ]).then((results) => {
      res.end(JSON.stringify(results));
    });
  } else if (req.url === '/update-ui') {
    // Updating UI elements in response to asynchronous events
    res.write('Updating UI...');

    setTimeout(() => {
      res.write('Update 25%...');
      setTimeout(() => {
        res.write('Update 50%...');
        setTimeout(() => {
          res.write('Update 75%...');
          setTimeout(() => {
            res.end('Update 100%');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  } else if (req.url === '/background-process') {
    // Processing large amounts of data in the background while the main thread remains responsive
    const data = [];
    for (let i = 0; i < 1000000; i++) {
      data.push(i);
    }

    // Perform some processing of the large data array asynchronously
    setTimeout(() => {
      res.end('Processed data in the background');
    }, 2000);
  } else if (req.url === '/network-request') {
    // Performing network requests without freezing the application's user interface
    const options = {
      hostname: 'api.example.com',
      path: '/data',
      method: 'GET'
    };

    const httpRequest = http.request(options, (networkRes) => {
      let data = '';

      networkRes.on('data', (chunk) => {
        data += chunk;
      });

      networkRes.on('end', () => {
        res.end(data);
      });
    });

    httpRequest.end();
  } else {
    res.end('Hello, send requests to /async-task, /multi-task, /update-ui, /background-process, or /network-request');
  }
});

// Server listening on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
