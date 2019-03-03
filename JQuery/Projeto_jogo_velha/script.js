/*
	 script.js (JavaScript)
	 
	 Objetivo: Projeto do curso PHP profissional do básico ao avançado.
	 Jogo da velha.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 02/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/


// Armazenar a vez de quem é
var vez = 'o';

// Atualiza a imagem de que é a vez
function atualizaPlacar(){

	if(vez == "o"){

		$('#placar').attr('src','o.jpg');

	}else{

		$('#placar').attr('src','x.jpg');

	}
}

// Limpa o tabuleiro
function novoJogo(){
	$('.celula').html('');
	$('.celula').attr('data-marcado','');
}

// Verifica se alguém ganhou
function verificaCampeao(){

	// Recebe quem marcou cada célula
	var a1 = $('#a1').attr('data-marcado');
	var a2 = $('#a2').attr('data-marcado');
	var a3 = $('#a3').attr('data-marcado');

	var b1 = $('#b1').attr('data-marcado');
	var b2 = $('#b2').attr('data-marcado');
	var b3 = $('#b3').attr('data-marcado');

	var c1 = $('#c1').attr('data-marcado');
	var c2 = $('#c2').attr('data-marcado');
	var c3 = $('#c3').attr('data-marcado');


	// Verifica os padões de vitória horizontais
	if(a1!='' && a1==a2 && a1==a3){
		alert("Ganhador: "+a1);
		novoJogo();
	}else if (b1!='' && b1==b2 && b1==b3){
		alert("Ganhador: "+b1);
		novoJogo();
	}else if (c1!='' && c1==c2 && c1==c3){
		alert("Ganhador: "+c1);
		novoJogo();
	}

	// Verifica os padrões de vitória vertical
	if(a1!='' && a1==b1 && a1==c1){
		alert("Ganhador: "+a1);
		novoJogo();
	}else if (a2!='' && a2==b2 && a2==c2){
		alert("Ganhador: "+a2);
		novoJogo();
	}else if (a3!='' && a3==b3 && a3==c3){
		alert("Ganhador: "+a3);
		novoJogo();
	}

	// Verifica os padrões de vitória diagonal
	if(b2!='' && a1==b2 && b2==c3){
		alert("Ganhador: "+b2);
		novoJogo();
	}else if (b2!='' && c1==b2 && b2==a3){
		alert("Ganhador: "+b2);
		novoJogo();
	}

	// Verifica o empate
	if($('.celula').find('img').length==9){
		alert('empate');
		novoJogo();
	}

}

/* Eventos com JQuery */
$(function(){ 

	// Ao clicar em uma célula dispare este evento
	$('.celula').bind('click',function(){

		// Atualiza a imagem no placar
		//atualizaPlacar();

		// se a célula está vazia, preencha
		if($(this).find('img').length == 0){

			// Verifique de quem é a vez e preencha a célula com a imagem correspondente
			if(vez=="o"){

				$(this).html("<img src='o.jpg' width='50px' height='50px'>");
				$(this).attr('data-marcado','o');
				vez = "x";

			}else{

				$(this).html("<img src='x.jpg' width='50px' height='50px'>");
				$(this).attr('data-marcado','x');
				vez = "o";
			}

			// Atualiza a imagem de quem é a vez no placar
			atualizaPlacar();

			// Verifica se alguém ganhou
			verificaCampeao();

		}

	});


	
});
