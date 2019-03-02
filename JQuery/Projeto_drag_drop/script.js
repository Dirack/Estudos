/*
	 script.js (JavaScript)
	 
	 Objetivo:  Projeto do curso PHP profissional do básico ao avançado.
	 Drag e Drop com JQuery. O quadrado na tela pode ser arrastado pelo
	 usuário; basta clicar, arrastar e soltar.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 02/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(function(){ 

	// Clicar e arrastar objeto
	$('#objeto').bind('mousedown',function(){

		$('#objeto').bind('mousemove',function(e){

			// Posição do cursor do mouse
			// width e height ajudam a selecionar
			// o centro do quadrado
			var x = e.originalEvent.pageX-($(this).width()/2);
			var y = e.originalEvent.pageY-($(this).height()/2);

			// Altere a posição do elemento para
			// a nova posição
			$(this).css('left',x+"px");
			$(this).css('top',y+"px");

		});

	});

	// Soltar objeto
	$('#objeto').bind('mouseup',function(){

		$('#objeto').off('mousemove');
		$('#objeto').off('mouseover');

	});

	
});
