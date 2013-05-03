var value = null;
while (value != "4") {
	value = prompt("You~ What is the value of 2 + 2?", "");
	if(value == "4")
	alert("You must be a genius or something.");
	else if(value=="3" || value =="5")
	alert("Almost!");
	else
	alert("You're an embarrassment.");
}