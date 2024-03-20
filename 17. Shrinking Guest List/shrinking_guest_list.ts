// Assignment 45 Questions Solution
// Task Number 17
let guests: string[] =["Hamid", "Hyder", "Kamran", "Bilal", "Amjad"];
console.log("Sorry, the dinner table won't arrive in time, so I can only invite two people for dinner.")
//Removing guests until only two names remian.
while(guests.length > 2){
    const removeGuest= guests.pop(); // Remove the last 3 Guest names from the list.
    console.log(`Sorry! ${removeGuest}, I can't invite you to dinner.`)
};
// Printing invitations to the remaining two guests.

guests.forEach((guest) =>{
    console.log(`Dear ${guest}, You're still invited to dinner.`)
});
// removing the last two names from the list 
guests.splice(0, guests.length);
// Printing the final list to confirm it's empty 
console.log("Guest list:", guests);

