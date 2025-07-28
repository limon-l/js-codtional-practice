/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let numOwn = 85;
let numFriend = 78;

if (numOwn > 80) {
    if (numFriend > 80) {
        console.log("GO For a lunch");
    }
    else if (numFriend >= 60 && numFriend<80) {
        console.log("Good Luck Next Time!");
    }
    else if (numFriend >= 40 && numFriend<60) {
        console.log("keep your friend's message unseen.");
    }
    else {
        console.log("Block Your Friend");
    }
}
else {
    console.log("go to home and sleep and act sad");
    
}