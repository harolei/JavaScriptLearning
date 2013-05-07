describe("Find the subString of the param", function(){
	it("should return the subString", function(){
		expect(between("Your mother!", "{-", "-}")).toEqual("our mother");
	});
});