"use strict";
document.addEventListener("DOMContentLoaded", function() {

	var box = document.getElementById("car");
	var y = 5;
	var boxPos = 0;
	var boxVelocity = 5;
	var boxVertical = -5;
	var move;
	var done = true;
	var w = window.innerWidth;
	var h = window.innerHeight;

	function cool(e) {
		if (e.which == 32) {  
			window.removeEventListener('keydown', cool);
			boxVertical = -5;
			doKeyPress();
		}
	}

	function draw() {
		box.style.left = boxPos + "px";
		box.style.top = y + "px";
		
		// debugger;
	}
	function moveCar() {
		boxPos += boxVelocity;
		if (boxPos < -200 || boxPos > w - 600) {
		 	boxVelocity = -boxVelocity;
		}
		
	}

	function lightUp() {
		if (boxVertical > 0) {
			document.getElementsByClassName("front-light square")
			[0].style.backgroundColor = "#FFD801";
			document.getElementsByClassName("back-light square")
			[0].style.backgroundColor = "#E60000";
		}
		else if (boxVertical <= 0) {
			document.getElementsByClassName("front-light square")
			[0].style.backgroundColor = "#FFFF4D";
			document.getElementsByClassName("back-light square")
			[0].style.backgroundColor = "#ff3333";
		}
	}
		
	function doKeyPress() {
		move = setInterval(function() {
			y += boxVertical;
			if (y <= -h + 470) {  
				boxVertical = -boxVertical;
			}
			if (y >= 5) {
				boxVertical = 0;
				done = true;
				clearInterval(move);
			}
		}, 18);
	}
 

	function init() {
		moveCar();
		draw();
		lightUp();
		requestAnimationFrame(init);
	}

	ad();
	requestAnimationFrame(init);

	function ad() {
		setInterval(function() {
			if (done == true) {
				done = false;
				window.addEventListener("keydown", cool);
			}
		
		}, 9);
	} 


	document.getElementById("button-blue").onclick = carBlue;
	function carBlue()  {
		var carBody = document.getElementsByClassName("car-body");
		carBody[0].style.backgroundColor = "blue";
		carBody[1].style.backgroundColor = "blue";
	}
	document.getElementById("button-red").onclick = carRed;
	function carRed()  {
		var carBody = document.getElementsByClassName("car-body");
		carBody[0].style.backgroundColor = "#990000";
		carBody[1].style.backgroundColor = "#990000";
	}

	document.getElementById("button-white").onclick = carWhite;
	function carWhite()  {
		var carBody = document.getElementsByClassName("car-body");
		carBody[0].style.backgroundColor = "white";
		carBody[1].style.backgroundColor = "white";
	}


	
});