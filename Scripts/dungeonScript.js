
$(document).ready(function () {
	dungeonApp();
	Debugger.log("Drawing Canvas");
 
});
	
    function dungeonApp(){
	  if (!canvasSupport()) {
			return;
		}
		canvas = $('#canvas')[0];		
		ctx = canvas.getContext("2d");

				
				var everything = [];
				var monsters =[];
				var boxx = 20;
				var boxy = 30;
				var boxwidth = 450;
				var boxheight = 250;
				var radiusScale = 20; 
				var initialPos = {x:50,y:60};
				var gameOver = false;
				var numbMonsters = 3
				var tempX;
				var tempY;
					var chero = new warSubject('warrior', initialPos.x,	initialPos.y, radiusScale);
					var carena = new Arena(0,	0,	boxwidth,	boxheight, 		radiusScale,'#EEEEEE','black');
					everything.push(carena);
					everything.push(chero);
					
					for (var i = 0; i < numbMonsters; i++) {
						
						tempX = radiusScale*2 + (Math.floor(Math.random()*canvas.width)-radiusScale*2);
						tempY = radiusScale*2 + (Math.floor(Math.random()*canvas.height)-radiusScale*2);
						
						var tipo = 'orco';
						var selEnemig = Math.floor(Math.random()*2);
						switch(selEnemig){
							case 0 :
								tipo = 'orco';
							break;
							case 1:
								tipo = 'goblin';
							break;
						}		
								
						var cmonster = new warSubject(tipo, tempX,	tempY, radiusScale);
						
						everything.push(cmonster);
					}
		moveAll();
		setInterval(moveAll,100);

		function moveAll(){

			ctx.clearRect(0,0,canvas.width,canvas.height);

			$(document).bind('keyup',eventKeyPressed);
			
			wallCollition(chero,carena);
			//battleCollition();
					  
			var i;
			for(i = 0; i < everything.length; i++){
				everything[i].draw();
				
			}

		}
	

    
		function eventKeyPressed(e) {
			if (!gameOver) {
				var letterPressed = String.fromCharCode(e.keyCode);
				letterPressed = letterPressed.toLowerCase();
				switch(letterPressed)
				{
					case 'w':
							chero.py -= chero.speed;
					  break;
					case 'a':
							chero.px -= chero.speed;
					  break;
					case 's':
							chero.py += chero.speed;
					  break;
					case 'd':
							chero.px += chero.speed;

					  break;

				}

				moveAll();
			}
		}
	
	
	}	

	var Debugger = function () { };
		Debugger.log = function (message) {
			try {
				console.log(message);
			} catch (exception) {
				return;
			}
		}
	function canvasSupport () {
		return Modernizr.canvas;
	}
