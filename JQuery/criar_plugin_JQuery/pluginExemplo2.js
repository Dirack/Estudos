/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre como criar um plugin para JQuery.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 25/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Plugin criado pelo usuário */
(function($){

	$.fn.mudarCor = function(cor){

		$(this).each(function(){

			$(this).css('color',cor);

		});

		return this;

	}

}(jQuery));

