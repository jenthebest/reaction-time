var clickedTime; 
var createdTime;
var reactionTime;
var box = document.getElementById("box");

function makeBox() {
	setTimeout(function() {
		// make the div appear
		box.style.display="block";

		// generate random color for div
		box.style.backgroundColor = getRandomColor();
		
		// determines if div is a square or circle
		if (Math.random() > 0.5) {
			box.style.borderRadius = "50px";
		} else {
			box.style.borderRadius = "0px";
		}

		// random positioning of div
		box.style.top = Math.random() * 400 + "px";
		box.style.left = Math.random() * 600 + "px";
		createdTime = Date.now();
	}, Math.random() * 4000);
}

function getRandomColor() {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
	return randomRGBA;
}

/* Alternate random color generator
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++;) {
		color += letter[Math.round(Math.random() * 15)];
	}
	return color;
}
*/

box.onclick = function() {
	clickedTime = Date.now();

	// Reaction time in seconds (divide milliseconds by 1000)
	reactionTime = (clickedTime - createdTime) / 1000;

	document.getElementById("time").innerHTML = reactionTime + " seconds.";

	this.style.display="none";
	makeBox();
}

makeBox();

