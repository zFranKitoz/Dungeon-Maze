$(document).ready(function(){

		$('#container2').hide();
		$('#Guerrero').corner();
		$('#Cl�rigo').corner();
		$('#Valkiria').corner();
		var seleccionado="";
		var personajes=['Guerrero','Cl�rigo','Valkiria'];
		$('form').hide();
		$('#seleccionJugadores li img').click(function(){
			if(seleccionado==this.id){		
				seleccionado="";
				$('#'+this.id).css('border','none');  
			}else{		
				switch(this.id){
				case 'Guerrero': index=0;
				break;
				case 'Cl�rigo':index=1;
				break;
				case 'Valkiria': index=2;
				break;
				}
			seleccionado=this.id;
			$('form').show();
			$('#Guerrero').css('border','none');
			$('#Cl�rigo').css('border','none');
			$('#Valkiria').css('border','none');
			$('#'+personajes[index]).css('border','3px solid blue');
		 }
    });
});