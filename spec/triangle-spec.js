import { Triangle } from "../src/triangle";

describe('Triangle', function() {
	let resuableTriangle;
	beforeEach(() => {
		resuableTriangle = new Triangle(3, 4, 5);
	});

	it('should test whether a Triangle has three sides', function() {
		console.log('triangle');
		expect(resuableTriangle.side1).toEqual(3);
		expect(resuableTriangle.side2).toEqual(4);
		expect(resuableTriangle.side3).toEqual(5);
	});

	it('should determine a triangle is leagl or not', () => {
		expect(resuableTriangle.checkType()).toEqual();
	});

	it('should correctly determine whether three lengths can be made into a triangle', function() {
		let notTriangle = new Triangle(3,9,22);
		expect(notTriangle.checkType()).toEqual("not a triangle");
	});

	it('should correctly determine whether three lengths can be made into a triangle', function() {
		let isocTriangle = new Triangle(5,5,7);
		expect(isocTriangle.checkType()).toEqual("an isosceles triangle");
	});

	it('should correctly determine whether three lengths can be made into a triangle', function() {
		let scalTriangle = new Triangle(4,5,7);
		expect(scalTriangle.checkType()).toEqual("a scalene triangle");
	});

});