"use strict";
document.addEventListener("DOMContentLoaded", function() {
	var box = document.getElementById('tank')
  var other = document.getElementById("tank2")
	var y = 0;
	var boxPos = 0;
  var x = 0;
  var otherPos = 0;
  var dx = 2.5;
  var dy = 2.5;
	var boxVel = 5 + "px";
  var keys = {};
  var HEIGHT = 500;
  var WIDTH = 700;
  var player = $("#tank");
  var player2 = $("#tank2");
  var e = e;
  var bullet = $(".Bullet").last();

  window.addEventListener('keydown',function(e) {
    keys [e.which] = true;
    }, true);
  window.addEventListener('keyup',function(e) {
    keys [e.which] = false;
    }, true);




function doKeyDown(){
  if (keys[32]) {
      $("#tank").append('<div class = "Bullet"></div>');
      var bullet = $(".Bullet").last();
      bullet.css('top',bullet.position().top + 18.5);
      bullet.css('left',bullet.position().left + 18.5)
  }
  if (keys[38]) { //Up Arrow
    if (player.position().top - dy > -2){
      player.css('top', player.position().top - 5);
      player.removeClass ("left down right up");
      player.addClass ("up");
    }
  }
  if (keys[40]){ //Down Arrow 
    if (player.position().top + dx < HEIGHT -33) {
      player.css('top', player.position().top + 5);
      player.removeClass ("left down right up");
      player.addClass ("down");
    }
  }
  if (keys[37]) { //Left Arroww
    if (player.position().left - dx > -2){
      player.css('left', player.position().left - 5);
      player.removeClass ("left down right up");
      player.addClass ("left");
    }
  }
  if (keys[39]) { //Right Arrow
    if (player.position().left + dy < WIDTH - 37){
      player.css('left', player.position().left + 5);
      player.removeClass ("left down right up");
      player.addClass ("right")
    }
  }
  if (keys[87]) { //Up Arrow
    if (player2.position().top - dy > -2) {
      console.log(player2.position().top)
      player2.css('top', player2.position().top - 42);
      player2.removeClass ("left down right up");
      player2.addClass ("up")

    }
  }
  if (keys[83]){ //Down Arrow 
    if (player2.position().top + dx < HEIGHT-37) {
      player2.css('top', player2.position().top - 32);
      player2.removeClass ("left down right up")
      player2.addClass ("down");
    }
  }
  if (keys[65]) { //Left Arroww
    if (player2.position().left - dx > -2){
      player2.css('left', player2.position().left - 5);
      player2.removeClass ("left down right up")
      player2.addClass ("left");
    }
  }
  if (keys[68]) { //Right Arrow
    if (player2.position().left + dy < WIDTH-37){
      player2.css('left', player2.position().left + 5);
      player2.removeClass ("left down right up")
      player2.addClass ("right")
    }
  }
      setTimeout(doKeyDown, 10);
  }
window.addEventListener('keypress',function(i) {
  keys [i.which] = true;
  }, true);
  function shoot() {
    if (keys[87]) {
      console.log("hi")
      $("#main").append('<div class = "Bullet"></div>');
      var bullet = $(".Bullet").last();
    }
  } 



    // function idk() {
    //   $("#Main").append('<div class = "Bullet"></div>');
    //   bullet.css('top', tank.position().top + 18);
    //   bullet.css('left', tank.position().left + 18);
    // }
       
function init() {



		requestAnimationFrame(init);
		
	}
  shoot();
  doKeyDown();
	requestAnimationFrame(init);
});