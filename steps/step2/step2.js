var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Localizacion del objeto
var x = canvas.width / 2;
var y = canvas.height - 30;

// Movimiento objeto
var dx = 2;
var dy = -2;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI * 2);
	ctx.fileStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Borrar interior canvas
	drawBall();
	x += dx;
	y += dy;
}

setInterval(draw, 10);