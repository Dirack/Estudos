/*
	 funcoes.js (JavaScript)
	 
	 Objetivo: Chamar funções e eventos a partir do JQuery.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 01/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

// Função mostra o evento disparado na tela
function eventoBotao(e){

	alert(e.type);	

}

$(function(){

	// Chamar a função eventoBotao com os eventos
	// 'onclick' ou 'onmouseover'
	$('button').bind('click', eventoBotao);
	$('button').bind('mouseover', eventoBotao);

	// Disparar o evento de clique
	$('button').trigger('click');

});
