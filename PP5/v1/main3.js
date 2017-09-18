/*selecting the canvas in the HTML5*/
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius3 = 10;  //set default radius
var dragging = false;  //set dragging to false

context.lineWidth = radius3*2;


//put down circle where user puts down mouse.
var putPoint = function(e)
{
	if(dragging)
	{
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius3, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
	
};

//to engage mouse
var engage = function(e)
{
	dragging = true;
	putPoint(e);
};

//to disengage mouse
var disengage = function(e)
{
	dragging = false;
	context.beginPath();
};

canvas.onmouseup = function()
{
	document.getElementById("st").innerHTML = "Up";
    canvas.removeEventListener('mousemove', paint);
}

canvas.onmousedown = function()
{
	document.getElementById("st").innerHTML = "Down";
    ctx.beginPath();
	ctx.moveTo(mouseX, mouseY);
	canvas.addEventListener('mousemove', paint);
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);