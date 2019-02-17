/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre mudar texto e estilo de elementos HTML com JQuery.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 17/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

// Mudar texto de elemento 'p' com JQuery
// muda o estilo e texto do botão
function mudaTexto(){ 
	$('#teste p').html("<b>texto mudado!</b>");
	
	$('#teste').find('button').addClass('estilo');

	$('#teste').find('button').html('Desativado');
}


