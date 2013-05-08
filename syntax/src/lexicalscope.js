var makeAddFunction = function(amount) {
	function add(number){
	return number + amount;
	}
	return add;
};
exports.makeAddFunction = makeAddFunction;
