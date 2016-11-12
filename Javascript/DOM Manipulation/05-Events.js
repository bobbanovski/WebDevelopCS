console.log("Script linked");
//Select elements on screen
var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var heading = document.querySelector("h1");
var ulTot = document.querySelector("ul");
var lis = document.querySelectorAll("li");

// event, then callback function called upon clicking
button.addEventListener("click", function() {
	paragraph.textContent = "button Clicked";
})

heading.addEventListener("click", function(){
	alert("Heading Clicked");
})

//Applies to each li in ul
// ulTot.addEventListener("click", function(){
// 	console.log("ul Clicked");
// })

//Event listener with anonymous function
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		//console.log("li # " + i + " was clicked");
		//this refers to item that was clicked on
		this.style.color = "purple";
	})
}

//Event listener with premade function
//Select
var specFunc = document.getElementById("specFunct");
//Add special function
function changeText() {
	specFunc.textContent = "A new kind of text";
}
//Add event listener
specFunc.addEventListener("click", changeText);
