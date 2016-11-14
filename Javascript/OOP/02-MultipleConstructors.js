function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}
function Motorcycle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 2;
}

function Motorcycle(make,model,year){
	Car(make,model,year)
	this.numWheels = 2;
}
var firstMotorCycle = new Motorcycle('red', 'ford', 2001)
//make, model, year still bound to car object - undefined
//change value of key word this - explicit binding

//invoke car constructor function, change context of keyword this
//the this objects within the Car function now apply to the Motorcycle
function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}
function Motorcycle(make, model, year){
	Car.call(this, make, model, year)
	this.numWheels = 2;
}
//Using apply
function Motorcycle(make,model,year){
	Car.apply(this, [make,model,year]);
	this.numWheels = 2
}
function Motorcycle(make, model, year){
	Car.apply(this, arguments);
	this.numWheels = 2;
}