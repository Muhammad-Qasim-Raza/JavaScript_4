// 1. Declare and initialize an empty multidimensional array
var multiArr = [[], [], []]

// 2. Declare and initialize a multidimensional array  representing the following matrix:
var multiArr = [[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]]
document.write(multiArr[0] + "<br>" + multiArr[1] + "<br>" + multiArr[2] + "<br>")

//3 . Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++)
  document.write(i + "<br>")

// 4.  Write a program to print multiplication table of any  number using for loop. Table number & length should be  taken as an input from user.
var x = prompt("Enter a number to show its muliplication table:  ")
var y = prompt("Enter a number of length to show its muliplication table:  ")
document.write("Multiplication table of " + x + " Length " + y + " is " + "<br>")
for (var i = 1; i <= y; i++) {
  document.write(x + " * " + i + " = " + x * i + "<br>")
}

// 5. Write a program to print items of the following array  using for loop:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>")
}

// 6. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
console.log("a. Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
console.log("b. Reverse counting:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
console.log("c. Even:");
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
console.log("d. Odd:");
for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
console.log("e. Series:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}


// 7.  Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. 
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC bakery! What do you want, sir/ma'am?");

var found = false;

for (var i = 0; i < bakeryItems.length; i++) {
  if (userSearch.toLowerCase() === bakeryItems[i]) {
    document.write(userSearch + " is available at index " + i + " in our bakery");
    found = true;
    break;  // No need to continue searching if the item is found
  }
}

if (!found) {
  document.write("Sorry, " + userSearch + " is not available in our bakery.");
}

// 8. Write a program to identify the largest number in the  given array.
// Given array
var A = [24, 53, 78, 91, 12];
// Assume the first element is the largest
var largestNumber = A[0];
// Iterate through the array to find the largest number
for (var i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}
// Display the result
console.log("The largest number in the array is: " + largestNumber);


// // 9. . Write a program to identify the smallest number in the  given array.
// Given array
var A = [24, 53, 78, 91, 12];
// Assume the first element is the smallest
var smallestNumber = A[0];
// Iterate through the array to find the smallest number
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}
// Display the result
console.log("The smallest number in the array is: " + smallestNumber);


// 10.  Write a program to print multiples of 5 ranging 1 to 100. 
for (i = 1; i <= 20; i++)
  document.write(i * 5 + "<br>")