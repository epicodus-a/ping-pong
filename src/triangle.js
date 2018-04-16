export class Triangle {
	constructor(side1, side2, side3){
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	checkType(){
		if(this.side1 > (this.side2 + this.side3) || this.side2 > (this.side1 + this.side3) || this.side3 > (this.side2 + this.side1)){
			return 'Not a triangle';
		}else if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
			return "an equilateral triangle";

		} else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
			return "an isosceles triangle";

		} else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
			return "a scalene triangle";
		} else {
			return "unable to compute";
		}
	}
}