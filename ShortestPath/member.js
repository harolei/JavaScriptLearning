function member(array, value){
	var found = false;
	forEach(array, function(element){
		if(element === value)
			found = true;
	});
	return found;
}

var Break = {toString: function(){return "Break";}};

function forEach(array, action){
	try{
		for(var i = 0; i < array.length; i++)
			action(array[i]);
	}
	catch(exception){
		if(exception != Break)
			throw exception;
	}
}

document.write(member([6,7,"Bordeaux"],7));