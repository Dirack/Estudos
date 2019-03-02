/*
	 script.js (JavaScript)
	 
	 Objetivo: Projeto do curso PHP profissional do básico ao avançado.
	 Menu Aple. Menu na parte inferiror da tela, parecendo uma prateleira
	 com vários ícones que crescem quando o mouse passa sobre eles.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 02/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){ 

	// O ícone cresce quando o mouse 
	// estiver sobre ele
	$('.icone').hover(function(){

		$(this).animate({
			'width':100,
			'height': 100,
			'margin-top':-30

		},200);

	},
	function(){

		$(this).animate({
			'width':70,
			'height': 70,
			'margin-top':0

		},200);


	});
	
});
