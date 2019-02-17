/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre seleção de elementos HTML com JQuery.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 17/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

// Elemento botao selecionado
$('button');

// Elemento selecionado pelo ID atribuido à uma variável
var botao = $('#botao1'); 

// Elemento selecionado pela classe
$('.botao');

// Elemento li da classe botao
$('li.botao'); 

// Elemento ul, li da classe botao
$('ul li.botao'); 

// Elemento ul da classe lista2, li da classe botao
$('ul.lista2 li.botao'); 

// Verificação de elementos deve ser feita com length
$(document).ready(function(){ 
	if ($('#botao1').length > 0)
		alert("tem botão na página!");
});


