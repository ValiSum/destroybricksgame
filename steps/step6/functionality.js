// Canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* ======= BALL ======= */

// Size
var ballRadius = 10;

// Initial position
var x = canvas.width / 2;
var y = canvas.height - 30;

// Move
var dx = 2;
var dy = -2;

// Initial color
var color = '#0095DD';

/* ==================== */

/* ======= PADDLE ======= */

// Size
var paddleHeight = 10;
var paddleWidth = 75;

// Initial position
var paddleX = (canvas.width - paddleWidth) / 2;

// Buttons pressed
var rightPressed = false;
var leftPressed = false;

// Move
paddleMove = 7;

/* ====================== */

/* ======= BRICK ======= */

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for(var r = 0; r < brickRowCount; r++) {
  	bricks[c][r] = { x: 0, y: 0 };
  }
}

/* ===================== */

/* ======= FUNCTIONS ======= */

function getColor() {
	colors = [
		'#ff0000',
		'#33cc33',
		'#ffff00',
		'#0000ff',
		'#66ffff',
		'#800000',
		'#ff9900',
	];

	let color = colors[Math.floor(Math.random()* colors.length)];

	return color;
}

function drawBall(color) {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
}

function drawBricks() {
	for (var c = 0; c < brickColumnCount; c++) {
		for (var r = 0; r < brickRowCount; r++) {
			var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
			var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
			bricks[c][r].x = brickX;
			bricks[c][r].y = brickY;
			ctx.beginPath();
			ctx.rect(brickX, brickY, brickWidth, brickHeight);
			ctx.fillStyle = '#0095DD';
			ctx.fill();
			ctx.closePath();
		}
	}
}

function keyDownHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = true;
	} else if (e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = false;
	} else if (e.keyCode == 37) {
		leftPressed = false;
	}
}

/* ========================= */

/* ======= DRAW ======= */
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Remove canvas content
	drawBricks();
	drawBall(color);
	drawPaddle();

	// Collisions ball
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
		color = getColor();
	}

	if (y + dy < ballRadius) {
		dy = -dy;
		color = getColor();
	} else if (y + dy > canvas.height - ballRadius) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -dy;
			color = getColor();
		} else {
			alert("GAME OVER");
			document.location.reload();
		}
	}

	x += dx;
	y += dy;

	// Collisions paddle
	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 7;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 7;
	}
}

/* ==================== */

/* ======= EVENTS LISTENER ======= */

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/* =============================== */

/* ======= INTERVAL ======= */
setInterval(draw, 10);
/* ======================== */


























