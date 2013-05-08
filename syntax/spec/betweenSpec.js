var betweenTest = require('../src/between');
describe("Find the subString of the param", function(){
	it("should return the subString", function(){
		expect(betweenTest.between("Your mother!", "{-", "-}")).toEqual("our mother");
	});
});