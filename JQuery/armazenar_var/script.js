/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre armazenar variável em elemento HTML.
	E verificação de existência de tag.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

$(document).ready(function(){

	// Idade do Usuário 1
	alert($('#teste ul').find('li:eq(0)').data('idade'));

	// Atribua uma idade ao usuário 2
	$('#teste ul').find('li:eq(1)').data('idade','40');

	// Qual a idade do usuário 2?
	alert($('#teste ul').find('li:eq(1)').data('idade'));

	// Esta atribuição acima durará enquanto durar o script
	// A atribuição abaixo ficará registrada no elemento
	$('ul li').eq(1).attr('data-idade','50');

});
