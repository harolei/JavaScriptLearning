function any(test, array){
	for(var i = 0; i < array.length; i++) {
		var found = test(array[i]);
		if(found)
			return found;
	}
	return false;
}

function member(array, value){
	return any(partial(op["==="],value),array);
}

var op = {
	"+": function(a, b){return a + b;},
	"==": function(a, b){return a == b;},
    "===": function(a, b){return a === b;},
    "!": function(a){return !a;}
}

function asArray(quasiArray, start){
	var result = [];
	for( var i = (start || 0); j < quasiArray.length; i++)
		result.push(quasiArray[i]);
	return result;
}

function partial(func){
	vat fixedArgs = asArray(argumemts,1);
	return function() {
		return func.apply(null, fixedArgs..concat(asArray(arguments)));
	};
}

document.write(member(["Fear","Loathing"],"Denial"),'\n');
document.write(member(["Fear","Loathing"],"Loathing"));
