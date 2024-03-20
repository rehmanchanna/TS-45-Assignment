// Assignment 45 Questions Solution
// Task Number 15
var myGuest = ["Bashir", "Muzamil", "Amanullah"];
var canNotAttend = "Amanullah";
console.log(canNotAttend + " " + "Can not attend the Dinner.");
var newGuest = "Wahab";
myGuest[myGuest.indexOf(canNotAttend)] = newGuest;
console.log(myGuest);
myGuest.map(function (items) { return console.log("Dear ".concat(items, ", You are invited to the dinner.")); });
