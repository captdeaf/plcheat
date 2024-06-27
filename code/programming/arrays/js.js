// Arrays in javascript are mutable and changeable. They cannot be limited to certain types.
//
// Initialization
var array = ["one", "two", "three"];

// Fetch elements
item = array[0];
item = array[1];

// Modify
array.push("four"); // adds "four" to the end.
array.pop(); // returns "four" and removes it.
array.shift(); // returns "one" and removes it.
array.unshift("one"); // puts "one" back at the start.

// Array length
var len = array.length;

// Iterator
for (var i = 0; i < len; i++) {
  var item = array[i];
}
