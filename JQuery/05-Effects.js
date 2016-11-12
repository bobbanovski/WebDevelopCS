//------------------- FadeOut and Remove--------------------
// time to fade, callback that is triggered at completed
// 

$("div").on("click", function(){
	//$(this).fadeOut("slow", function(){
	$(this).slideUp("slow", function() { // <------------ slide up instead of fade
		//function called when animation complete
		console.log("fade completed");
		$(this).remove(); //<---------- Removes the selected div
	});
});
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		console.log("fade completed");
	});
	//$("p").fadeIn(1000);
});

// --------------------- FadeIn ---------------------------
// Display: none must be set in css
$("button").on("click", function(){
	// $("p").fadeIn(1000);
	$("p").slideDown(1000);
});

// -------------------- Fade Toggle -----------------------
//
$("button").on("click", function() {
	//$("img").fadeToggle(1000);
	$("img").slideToggle(1000);
});