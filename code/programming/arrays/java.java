// Java has multiple types of arrays:
//
// Type[] arrays (such as String[] and Int[]) - once initalized can never have
// their sizes changed, but its contents can be changed.
//
// Initialization: two options
String[] array = new String[5]; // 5 null elements.
String[] array = {"one", "two", "three"};

// Fetch values
String one = array[0];

// Modification: You can only replace elements. Element count may not change.
array[0] = "one";
array[1] = "two"; // ... etc

// Length
int len = array.length;

// Iteration
for (String item : array) {
  // item
}

// Commonly used when you need a dynamic array is the class ArrayList
// (java.util.ArrayList), which can be an array of ANY value, including none.
// It can be dynamically changed. You can also create one limited to specific types
// with ArrayList<String> as its type.
//
// Initialization: type limited to String
ArrayList arraylist = new ArrayList<String>();

// Add values
arraylist.add("one");
arraylist.add("two"); // etc
arraylist.addall(enumerator); // add another array, arraylist or multiple values.

// Fetch values
arraylist.get(0); // returns "one"

// Modify
arraylist.remove(0); // removes "one" and returns it.
arraylist.remove("two"); // removes the first "two" and returns its index (0, in this case)
arraylist.removeAll("one"); // removes all "two"s and returns true if any are removed.
arraylist.clear(); // resets to size 0 array.

// Length

int len = arraylist.size();

// Iterate
for (String item : arraylist) {
  // item
}
