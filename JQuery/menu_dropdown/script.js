/*
	 script.js (JavaScript)
	 
	 Objetivo: Projeto criar menus Dropdown com JQuery.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Mostrar Menu dropdown quando o mouse estiver sobre o item */
$('document').ready(function(){

	$('li').hover(function(){

		$(this).find('.submenu').slideDown();

	},

	function(){

		$(this).find('.submenu').slideUp();

	});

});
