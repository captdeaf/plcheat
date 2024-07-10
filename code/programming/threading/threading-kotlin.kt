import kotlinx.coroutines.*

fun main() {
    // Improving performance by running tasks concurrently
    runBlocking {
        val job1 = launch {
            repeat(3) {
                println("Task 1 is running")
                delay(1000)
            }
        }
        val job2 = launch {
            repeat(3) {
                println("Task 2 is running")
                delay(1500)
            }
        }
        job1.join()
        job2.join()
    }

    // Handling multiple tasks simultaneously without blocking the main program
    runBlocking {
        val deferred1 = async {
            delay(1000)
            "Task 1 is done"
        }
        val deferred2 = async {
            delay(1500)
            "Task 2 is done"
        }
        println(deferred1.await())
        println(deferred2.await())
    }

    // Updating UI elements in response to asynchronous events
    fun updateUI(message: String) {
        println("UI Updated: $message")
    }
    runBlocking {
        launch {
            delay(2000)
            updateUI("Data loaded successfully")
        }
    }

    // Processing large amounts of data in the background while the main thread remains responsive
    runBlocking {
        launch {
            repeat(5) {
                println("Processing data chunk $it")
                delay(1000)
            }
        }
    }

    // Performing network requests without freezing the application's user interface
    suspend fun fetchData(): String {
        delay(2000) // Simulating network request delay
        return "Data fetched successfully"
    }

    runBlocking {
        launch {
            val data = fetchData()
            println("Network Request Result: $data")
        }
    }
}

