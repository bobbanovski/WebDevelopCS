//When inside a declared object
//Not inside a new object - look to value of closest parent object to 
// assign to this

var person = {
	firstName: "Robbo",
	sayHi: function() {
		return "Hi " + this.firstName 
		//look for value of closest
		//parent object
	},
	determineContext: function() {
		return this === person
	},
	//keyword this is inside person object
	//therefor this is === to person object
	dog: {
		sayHello: function() {
			return "Hello " + this.firstName;
		},
		//firstName is not defined for dog object
		determineContext: function() {
			return this === person;
		}
		//false since closest parent object is dog
	}
}