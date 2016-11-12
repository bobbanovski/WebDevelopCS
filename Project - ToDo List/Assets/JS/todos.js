//$("li").on("click", function(){})
$("ul").on("click", "li", function(){ // listener only added on li
	$(this).toggleClass("completed")

	// var text = $(this).text();
	// console.log(text + " has been clicked");
	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	$(this).css("text-decoration", "none");
	// 	$(this).css("color", "black");
	// }
	// else {
	// 	$(this).css("text-decoration", "line-through");
	// 	$(this).css("color", "gray");
	// 	// $(this).css({
	// 	// 	color: "gray",
	// 	// 	textDecoration: "line-through" //<---- not No hyphen
	// 	// })
	// }	
});

//Click on X to delete toDay
//$("span").on("click", function(event){
$("ul").on("click", "span", function(event){	
	//console.log("clicked")
	//$(this).parent().fadeOut(500, function() {
	$(this).parent().slideUp(500, function() {
		$(this).remove(); // removes from DOM
	}); // returns parent element

	event.stopPropagation(); // prevents event bubbling
	//li ul and body will not trigger
});

// Event bubbling - event passes from lowest element to parent element
$("ul").click(function() {
	//console.log("ul clicked");
});

$("#container").click(function(){
	//console.log("container clicked");
});

$("body").click(function() {
	//console.log("body clicked");
});

//$("input[type='text']").keypress(function(event) {
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		//console.log("enter");
		//console.log($(this).val());
		var toDoText = $(this).val();
		//$("ul").append("<li>A New Li</li>");
		// Add new li element
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
		$(this).val("");
	};
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})