# Example of threading and asynchronous execution in Ruby

require 'thread'

# Improving performance by running tasks concurrently
task1 = Thread.new do
  puts "Task 1: Started"
  sleep 2
  puts "Task 1: Completed"
end

task2 = Thread.new do
  puts "Task 2: Started"
  sleep 1
  puts "Task 2: Completed"
end

task1.join
task2.join

# Handling multiple tasks simultaneously without blocking the main program
mutex = Mutex.new
queue = Queue.new

producer = Thread.new do
  5.times do |i|
    sleep rand(0..2)
    mutex.synchronize do
      queue << "Task #{i}"
    end
  end
end

consumer = Thread.new do
  5.times do |i|
    data = nil
    mutex.synchronize do
      data = queue.pop
    end
    puts "Consumer received: #{data}"
  end
end

producer.join
consumer.join

# Updating UI elements in response to asynchronous events
def update_ui(value)
  Thread.new do
    sleep 1 # Simulating some asynchronous event
    puts "Updating UI with value: #{value}"
  end
end

update_ui("New data received")

# Processing large amounts of data in the background while the main thread remains responsive
data_processing = Thread.new do
  1000.times do |i|
    # Processing large amounts of data (simulated with sleep)
    sleep 0.001
  end
end

data_processing.join

# Performing network requests without freezing the application's user interface
require 'net/http'

Thread.new do
  uri = URI('https://jsonplaceholder.typicode.com/posts/1')
  response = Net::HTTP.get(uri)
  
  puts "Response from API: #{response}"
end

sleep 2 # Just to keep the main program running for a while
