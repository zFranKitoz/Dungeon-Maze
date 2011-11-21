$(document).ready(function () {
	init();
	Debugger.log("Drawing Canvas");
 
});

	var cwidth = 500;
	var cheight = 300;
	
	var everything = [];

	var boxx = 20;
    var boxy = 30;
    var boxwidth = 450;
    var boxheight = 250;

    var ballrad = 20;

    var boxboundx =  boxwidth + boxx - 3*ballrad;
    var boxboundy = boxheight + boxy - 3*ballrad;
    var inboxboundx = boxx + ballrad;
    var inboxboundy = boxy + ballrad;
	
    var ballx = 50;
    var bally = 60;
	
    
    var ballvx = 4;
    var ballvy = 8;
	

    var img = new Image();
    img.src="http://tux.crystalxp.net/png/mawie-masai-tux-warrior-2319.png";
    
																										var grad;
																										var color;
																										var hue = [/
																										  [100, 0, 0],
																										  [60, 60, 0],
																										  [0, 100, 0],
																										  [0, 60, 60],
																										  [0, 0, 100],
																										  [60, 0, 60]
																										];
	
																										var controls = [
																											"w","a","s","d"];
																										var gameOver = false;
  
    function Hero(imag, px, py, pwidth, pheight,pvx,pvy){
		 this.imag= imag
		 this.px = px;
		 this.py = py;
		 
		 this.pwidth = pwidth;
		 this.pheight = pheight;
		 
		 this.pvx = pvx;
		 this.pvy = pvy;
		
		 this.draw = drawhero;
	}
	function drawhero(){
		ctx.drawImage(this.imag,this.px,this.py,this.pwidth,this.pheight);
	
	var chero = new Hero(img, ballx-ballrad,	bally-ballrad,	2*ballrad, 2*ballrad, ballvx,ballvy);
	

	function Arena(pbx,		pby,		pbwidth,		pbheight,		lineWidth){
		this.pbx = pbx;
		this.pby = pby;
		this.lineWidth	= lineWidth;// ballrad
		this.pbwidth = pbwidth;
		this.pbheight = pbheight
		
		this.draw = drawarena;
	}
	function drawarena(){
		ctx.shadowOffsetX = 10;
		ctx.shadowOffsetY = 10;
		ctx.shadowColor = 'rgb(100,100,100)';
		ctx.shadowBlur = 8;
		ctx.fillRect(this.pbx,								this.pby,								this.lineWidth,		this.pbheight);
		ctx.fillRect(this.pbx+this.pbwidth-this.lineWidth,	this.pby,	 							this.lineWidth, 	this.pbheight);
		ctx.fillRect(this.pbx,								this.pby,									this.pbwidth,		this.lineWidth);
		ctx.fillRect(this.pbx,								this.pby+this.pbheight-this.lineWidth,		this.pbwidth,		this.lineWidth); 
	}
	var carena = new Arena(boxx,	boxy,	boxwidth,	boxheight, 		ballrad);
	everything.push(chero);
	everything.push(carena);
    function init(){
	  if (!canvasSupport()) {
			return;
		}
      ctx = document.getElementById('canvas').getContext('2d');
      
																							  //grad = ctx.createLinearGradient(boxx,boxy,boxx+boxwidth, boxy+boxheight); /*creaciondel gradiente. linear*/
																							  /*for (h=0; h < hue.length ;h++){// mesclar colores.
																								color = 'rgb('+hue[h][0]+','+hue[h][1]+','+hue[h][2]+')';
																								grad.addColorStop(h*1/6,color);      
																							  }
																							  
																							  ctx.fillStyle = grad;
																							  ctx.lineWidth = ballrad;
																							  */
      moveball();
      setInterval(moveball,100);
      }
    function moveball(){

		ctx.clearRect(0,0,cwidth,cheight);
      moveandcheck();
	  var i;
	  for(i = 0; i < everything.length; i++){
		everything[i].draw();
	  } 
    }
    
    function moveandcheck(){
      
      var nballx = chero.px + ballvx;
      var nbally = chero.py + ballvy;
      
      if (nballx > boxboundx){
        nballx = boxboundx;
        ballvx = -ballvx;
        
      }
      
      if (nballx < inboxboundx) {
        nballx = inboxboundx;
        ballvx = -ballvx;
      }
      
      if (nbally > boxboundy){
        nbally = boxboundy;
        ballvy = -ballvy;
      }
      if (nbally < inboxboundy){
        nbally = inboxboundy;
        ballvy = -ballvy;
      }
	  //document.addEventListener("keyup",eventKeyPressed,true);
	  $(document).bind('keyup',eventKeyPressed);
	  
      chero.px = nballx;
      chero.py = nbally;
	  
    }
    
	function eventKeyPressed(e) {
		if (!gameOver) {
			var letterPressed = String.fromCharCode(e.keyCode);
			letterPressed = letterPressed.toLowerCase();
			switch(letterPressed)
			{
				case 'w':
						ballvx = 0;
						ballvy = -5;
				  break;
				case 'a':
						ballvx = -5;
						ballvy = 0;
				  break;
				case 's':
						ballvx = 0;
						ballvy = 5;
				  break;
				case 'd':
						ballvx = 5;
						ballvy = 0;
				  break;

			}

			moveball();
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

	function change() {
      ballvx = Number(f.hv.value);
      ballvy = Number(f.vv.value);
      return false;
    }
