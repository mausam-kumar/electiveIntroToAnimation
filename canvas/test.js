var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.strokeStyle = "crimson"
c.fillRect(100,100,200,300);
// c.strokeStyle = "black"

// line
// c.beginPath();
// c.moveTo(50,300)
// c.lineTo(300,100)
// c.lineTo(400,300)
// c.strokeStyle = "green";

// c.stroke()

// arc/circle

c.beginPath();
c.arc(200,250,50,0,Math.PI*2,false);
c.fillStyle = "crimson";
c.fill()
c.strokeStyle = "crimson"
c.stroke()
