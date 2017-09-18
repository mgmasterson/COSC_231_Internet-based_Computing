var bcolors = ['white', 'grey', 'black', 'red',
			  'orange', 'yellow', 'green', 'blue'];		  
			  
for(var i=0, n=bcolors.length;i<n; i++){
	var back = document.createElement('nav');
	back.className = 'back';
	back.style.backgroundColor = bcolors[i];
	back.addEventListener('click',setBack);
	document.getElementById('background').appendChild(back);
}

function setBack(color){
	context.fillStyle = color;
	context.fillRect (0, 0, 512, 512);
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className = 'back';
	}
}

function setBacksw(e){

	//identify background
	var back = e.target;
	//set color
	setColor(back.style.backgroundColor);
	//give active class
	back.className += ' active';
}

setBacksw({target: document.getElementsByClassName('back')[0]}); //set default swatch