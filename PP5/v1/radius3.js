/*Set new radius*/
var setRadius = function(newRadius){
	if(newRadius<minRad)
		newRadius = minRad;
	else if (newRadius>maxRad)
		newRadius = maxRad;
	radius3 = newRadius;
	context.lineWidth = radius3*2;
	
	radSpan.innerHTML = radius3;
}

/*option to increment radius*/
var minRad = 0.5,
	maxRad = 100;
	defaultRad = 4,
	interval = 5;
	radSpan=document.getElementById('radval'),
	decRad=document.getElementById('decrad'),
	incRad=document.getElementById('incrad');

/*Handles the decrement in radius with mouse*/	
decRad.addEventListener('click',function(){
	setRadius(radius3-interval)
})

/*
Handles the increment in radius with mouse*/
incRad.addEventListener('click',function(){
	setRadius(radius3+interval)
})

setRadius(defaultRad);