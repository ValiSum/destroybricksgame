var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Radio de la bola
var ballRadius = 10;

// Localizacion del objeto
var x = canvas.width / 2;
var y = canvas.height - 30;

// Movimiento objeto
var dx = 2;
var dy = -2;

var color = '#0095DD';

function drawBall(color) {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Borrar interior canvas
	drawBall(color);

	// Colisiones
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
		color = 'red';
	}

	if (y + dy > canvas.height -ballRadius || y + dy < ballRadius) {
		dy = -dy;
		color = 'green';
	}

	x += dx;
	y += dy;
}

setInterval(draw, 10);