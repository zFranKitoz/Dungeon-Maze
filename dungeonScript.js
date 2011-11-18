$(document).ready(function () {
	init();
	Debugger.log("Drawing Canvas");
  
  
  
});


	var boxx = 20;
    var boxy = 30;
    var boxwidth = 450;
    var boxheight = 250;
    var ballrad = 20;
    var boxboundx =  boxwidth + boxx - ballrad;
    var boxboundy = boxheight + boxy - ballrad;
    var inboxboundx = boxx + ballrad;
    var inboxboundy = boxy + ballrad;
	
    var ballx = 50;
    var bally = 60;
	
    var ctx;
    var ballvx = 4;
    var ballvy = 8;
    var img = new Image();
    img.src="http://tux.crystalxp.net/png/mawie-masai-tux-warrior-2319.png";
    
	var grad;
    var color;
    var hue = [
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
  
    
    function init(){
      var h;
	  
	  
	  if (!canvasSupport()) {
			return;
		}
      ctx = document.getElementById('canvas').getContext('2d');
      grad = ctx.createLinearGradient(boxx,boxy,boxx+boxwidth, boxy+boxheight); 
      for (h=0; h < hue.length ;h++){
        color = 'rgb('+hue[h][0]+','+hue[h][1]+','+hue[h][2]+')';
        grad.addColorStop(h*1/6,color);      
      }
	  
      ctx.fillStyle = grad;
      ctx.lineWidth = ballrad;
      //window.addEventListener("keyup",eventKeyPressed,true);
	  $(document).bind('keyup',eventKeyPressed);
	  
      moveball();
      setInterval(moveball,100);
      }
    
    function moveball(){

		ctx.clearRect(boxx,boxy,boxwidth,boxheight);

      moveandcheck();
      ctx.drawImage(img,	ballx-ballrad,	bally-ballrad,	2*ballrad,2*ballrad);

      ctx.fillRect(boxx,boxy,ballrad,boxheight);
      ctx.fillRect(boxx+boxwidth-ballrad, boxy, ballrad, boxheight);
      ctx.fillRect(boxx,boxy,boxwidth,ballrad);
      ctx.fillRect(boxx,boxy+boxheight-ballrad,boxwidth,ballrad);        
    }
    
    function moveandcheck(){
      
      var nballx = ballx + ballvx;
      var nbally = bally + ballvy;
      
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
      ballx = nballx;
      bally = nbally;
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
