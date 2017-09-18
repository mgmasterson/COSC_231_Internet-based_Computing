var colors = ['black', 'grey', 'white', 'red',
			  'orange', 'yellow', 'green', 'blue'];  //Color array to select from

/*Handles the creation of color*/			  
for(var i=0, n=colors.length;i<n; i++){
	var swatch = document.createElement('nav');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click',setSwatch);
	document.getElementById('colors3').appendChild(swatch);
}

/*set color*/
function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className = 'swatch';
	}
}

function setSwatch(e){

	//identify swatch
	var swatch = e.target;
	//set color
	setColor(swatch.style.backgroundColor);
	//give active class
	swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]}); //set default swatch