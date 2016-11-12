//Apply thisArg [a,b,c] - Invoked Immediately
//Single parameter only
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
// rob.addNumbers.call(jane,1,2,3,4)
// rob.addNumbers.apply(jane,[1,2,3,4])