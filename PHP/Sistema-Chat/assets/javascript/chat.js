/*
	 chat.js (JavaScript)
	 
	 Objetivo: Sistema de chat com HTML/CSS, Javascript e PHP.
	 Este script é responsável por abrir o chat quando o botão é
	 clicado, e fechar o chat quando o botão é clicado novamente,
	 ou ainda quando o 'X' no canto superior da tela é clicado.	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 12/05/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

$(document).ready(function(){

	$('.chatBotao').bind('click',function(){

		var displayChat=$('.chat').css('display');

		if (displayChat=='none'){
			$('.chat').fadeIn();
		}else{
			$('.chat').fadeOut();
		}

	});

	$('.botao4').bind('click',function(){

		var displayChat=$('.chat').css('display');

		if (displayChat!='none'){
			$('.chat').fadeOut();
		}

	});

	// Simular chat com eventos de teclado
	// Ao apertar enter a mensagem é enviada
	$('.formMensagem input').bind('keydown',function(e){

		// Ao apertar enter a mensagem é enviada
		// Um script PHP irá cuidar de registrar
		// a mensagem no banco de dados
		if(e.keyCode==13){

			var msg=$(this).val();
			var autor="Dirack";

			txt="autor="+autor+"&mensagem="+msg;

			$.ajax({
				type:'POST',
				url:'assets/php/chat.php',
				data:txt,
				success:function(resultado){

					/* Atualize a área de mensagens */
					$.ajax({
						type:'POST',
						url:'assets/php/mensagens.php',
						data:txt,
						success:function(resultado){
							$('.historicoMensagens').html();
							$('.historicoMensagens').html('<iframe src="./assets/php/mensagens.php#footer" id="frame" class="iframeMensagens"></iframe>');
						},

						error:function(){
							alert("chat.js: Erro na solicitação AJAX ao script chat.php!");
						}

					});					


				},

				error:function(){
					alert("chat.js: Erro na solicitação AJAX ao script chat.php!");
				}

			});




			$(this).val("");
		}

	});

});
