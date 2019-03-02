/*
	 script.js (JavaScript)
	 
	 Objetivo: Projeto do curso PHP profissional do básico ao avançado.
	 Selecionador de hora. Ao focalizar em um campo do formulário as opções de hora aparecem.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 02/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){ 

	$('#selecionador').hide();

	// Recebe o campo focalizado
	var horaEscolhaCampo;	

	// Ao focar em um campo do formulário
	// as opções de hora aparecem
	$('.hora').bind('focus',function(){

		// Recebe a posição do campo focalizado
		var pos = $(this).offset();

		// Recebe a largura do campo focalizado
		var width = $(this).width();

		// Exibe as opções de horas ao lado do campo
		$('#selecionador').css('left',pos.left + width + 5);
		$('#selecionador').css('top',pos.top);

		$('#selecionador').show();

		horaEscolhaCampo = $(this);

	});

	// Ao tirar o foco do campo ele desaparece
	$('.hora').bind('blur',function(){

		// setTimeout retarda o tempo para retirar as opções da tela
		setTimeout(function(){$('#selecionador').hide()},200);
			

	});

	// Põe a hora selecionada no botão no campo focalizado
	$('#selecionador button').bind('click',function(){

		var hora = $(this).html();
		horaEscolhaCampo.val(hora);

	});

	
});
