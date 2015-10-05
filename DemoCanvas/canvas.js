var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccff66";
ctx.fillRect(10, 30, 100, 100);

ctx.strokeStyle = "#66ff66";
ctx.moveTo(50, 30);
ctx.lineTo(250, 197);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.font = "40px Arial";
ctx.strokeText("¡Hey There!", 50, 50);