
//----------------	.Text() --------------------
//.text() = textContent
var text = $("h1").text();
var ulText = $("ul").text();
var liText = $("li").text(); // => "SkittlesStarburstTwix"

//Change Text
$("li:first").text("I Have Changed");

//-----------------  .html() --------------------
//.html() == innerHtml
ulHtml = $("ul").html();
//add extra element to ul
var addHtml = ("<li>Added to list</li>");
ulHtml = ulHtml + addHtml;
$("ul").html(ulHtml);

//------------------ .attr() ----------------------
//.attr() get or change attr for first or every selected element
$("img").css("width", "400px");
$("img").attr("src", "03.jpg");

//Get attribute
var inputType = $("input").attr("type");

//change attribute
//$("input").attr("type", "color");

// ------------------- .val() ----------------------
// set value of input
$("input").val("initial val");

// get value in input
$("input").val();
var option = $("select").val();

// ------------------