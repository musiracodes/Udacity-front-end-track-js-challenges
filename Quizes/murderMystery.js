/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife", 
    solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison", 
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick", 
    solved = true;
} else {
    weapon = "trophy", 
    solved = true, 
    suspect === "Ms. Van Cleve";
}

if (solved) {
	console.log(suspect+' did it in the '+room+' with the '+weapon+'!');
}
