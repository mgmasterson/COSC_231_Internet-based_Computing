/*selecting the canvas in the HTML5*/
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var titanic = new Image();   //declaring image

titanic.src = '1024px-RMS_Titanic_3.jpg';  //place for image

function draw_pic()		//draw the image
{
	context.drawImage(titanic, 100, 5);
}	

function clear_image()	//to clear image from canvas
{
	context.clearRect(1, 1, 600, 600);
}