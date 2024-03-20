// Assignment 45 Questions Solution
// Task Number 16
//Part 1
let myGuest : string [] = ["Bashir", "Muzamil", "Wahab"];
let canNotAttend : string = "Bashir";
let newGuest : string = "Hamza";
myGuest [myGuest.indexOf(canNotAttend)]= newGuest;
console.log(myGuest);
myGuest.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people.`));

//Part 2
let firstGuest : string = "Noman";
myGuest.unshift(firstGuest);
console.log(myGuest);

//part 3
let middleGuest : string = "Shahzaman";
let middleIndex = myGuest.length/2;
myGuest.splice(middleIndex,0,middleGuest);
console.log(myGuest);

//part 4 
myGuest.push("Ali Nawaz");
console.log(myGuest);

//part 5.
myGuest.map((items) => console.log(`Dear ${items}, You are invited in the bigger dinner table.`));