use std::thread;
use std::sync::{Arc, Mutex};
use std::time::Duration;

fn main() {
    // Improving performance by running tasks concurrently
    let handle1 = thread::spawn(|| {
        for i in 1..=5 {
            println!("Task 1: {}", i);
            thread::sleep(Duration::from_millis(500));
        }
    });

    let handle2 = thread::spawn(|| {
        for i in 1..=5 {
            println!("Task 2: {}", i);
            thread::sleep(Duration::from_millis(1000));
        }
    });

    handle1.join().unwrap();
    handle2.join().unwrap();

    // Handling multiple tasks simultaneously without blocking the main program
    let array = Arc::new(Mutex::new(vec![1, 2, 3]));

    let handle3 = {
        let array = Arc::clone(&array);
        thread::spawn(move || {
            let mut array = array.lock().unwrap();
            array.push(4);
        })
    };

    let handle4 = {
        let array = Arc::clone(&array);
        thread::spawn(move || {
            let array = array.lock().unwrap();
            println!("Array: {:?}", *array);
        })
    };

    handle3.join().unwrap();
    handle4.join().unwrap();

    // Updating UI elements in response to asynchronous events
    fn update_ui(message: &str) {
        println!("Updating UI: {}", message);
    }

    let event_handler = thread::spawn(|| {
        update_ui("New message received");
    });

    event_handler.join().unwrap();

    // Processing large amounts of data in the background while the main thread remains responsive
    thread::spawn(|| {
        let data = vec![1, 2, 3, 4, 5];
        let sum: i32 = data.iter().sum();
        println!("Sum of data: {}", sum);
    }).join().unwrap();

    // Performing network requests without freezing the application's user interface
    let request_handler = thread::spawn(|| {
        // Simulating a network request delay
        thread::sleep(Duration::from_secs(2));
        println!("Network request complete");
    });

    request_handler.join().unwrap();
}
