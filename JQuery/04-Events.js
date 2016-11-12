// ------------------- Click -------------------------
//Adds click listener to button with id submit
//Only adds listeners to existing elements
$("#submit").click(function(){
	console.log("Button Clicked");
});

//Adds click listener to all buttons
$("button").click(function(){
	console.log("works for any button");
});

//Change property of button that was clicked
$("button").click(function(){
	$(this).css("background", "pink"); // needs to run on
	//A JQUERY object, not a normal JS object
	var text = $(this).text();
	console.log(text + " was clicked");
});

// ------------------- Keypress ----------------------
// $("input[type='text']").keypress(function(){
// 	console.log("key pressed");
// });
//charcode
//keycode
//which
$("input").keypress(function(event){ //event object passed in
	//console.log(event); // gives information about the event (keypress)
	if(event.which === 13){
		console.log("enter");
	};
});

// ------------------ On -----------------------------
// Equivalent to add event Listener
// Works for the above plus any other event
// Adds listeners to any future additional elements
$("h1").on("dblclick", function(){
	alert("Double CLick");
});

// $("button").on("click", function(){
// 	console.logt("button clicked");
// });

$("button").on("mouseenter", function(){
	//console.log("mouse enter");
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});