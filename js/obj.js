/*
 * Game objects. i.e. apple
 * Actions can be performed on an object.
 */

Pac.Obj = function(name, options){
	
	this.name = name;
	
	this.attrs = {
		x: options.x,
		y: options.y,
		width: options.width,
		height: options.height
	};
	
	this.resourceName = options.resName;
	
	this.ctx = null; //injected by PAC
};

Pac.Scene.prototype.update = function() {
	//update object state
}

Pac.Scene.prototype.draw = function() {
	//draw image obj
}
