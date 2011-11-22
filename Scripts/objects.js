/* OBjets of the game:*/

function warSubject(type, px, py, rscale){
		this.type = type;
		 this.imag = new Image();
		 this.speed;
			 switch(this.type){
				case 'warrior':
						this.imag.src = "http://tux.crystalxp.net/png/mawie-masai-tux-warrior-2319.png";
						this.speed = 20;
						
					break;
				case 'clerigo':
						this.imag.src = "http://rebelion.game-server.cc/web/images/stories/noticias/clases/clerigopath_p.jpg";
						this.speed = 20;
					break;
				case 'valkiria':
						this.imag.src = "http://www.paginadeinicio.net/images/diablo2/amazona/valkiria.jpg";
						this.speed = 20;
					break;
				case 'goblin':
						this.imag.src = "http://www.hiveworkshop.com/forums/images_all/smilies/contest_smilies/goblin_good_job.gif";
						this.speed = 20;
					break;
				case 'orco':
						this.imag.src = "http://vz.iminent.com/vz/0fef9035-ec9e-4e87-b04a-604c77081125/2/orco-enojado.gif";
						this.speed = 20;
					break;
				default:
					break;
			}
		 
		 this.rscale = rscale 
		 
		 this.centralx = px;
		 this.centraly = py;
		 
		 this.px = px - rscale; 
		 this.py = py - rscale;
		 
		 this.xunits = 0;
		 this.yunits = 0;
		 
		 this.pwidth = rscale * 2;
		 this.pheight = rscale * 2;
		 
		 this.draw = drawsubject;
		 
	}
	function drawsubject(){
		ctx.save();
			ctx.shadowOffsetX = 10;
			ctx.shadowOffsetY = 10;
			ctx.shadowColor = 'rgb(100,100,100)';
			ctx.shadowBlur = 8;
			
			ctx.drawImage(this.imag, this.px ,this.py,this.pwidth,this.pheight);//html image element, x, y, width,height
		ctx.restore();
	}
	
//arena
	function Arena(pbx,		pby,		pbwidth,		pbheight,		lineWidth, fontColor, lineColor){
		this.boxx = pbx;
		this.boxy = pby;
		this.lineWidth	= lineWidth;// ballrad
		this.boxwidth = pbwidth;
		this.boxheight = pbheight;
		
		this.fillStyle = fontColor;
		this.strokeStyle = lineColor;
		
	//limits
		this.boxboundx =  pbwidth + pbx - 3*lineWidth;
		this.boxboundy = pbheight + pby - 3*lineWidth;
		this.inboxboundx = pbx + lineWidth;
		this.inboxboundy = pby + lineWidth;
		
		this.draw = drawarena;
	}
	function drawarena(){

		ctx.fillStyle =	this.fillStyle;
		ctx.fillRect(this.boxx, this.boxy, this.boxwidth, this.boxheight);
		ctx.lineWidth = 3;
		ctx.strokeStyle = this.strokeStyle;
		ctx.strokeRect(1, 1, this.boxwidth-2, this.boxheight-2);
		
	}
	



/*
//Gold:
	function Gold(imag, px, py, pwidth, pheight,pvx,pvy){
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
		ctx.drawImage(this.imag,this.px,this.py,this.pwidth,this.pheight);//html image element, x, y, width,height
	}
	
	
//key:
	function Key(imag, px, py, pwidth, pheight,pvx,pvy){
		 this.imag= imag
		 this.px = px;
		 this.py = py;
		 
		 this.pwidth = pwidth;
		 this.pheight = pheight;
		 
		 this.pvx = pvx;
		 this.pvy = pvy;
		
		 this.draw = drawgold;
	}
	function drawgold(){
		ctx.drawImage(this.imag,this.px,this.py,this.pwidth,this.pheight);//html image element, x, y, width,height
	}*/