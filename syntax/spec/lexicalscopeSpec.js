var lexical = require('../src/lexicalscope');
describe("Test the lexical scope", function(){
	it("should return the add result of the fucntion", function(){
		var addTwo = lexical.makeAddFunction(2);
		var addFive = lexical.makeAddFunction(5);
		var result = addTwo(1) + addFive(1); 
		expect(result).toEqual(9);
	});
});