/**
 * will suscribe to canvas mouse/kb events and trigger 
 * actions depending on events.
 */

Pac.events = (function(){
	var canvas;
	
	var getCoords = function(e){
		if (e.pageX || e.pageY) { 
		  x = e.pageX;
		  y = e.pageY;
		}
		else { 
		  x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
		  y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
		} 
		
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		
		return {
			x: x,
			y: y
		}
	}
	
	var objsToClick = [];
	
	var mouseClick = function(ev){
		var mPos = getCoords(ev),
			objsL = objsToClick.length;
		
		for(var i=0; i< objsL; i++){
			var o = objsToClick[i];
			
			if (o.hasPoint({x: mPos.x, y: mPos.y})) {
				o.fireEvent('click');
				break;
			}
		}
	}
	
	return {
		init: function(canvasEle){
			canvas = canvasEle;
		},
		
		bindEvents: function(){			
			canvas.addEventListener('click', mouseClick, false);
		},
		
		unbindEvents: function(){
			canvas.removeEventListener('click', mouseClick, false);
		},
		
		attach: function(obj){
			objsToClick.push(obj);
		},
		
		detach: function(obj){
			var i = objsToClick.length;
			 
			do {
				if (objsToClick[i] === obj) {
					objsToClick.splice(i);
					break;
				}
			} while (i--);
		}
		
	};
	
})();



