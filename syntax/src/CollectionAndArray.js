var mailArchive = {0 : "Dear nephew, ... (mail number 1)",
                   1 : "(mail number 2)",
                   2 : "(mail number 3)"};
for (var current = 0; current in mailArchive; current++)
	document.write("Processing e-mail #", current, ":", mailArchive[current],'\n');

document.write('\n');

var mailArray = ["mail one", "mail two", "mail three"];
for(var current = 0; current < mailArray.length; current++)
	document.write("Processing e-mail #", current, ":", mailArray[current],'\n');