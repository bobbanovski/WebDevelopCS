//objects, blueprints that create objects
// function to create object
//constructor function
// capitalize name
function House(bedrooms, bathrooms, numsqft){
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numsqft = numsqft;
}

//var firstHouse = House(2,2,1000)
//firstHouse // undefined 

var firstHouse = new House(2,2,1000)

//creates empty object
//sets value of object for this to empty object
//adds return this implicitly
//adds property to empty object - _proto_
//	prototype property on constructor function
//	assigned to empty object

function Dog(name, age){
	this.name = name;
	this.age = age;
	this.bark = function() {
		console.log(this.name + " just barked");
	}	
}
var rusty = new Dog('Rusty', 4);
var fido = new Dog('Fido', 1)
rusty.bark();
fido.bark();