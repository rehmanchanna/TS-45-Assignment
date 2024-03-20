// Assignment 45 Questions Solution
// Task Number 16
//Part 1
var myGuest = ["Bashir", "Muzamil", "Wahab"];
var canNotAttend = "Bashir";
var newGuest = "Hamza";
myGuest[myGuest.indexOf(canNotAttend)] = newGuest;
console.log(myGuest);
myGuest.map(function (items) { return console.log("Dear ".concat(items, ", I found a bigger dinner table so I am invited more people.")); });
//Part 2
var firstGuest = "Noman";
myGuest.unshift(firstGuest);
console.log(myGuest);
//part 3
var middleGuest = "Shahzaman";
var middleIndex = myGuest.length / 2;
myGuest.splice(middleIndex, 0, middleGuest);
console.log(myGuest);
//part 4 
myGuest.push("Ali Nawaz");
console.log(myGuest);
//part 5.
myGuest.map(function (items) { return console.log("Dear ".concat(items, ", You are invited in the bigger dinner table.")); });
