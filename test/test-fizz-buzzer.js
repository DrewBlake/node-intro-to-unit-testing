const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	//expected results
	it('should check if numbers are divisible by 15, 5 or 3', function() {
		const normalCases = [
			{a: 15, expected: 'fizz-buzz'},
			{a: 5, expected: 'buzz'},
			{a: 3, expected: 'fizz'},
			{a: 2, expected: 2},
			{a: -7, expected: -7}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.a);
			expect(answer).to.equal(input.expected);
		});
	});
	//bad inputs
	it('should cause error if not number input', function() {
		const badInputs = [ 'hello', null, 'goodbye', false, true ];
		badInputs.forEach(function(input) {
			expect(function(){
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});