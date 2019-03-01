/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre efeitos e animações com JQuery.

	 Link mudar cor em animate: https://alunos.b7web.com.br/discussions/open/1722

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 01/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Efeitos com JQuery */
$(document).ready(function(){ 

	// Aparecer e desaparecer devagar
	$('div').hide('slow');

	$('div').show('slow');

	// Efeito Toggle
	// Se o elemento estiver visível, desaparece
	// Se o elemento estiver escondido, aparece
	$('#toggle').bind('click', function(){

		$('#teste').toggle('slow');

	});

	// Efeito Fade
	// Controla o aparecimento/desaparecimento
	// Através da opacidade
	$('#fade').bind('click', function(){

		if($('#teste').css('display')=='none'){
			$('#teste').fadeIn('slow');
		}else{
			$('#teste').fadeOut('slow');
		}
	});

	// Dá para utilizar o fade até um determinado valor
	// Exemplo: fadeTo('slow',0.5);
	// O fadeToggle também funciona: fadeToggle('slow');

	// Efeito slide
	$('#slide').bind('click', function(){

		$('#teste').slideToggle('slow');

	});

	/* Efeito de animações */
	// O primeiro parâmetro a ser passado a animate é um JSON
	// com as propriedades CSS a serem alteradas
	// O segundo parâmetro é a duração da animação em milisegundos
	$('#animacao').bind('click', function(){

		$('#teste').animate({
			'margin-left': 100,
			'margin-top': 200,
			'width': 50,
			'height': 50
		},1000);

	});

	/* Animação Direita Esquerda */
	// Cada vez que o botão é clicado
	// o elemento anda 50px de para a direita
	// ou 50px para a esquerda
	$('#irDireita').bind('click', function(){

		$('#teste').animate({
			'margin-left': "+=50"
		},500);

	});

	$('#irEsquerda').bind('click', function(){

		$('#teste').animate({
			'margin-left': "-=50"
		},500);

	});


	/* Efeito de animações mais elaborado */
	// O primeiro parâmetro a ser passado a animate é um JSON
	// com as propriedades CSS a serem alteradas
	// O segundo parâmetro é um JSON com a duração (duration)
	// e funções de resposta (a ordem não importa):
	// step é uma função chamada a cada etapa executada
	// start é uma função chamada no início da execução
	// complete é uma função chamada no final da execução
	$('#animacaoElaborada').bind('click', function(){

		$('#teste').animate({
			'margin-left': 100,
			'margin-top': 200,
			'width': 50,
			'height': 50
		},{
			duration:1000,
			step:function(){
				console.log("Etapa concluída");
			},
			start:function(){
				console.log("Animação Iniciada!");
			},

			complete:function(){
				console.log("Animação finalizada!");
			}

		});

	});

	/* Parar animação */
	$('#pararAnimacao').bind('click', function(){

		$('#teste').stop();

	});

});
