/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre solicitação AJAX completa.
	 O estudo original foi modificado para retornar um 
	 arquivo JSON como resposta a solicitação AJAX.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 24/02/2019
	 
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
	/* A resposta será um arquivo JSON */
	$("#form").bind("submit", function(e){
	    
		e.preventDefault();

		var txt = $(this).serialize();
		
		console.log(txt);

		$.ajax({
			type:'POST',
			url:'ajax.php',
			data:txt,
			dataType:'json',
			success:function(json){
				console.log(json);
			},

		});

	});


});



