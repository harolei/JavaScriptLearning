var powerTest = require('../src/power');
describe("Caculate power", function(){
	it("should return the power of 2", function(){
		expect(powerTest.power(2,10)).toBe(1024);
	});
});