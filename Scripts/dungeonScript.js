/*
enlaces img:
oro:http://www.tusellolatino.com/images/gold_icon.jpg
goblin:http://www.hiveworkshop.com/forums/images_all/smilies/contest_smilies/goblin_good_job.gif
orco:http://vz.iminent.com/vz/0fef9035-ec9e-4e87-b04a-604c77081125/2/orco-enojado.gif
clerigo:http://rebelion.game-server.cc/web/images/stories/noticias/clases/clerigopath_p.jpg
valkiria:http://www.paginadeinicio.net/images/diablo2/amazona/valkiria.jpg
*/


$(document).ready(function () {
	dungeonApp();
	Debugger.log("Drawing Canvas");
 
});
	
    function dungeonApp(){
	  if (!canvasSupport()) {
			return;
		}
		canvas = $('#canvas')[0];		//* document.getcanvasbyid *
		ctx = canvas.getContext("2d");
		
		//var textcounter= 
		log_container = $('#log_container');
		log = $('#log');
		
				var everything = [];
				var monsters =[];
				//var monster={};
				
				


			// data de paredes:
				var boxx = 20;
				var boxy = 30;
				var boxwidth = 450;
				var boxheight = 250;
			//data de bola	
				var radiusScale = 20; // radio de bola
				
				var initialPos = {x:50,y:60};

				var gameOver = false;
				
				var numbMonsters = 10
				var tempX;
				var tempY;
				
					// tipo,		 punto central de personaje,		 distancia a filos de imagen.
					var chero = new warSubject('warrior', initialPos.x,	initialPos.y, radiusScale);
					// x,y,ancho,alto, grosor paredes, colorfondo, color bordes
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
		setInterval(moveAll,300);

	  
	  
	  
	  
	  
	  

		function moveAll(){
							// borra dibujado
			ctx.clearRect(0,0,canvas.width,canvas.height);
									// cambia movimiento
			$(document).bind('keyup',eventKeyPressed);
			
			wallCollition(chero,carena);
			//battleCollition();
					  
			var i;
			for(i = 0; i < everything.length; i++){
				everything[i].draw();
				if (i > 1) {
					moveEnemies(chero,everything[i]);
				}
				
			}
			

		}
	

    
		function eventKeyPressed(e) {
			if (!gameOver) {
				var letterPressed = String.fromCharCode(e.keyCode);
				letterPressed = letterPressed.toLowerCase();
				
				//ettersGuessed.push(letterPressed);
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
			
		function moveEnemies(chero,cmonster){
					var y =chero.py + chero.rscale;
					var x =chero.px + chero.rscale;
					
					
					var currenty = cmonster.py + cmonster.rscale;
					var currentx = cmonster.px + cmonster.rscale;
					
					var targety = y - cmonster.pheight;
					var targetx = x -cmonster.pwidth;
					
					var distx = cmonster.px - chero.px; 
					var disty = cmonster.py - chero.py;
					
					if(distx > disty ){			//saber en que dir. mover (mas cercana)
									// mover hacia el enemigo, dependiendo si esta mas arriba o mas abajo.
						if (targety > currenty 	)
							cmonster.py += cmonster.speed;
						else if (targety < currenty )//&& targety < 0
							cmonster.py -= cmonster.speed;
						
						
					}else	if(distx < disty){
						if (targetx > currentx 	)
							cmonster.px += cmonster.speed;
						else if (targetx < currentx)
							cmonster.px -= cmonster.speed;
					}
					
					writeOnLOg(log,
									'my position is (' +x+','+y+')'+'enemy position is (' +currentx+','+currenty+')');
					/*writeOnLOg(log,
									'enemy position is (' +currentx+','+currenty+')');*/
					wallCollition(cmonster,carena);
		
		}
	
	
	}	
	

	//check compatibility
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
