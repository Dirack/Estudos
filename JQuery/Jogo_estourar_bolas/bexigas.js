/*
	 bexigas.js (JavaScript)
	 
	 Objetivo: Projeto do curso de PHP do básico ao profissional.
	 Criar um jogo de estourar bexigas.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 01/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/


/* Atualiza a pontuação atual */
function atualizaPontos(){

	pontos = $('#pontuacao').html();

	pontos++;

	$('#pontuacao').html(pontos);

}

/* Adicionar bola na tela */
function addBola(){

	// Posição x e y aleatória da bola na tela
	// Math.floor arredonda para inteiro
	// Math.random gera número aleatório
	var x = Math.floor(Math.random()*800);

	var y = Math.floor(Math.random()*500);

	var bola = $('<div class="bola"></div>');

	// Posição da nova bola na tela
	bola.css('left',x+'px');
	bola.css('top',y+'px');

	// Cor da bolas
	// Número aleatório de 1 a 4
	var cor = Math.floor(Math.random()*5);

	// Escolhe a cor baseada no número
	switch(cor){
	case 1:
		bola.css('background-color','red');
		break;
	case 2:
		bola.css('background-color','blue');
		break;
	case 3:
		bola.css('background-color','yellow');
		break;
	case 4:
		bola.css('background-color','green');
		break;
	}

	// Coloca a nova bola na tela
	$(document.body).append(bola);

	/* Adicionar o evento 'onclick' as bolas */
	$('.bola').bind('mouseover',function(){

		// Bola some da tela ao ser clicada
		$(this).fadeOut('fast');

		atualizaPontos();

	});

}



/* funções do jogo */
$(function(){

	/* Iniciar partida */
	$('#comecar').bind('click',function(){

		// A cada 1s adiciona uma bola na tela
		var partida = setInterval(addBola,500);

		// Cada Partida dura 10s
		setTimeout(function fim(){
			if(i>0){
				 clearInterval(partida);
				alert("Game Over!\nPontuação: "+$('#pontuacao').html());
				$('#pontuacao').html("0");
			}
		},10000);

		i=1;

	});


});


