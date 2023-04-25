let amount = prompt("How many programmers are there on your team?");
let totalProgrammers = [];
for (i = 0; i < amount; i++) {
	totalProgrammers[i] = [prompt("Programmer's ID " + (i+1)),0];
}
const meetingAttandance = (companyID,p)=>{
	let attend = prompt(companyID);
	if (attend == "p" || attend == "P") {
	    totalProgrammers[p][1]++;
	}
}
for (i = 0; i < 10; i++) {
	for (programmer in totalProgrammers) {
	meetingAttandance(totalProgrammers[programmer][0],programmer);
	}
}
for (programmer in totalProgrammers) {
	let total = `<b style='font-size: 23px; display: flex'>${totalProgrammers[programmer][0]}:</b><br>
    Attandance: <b>${totalProgrammers[programmer][1]}</b> <br>
    Absence: <b>${10 - totalProgrammers[programmer][1]} </b><br>`;
	if (10 - totalProgrammers[programmer][1] > 4) {
	total+= "<b>Suspended for unattandance</b><br><br>";
	} else {
	total+= "<br><br>"
	}
	document.write(total)
}