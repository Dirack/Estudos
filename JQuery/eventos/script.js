/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre eventos em JQuery.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 02/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){ 

	/* Evento scroll e resize */
	// Ao fazer a rolagem da barra na div scroll, uma resposta
	// é enviada ao console 'scrolling'
	$('#scroll').bind('scroll',function(){

		console.log('scrolling');

	});

	// Ao redimensionar a janela uma resposta é enviada ao console
	$(window).bind('resize',function(){

		console.log('resizing');

	});
	

	/* Eventos de formulário */

	// Ao submeter o formulário envie uma mensagem ao console
	$('form').bind('submit',function(e){

		e.preventDefault();

		console.log('Formulário enviado!');

	});

	// Quando selecionar algo dentro do campo nome do formulário
	$('#nome').bind('select',function(){

		console.log('Algo foi selecionado dentro de nome');

	});

	// Evento de foco (FOCUS): Ao focar em um campo do formulário
	// muda o estilo do campo para o estilo novo
	$('#nome,#email').bind('focus',function(){

		$(this).addClass('focado');

	});

	// Evento de desfoque (BLUR): Ao desfocar em um campo do formulário
	// muda o estilo do campo para o estilo anterior
	$('#nome,#email').bind('blur',function(){

		$(this).removeClass('focado');	

	});

	// Evento 'change'
	// Quando a opção for alterada no select exiba uma 
	// mensagem no console com o novo valor de idade
	$('#idade').bind('change',function(){

		console.log("Idade alterada para: "+$(this).val());

	});

	/* Eventos do teclado */
	// e.keyCode número da tecla apertada

	// Apertar uma tecla
	$('#email').bind('keydown',function(e){

		console.log("Apertou uma tecla: "+e.keyCode);

	});

	// Soltar uma tecla
	$('#email').bind('keyup',function(e){

		console.log("Soltou uma tecla: "+e.keyCode);

	});

	// Simular chat com eventos de teclado
	// Mensagem é exibida no console
	$('#chat').bind('keydown',function(e){

		if(e.keyCode==13){
			console.log($(this).val());
			$(this).val("");
		}

	});

	/* Eventos Mouse */

	// apertou o botão de clique sobre o elemento	
	$('#eventosMouse').bind('mousedown',function(){

		console.log('Apertou o mouse');

	});

	// soltou o botão de clique sobre o elemento
	// semelhante ao evento 'onclick'
	$('#eventosMouse').bind('mouseup',function(){

		console.log('soltou o mouse!');

	});

	// mouse se move sobre o elemento
	$('#eventosMouse').bind('mousemove',function(){

		console.log('Mouse movendo sobre a div!');

	});

	// dois cliques sobre o elemento
	$('#eventosMouse').bind('dblclick',function(){

		console.log('clique duplo!');

	});

	// Mouse sobre a div
	$('#eventosMouse').bind('mouseover',function(){

		$(this).addClass('mouse_emcima');

	});

	// mouse fora da div
	$('#eventosMouse').bind('mouseout',function(){

		$(this).removeClass('mouse_emcima');

	});

});
