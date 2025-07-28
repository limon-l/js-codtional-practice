/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let ageOfPassanger = 68;

let student = false;

if (ageOfPassanger < 10) {
    console.log("Ticket is Free");
    
}

else if (ageOfPassanger>= 10 && ageOfPassanger < 60) {
    if (student) {
        console.log("Ticket Fare is: ", ticketPrice - ticketPrice * 50 / 100);
    }
    else {
        console.log("Ticket Fare is: ", ticketPrice);
    }
}

else if (ageOfPassanger >= 60) {
    console.log("Ticket Fare is: ", ticketPrice - ticketPrice * 15 / 100);
    
}
else {
        console.log("Ticket Fare is: ", ticketPrice);
    }