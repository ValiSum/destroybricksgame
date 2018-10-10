var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Pintar cuadrado
ctx.beginPath();
ctx.rect(20, 40, 70, 70);
ctx.fillStyle = '#FF0000'; // Color
ctx.fill();
ctx.closePath();

// Pintar circulo
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green"; // Color
ctx.fill();
ctx.closePath();

// Pintar rectangulo
ctx.beginPath();
ctx.rect(160, 10, 100, 20);
ctx.fillStyle = 'yellow';
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"; // Pintar borde
ctx.fill();
ctx.stroke();
ctx.closePath();