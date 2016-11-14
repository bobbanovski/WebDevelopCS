//objects constructed from blueprints to make modular
//For OOP focused languages - blueprints are classes
//No built in support for classes in JS - use constructor functions as blueprints
//Create objects with new keyword

//constructor function
//property on the function - prototype
function Person(name){
	this.name = name;
}
//create 2 objects from constructor function
var rob = new Person("rob");
var jane = new Person("jane");