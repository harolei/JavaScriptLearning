var set = {"Spot" : true};
set["White Fang"] = true;
delete set["Spot"];
alert("White Fang" in set);
alert("Spot" in set);