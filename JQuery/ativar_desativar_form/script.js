/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre como ativar/desativar campo de formulário com JQuery.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 26/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Desabilitando/habilitando campos com JQuery */
$(document).ready(function(){ 

	// Este campo será desabilitado
	$('#cpf').attr('disabled','disabled');

	// Este campo será habilitado
	$('#hora').removeAttr('disabled');

	/* Pode ser que o cache da página faça as instruções abaixo não funcionarem */
	// Este campo será selecionado
	$('#check').prop('checked',true);

	// A mesma lógica pode ser utilizada para retirar a seleçao
	// do campo. Basta descomentar abaixo.
	$('#check').prop('checked',false);

});


