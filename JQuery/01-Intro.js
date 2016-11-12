
//Select object - functions like querySelectorAll
//Use CSS style selector
//$("img") all img elements
//$(".sale") all sale classes
//$("#bonus") all bonus ids
//$("li a") all anchors in li
$("h1") //returns a list, even for 1 item
$("li") // selects all lis for list
$("body")

var spec = $("#muhSpecial");
var link = $("ul li a")[0];

//manipulate style
$("body").css("background", "blue");

var style = {
	border: "2px solid black",
	fontWeight: "bold"
}
$("h1").css(style); // pass in object with multiple properties
$("li").css("color", "red");