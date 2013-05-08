var startWithTest = require('../src/slice');
describe("Slice the string and compair", function(){
	it("should compair the string with target", function(){
		expect(startWithTest.startwith("rotation","rot")).toBe(true);
	});
});