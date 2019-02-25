/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre vários métodos do JQuery utilizados no cotidiano.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 25/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Manipular elementos com JQuery */
$(document).ready(function(){

	// Div com espaços em branco
	texto = $('#teste').html();

	// Eliminar espaços em branco igual 
	// ao trim() do FORTRAN
	texto2 = $.trim(texto);

	// Realizar ação para vários elementos
	// como em um laço
	$('li').each(function(){

		console.log($(this).html());

	});

	// Verificar tipo da variável
	variavel = "oi"
	console.log($.type(variavel));

});



