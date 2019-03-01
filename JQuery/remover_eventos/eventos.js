/*
	 eventos.js (JavaScript)
	 
	 Objetivo: Estudo sobre como remover eventos no JQuery e evento toggleClass.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

$('document').ready(function(){

	// Adicionar evento onclick ao botão
	$('button').bind('click', function(){

		alert("oi");

	});

	// Remover evento onclick do botão
	// Todas as duas alternativas abaixo são válidas
	$('button').unbind('click');

	$('button').off('click');

	// O toggleClass alterna a classe de um elemento
	// útil para mudar o estilo CSS tornando responsivo
	$('button').hover(function(){

		$(this).toggleClass('botao');

	}, function(){

		$(this).toggleClass('botao');

	});

});
