class Circle{
	constructor(radius){
    this .radius= radius;
	}
	calcArea(){
	return 3.14*(this.radius*this.radius);
	}
	calcPerimeter(){
		return 3.14*(2*this.radius);
	}
	calcDiameter(){
		return 2*(this.radius);
	}
}
const circle= new Circle(30);
console.log(circle.calcArea());
console.log(circle.calcPerimeter());
console.log(circle.calcDiameter());



