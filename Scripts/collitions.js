/*all collitions*/

function wallCollition(cobject,carena){
	// future position:
		var xunits = cobject.px + cobject.speed;
		var yunits = cobject.py + cobject.speed;
		
		if(xunits > carena.boxboundx ){
			cobject.px = carena.boxboundx;
		}
		if(xunits < 0){
			cobject.px = 0;
		}
		if(yunits > carena.boxboundy ){
			cobject.py = carena.boxboundy;
		}
		if(yunits < 0){
			cobject.py = 0;
		}
	}