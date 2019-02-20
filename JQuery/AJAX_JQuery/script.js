/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre solicitações AJAX com JQuery. Ao clicar no botão
	a div será carregada.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 20/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Carregar div 'carregadaAjax' com AJAX e JQuery */
// O método bind associa eventos a funções
$(document).ready(function(){

	// Carregar arquivo texto na div com AJAX
	$("#teste button:eq(0)").bind("click", function(){
	    
		
		$('#carregadaAjax').load('teste.html');

	});

	// Carregar arquivo texto com o método GET
	$("#teste button:eq(1)").bind("click", function(){
    
		
		$.get("teste2.html",function(t){
			$('#carregadaAjax').html(t);
		});
  	});

	// Carregar arquivo texto com o método POST
	$("#teste button:eq(2)").bind("click", function(){
    
		
		$.post("teste3.html",function(t){
			$('#carregadaAjax').html(t);
		});
  	});
});



