/*
	 script.js (JavaScript)
	 
	 Objetivo: Projeto do curso PHP profissional do básico ao avançado.
	 Album de fotos lightbox. Ao clicar na imagem a foto é exibida na 
	 parte central da tela e o background é escurecido.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 02/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){ 


	// Ao clicar na imagem da galeria a lightbox
	// aparecerá com a respectiva imagem no centro
	$('a.galeria').bind('click',function(){

		// Qual a imagem clicada?
		var img = $(this).find('img').attr('src');

		// Aparece a lightbox
		$('#bgbox, #imgbox').fadeIn();

		// Botar imagem no centro da lightbox
		$('#imgbox img').attr('src',img);

	});

	// clicar no botão fechar para apagar a lightbox
	$('#botaoFechar').bind('click',function(){

		$('#bgbox, #imgbox').fadeOut();

	});
	
});
