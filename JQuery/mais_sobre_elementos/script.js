/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre manipulação de elemntos e carregamento de
	 funções com JQuery com foco no evento 'onclick'.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 19/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

// Carregar ações JQuery na página
$('document').ready(function(){

	// Altera texto dentro de input
	$('#teste input').val("teste");

	// Insere conteúdo HTMl depois do elemento
	$('input').after('<div>Conteúdo inserido depois<div>');

	// Insere conteúdo HTML antes do elemento
	$('input').before('<div>Conteúdo inserido antes<div>');

	// Insere conteúdo HTML como último nó filho
	$('ul').append('<li>Item adicionado no final com JQuery</li>');

	// Insere conteúdo HTML como primeiro nó filho
	$('ul').prepend('<li>Item adicionado no começo com JQuery</li>');

	// Selecionar o primeiro elemento da lista
	$('li').eq(0)

	// Adicionar à variavel
	elementoLista = $('li').eq(1);

	// Mudar elemento
	elementoLista.html("Segundo elemento");

	// Remover elemento do HTML TODO: Descomentar!!!
	//$('input').remove();

	// Adicionar texto puro ao elemento as tags HTML <strong>
	// serão escritas meramente como texto
	$('#teste button').on('click',function(){
		$("#teste p").text("<strong>Texto puro</strong>");
	});

});
