/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre como adicionar estilo, CSS e dimensões com JQuery.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 20/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Manipular elementos com JQuery */
$(document).ready(function(){

	//Verificar se o elemento pertence a uma classe
	if($('#item1').hasClass('item')){
		alert("o item 1 pertence a classe!");
	}else{
		alert("o item 1 não pertence a classe!");
	}

	// Adicionar classe item ao elemento item1
	$('li').addClass('item');

	//Verificar se o elemento pertence a uma classe
	if($('#item1').hasClass('item')){
		alert("o item 1 pertence a classe!");
	}else{
		alert("o item 1 não pertence a classe!");
	}

	// Adicionar estilo CSS a um elemento
	$('h1').css("color","#0000ff");
	
	$('#item1').removeClass('item');

});



