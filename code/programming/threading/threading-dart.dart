import 'dart:async';

void main() {
  // Improving performance by running tasks concurrently
  Future<int> computeFibonacci(int n) async {
    if (n == 0 || n == 1) {
      return n;
    }
    return await compute(computeFibonacci, n - 1) + await compute(computeFibonacci, n - 2);
  }

  // Handling multiple tasks simultaneously without blocking the main program
  Future<void> executeConcurrentTasks() async {
    await Future.wait([
      computeFibonacci(10),
      computeFibonacci(20),
      computeFibonacci(30),
    ]);
    print('All tasks completed');
  }

  // Updating UI elements in response to asynchronous events
  Future<void> updateUI() async {
    await Future.delayed(Duration(seconds: 2));
    print('UI elements updated');
  }

  // Processing large amounts of data in the background while the main thread remains responsive
  Future<void> processDataInBackground() async {
    await Future.delayed(Duration(seconds: 3));
    print('Data processing completed');
  }

  // Performing network requests without freezing the application's user interface
  Future<void> performNetworkRequest() async {
    await Future.delayed(Duration(seconds: 4));
    print('Network request completed');
  }

  // Call the functions
  executeConcurrentTasks();
  updateUI();
  processDataInBackground();
  performNetworkRequest();
}
