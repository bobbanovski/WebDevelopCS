//Bind
//Returns a function with context of 'this' already bound
//e.g we don't know all the paramaters that will be passed immediately

var rob = {
	firstname: "Rob",
	sayHi: function(){
		return "Hi " + this.firstname;
	},
	addNumbers: function(a,b,c,d){
		return this.firstname + " just caclulated " + (a+b+c+d);
	}
}
var jane = {
	firstname: "Jane"
}

var janeCalc = rob.addNumbers.bind(jane,1,2,3,4)
janeCalc();

//or

var janeCalc = rob.addNumbers.bind(jane,1,2)
//Don't need all parameters immediately,
//Pass in remaining parameters upon execution
//Good for asynch
janeCalc(3,4);

// var colt = {
// 	firstName: "Colt",
// 	sayHi: function() {
// 		setTimeout(function() {
// 			console.log("Hi " + this.firstName)
// 		},1000)
// 	}
// }
//normally this would refer to parent object colt. However this is 
//not called immediately, so this will refer to global object
//call and apply are invoked immediately so can't be used
var colt = {
	firstName: "Colt",
	sayHi: function() {
		setTimeout(function() {
			console.log("Hi " + this.firstName)
		}.bind(this),1000) // this object passed in so complete call
	}
}