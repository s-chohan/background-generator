var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorPicked = pickColor();
colorDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++) {

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor == colorPicked) {
			changeSquaresColor(colorPicked);
			messageDisplay.textContent = "Correct";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeSquaresColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	console.log(random);
	return colors[random];
}