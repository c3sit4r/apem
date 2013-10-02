$(document).ready(init);

function init(){
	//alert("Muy Bien!!!");
	//$('nav').transition({ rotate: '360deg' });
	$('#subir').on('click', irAlCielo);
	$('#menu-holder a.link').on('click', irAlDestino)

	
}

function irAlCielo(e){

	$('body').animate({
		scrollTop:0
	}, 1000);

	e.preventDefault();
}

function irAlDestino(e){
	var destino=$(this.hash)
	$('body').animate({
		scrollTop:$(destino).offset().top
	}, 1000)

	e.preventDefault();
}

