//Explicit Binding
//Manually apply a context to the this object
// Call Apply Bind can only be used on functions
var person = {
	firstName: "Robbo",
	sayHi: function() {
		return "Hi " + this.firstName; 
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
		//call person object to apply to this object
		//person.dog.sayHello.call(person)
		determineContext: function() {
			return this === person;
		}
		//person.dog.determineContext.call(person)
	}
}
var rob = {
	firstName: "Rob",
	sayHi: function() {
		return "Hi " + this.firstName;
	}
}
var jane = {
	firstName: "Jane",
	// sayHi: function(){
	// 	return "Hi " + this.firstName;
	// }
}
//rob.sayHi.call(jane)







//Bind thisArg, a,b,c,d - not Invoked Immediately
//save function with different value of this
// For asynchronous operations