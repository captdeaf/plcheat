-- Lua code demonstrating threading and asynchronous execution

-- Improving performance by running tasks concurrently
function runConcurrently()
    local function task1()
        print("Task 1 started")
        for i = 1, 3 do
            print("Task 1 running " .. i)
            os.execute("sleep 1")  -- Simulate work
        end
        print("Task 1 completed")
    end

    local function task2()
        print("Task 2 started")
        for j = 1, 3 do
            print("Task 2 running " .. j)
            os.execute("sleep 1")  -- Simulate work
        end
        print("Task 2 completed")
    end

    -- Launch tasks concurrently
    local thread1 = coroutine.create(task1)
    local thread2 = coroutine.create(task2)

    coroutine.resume(thread1)  -- Start task 1
    coroutine.resume(thread2)  -- Start task 2
end

-- Handling multiple tasks simultaneously without blocking the main program
function handleTasksSimultaneously()
    print("Main program started")

    local function asyncTask()
        print("Async task started")
        for k = 1, 3 do
            print("Async task running " .. k)
            os.execute("sleep 1")  -- Simulate work
        end
        print("Async task completed")
    end

    -- Launch async task in a coroutine
    local thread = coroutine.create(asyncTask)
    coroutine.resume(thread)

    print("Main program continued")
end

-- Updating UI elements in response to asynchronous events
function updateUIAsync()
    function updateUITask()
        print("Updating UI task started")
        -- Update UI elements based on asynchronous events
        print("UI elements updated")
        print("Updating UI task completed")
    end

    -- Launch UI update task
    local thread = coroutine.create(updateUITask)
    coroutine.resume(thread)
end

-- Processing large amounts of data in the background while keeping UI responsive
function processLargeDataInBG()
    local data = {"data1", "data2", "data3"}

    local function processData()
        print("Processing data started")
        -- Process the data in the background
        for i, d in ipairs(data) do
            print("Processing data: " .. d)
            os.execute("sleep 1")  -- Simulate work
        end
        print("Processing data completed")
    end

    -- Launch data processing task
    local thread = coroutine.create(processData)
    coroutine.resume(thread)
end

-- Performing network requests without freezing the application's user interface
function performNetworkRequest()
    function networkRequest()
        print("Network request started")
        -- Perform network request operations
        print("Network request completed")
    end

    -- Launch network request in a coroutine
    local thread = coroutine.create(networkRequest)
    coroutine.resume(thread)
end

-- Run the examples
runConcurrently()
handleTasksSimultaneously()
updateUIAsync()
processLargeDataInBG()
performNetworkRequest()
