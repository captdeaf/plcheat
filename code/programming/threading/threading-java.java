import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadingExample {

    public static void main(String[] args) {
        
        // Example 1: Improving performance by running tasks concurrently
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Submitting tasks to the executor
        for (int i = 0; i < 5; i++) {
            executor.submit(() -> {
                System.out.println("Task running concurrently - " + Thread.currentThread().getName());
            });
        }
        
        // Example 2: Handling multiple tasks simultaneously without blocking the main program
        executor.submit(() -> {
            System.out.println("Multiple tasks running simultaneously - " + Thread.currentThread().getName());
        });
        
        // Example 3: Updating UI elements in response to asynchronous events
        executor.submit(() -> {
            System.out.println("Updating UI in response to event - " + Thread.currentThread().getName());
        });
        
        // Example 4: Processing large amounts of data in the background
        executor.submit(() -> {
            for (int i = 0; i < 1000000; i++) {
                // Simulating data processing
            }
            System.out.println("Data processing completed in background - " + Thread.currentThread().getName());
        });

        // Example 5: Performing network requests without freezing UI
        executor.submit(() -> {
            System.out.println("Making network request - " + Thread.currentThread().getName());
        });
        
        executor.shutdown();
    }

}
