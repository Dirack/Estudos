/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre solicitação AJAX completa.
	 Dois números enviados pelo AJAX serão somados em um script PHP
	 e a resposta será retornada à página HTML.

	*A solicitação AJAX pelo JQuery utiliza um arquivo no formato JSON.
	 
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

		$.ajax({
			type:'GET',
			url:'ajax.php',
			data:txt,
			success:function(resultado){
				$('#respostaAjax').html("Resultado: "+resultado);
			},

			error:function(){
				alert("erro na solicitação AJAX");
			}

		});

	});


});



