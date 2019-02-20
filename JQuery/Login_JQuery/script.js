/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre login a partir de solicitações AJAX com JQuery. 
	Ao clicar no botão um formulário com logine senha será submetido.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 20/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Submeter formulário com AJAX e JQuery */
// O método bind associa eventos a funções
$(document).ready(function(){

	/* Formulário submetido com AJAX
	   preventDefault é para não permitir o recarregamento da página
	   O método 'serialize' formata os dados do formulário em txt
	   'console.log' exibe a saída no console do navegador
	*/
	$("#form").bind("submit", function(e){
	    
		e.preventDefault();

		var txt = $(this).serialize();
		
		console.log(txt);

	});


});



