"use strict";
document.addEventListener("DOMContentLoaded", function() {
	console.log("hello");
	var box = document.getElementById('mouse');
  var other = document.getElementById("tank2");
	var y = 0;
	var boxPos = 0;
  var x = 0;
  var otherPos = 0;
	var boxVel = 5 + "px";
function draw() {
		box.style.left = boxPos + "px";
		box.style.top = y + "px";
		box.style.background
		// debugger;
	}


window.addEventListener('keydown', function(event) {
  
  switch (event.keyCode) {

    case 37:
      box.className = "left";
      draw()
      boxPos -=5
    break;
    case 38: // Up
        box.className = "up";
      	draw()
      	y-=5
    break;

    case 39: // Right
      box.className = "right";
      draw()
      boxPos += 5	
      console.log(boxPos)
    break;

    case 40: // Down
      box.className = "down";
      draw()
      	y+=5
    break;

  }
}, false);
  
function init() {



		requestAnimationFrame(init);
		
	}
	requestAnimationFrame(init);
});