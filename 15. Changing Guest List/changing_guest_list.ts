// Assignment 45 Questions Solution
// Task Number 15
let myGuest : string [] = ["Bashir", "Muzamil", "Amanullah"]
let canNotAttend: string = "Amanullah";
console.log(canNotAttend +" "+"Can not attend the Dinner.");
let newGuest : string = "Wahab";
myGuest[myGuest.indexOf(canNotAttend)] = newGuest;
console.log(myGuest);
myGuest.map((items) => console.log(`Dear ${items}, You are invited to the dinner.`));