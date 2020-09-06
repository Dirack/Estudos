/*
	 seletor.js (JavaScript)
	 
	 Objetivo: Função para manipular o objeto seletor de score da página index.html
	 Ao clicar no título de uma música do repertório, este script exibe um seletor
	 que permite alterar o score (pontuação) daquela música.

	 Este script funciona como um Plugin do JQuery criado pelo programador.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 05/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Plugin criado pelo programador */
// Esta função será inserida no JQuery e poderá 
// ser utilizada como um objeto JQuery qualquer
(function($){

	// Função para criar uma div seletor em um elemento
	$.fn.criarSeletor = function(){

		// Adicionar div seletor 
		if($('#seletorScore').length==0){

			$(this).append('<div id="seletorScore"></div>');

			// Adicionar botão de alteração de score a div seletor
			$('#seletorScore').append('Alterar score:<br><button>+1</button><button>-1</button><br>');

			// Adicionar botão de alteração de status
			$('#seletorScore').append('Alterar status:<br><select></select> ');

			$('#seletorScore select').append('<option value="AP">Aprender(AP)</option>');
			$('#seletorScore select').append('<option value="R">Relembrar(R)</option>');
			$('#seletorScore select').append('<option value="D">Diário(D)</option>');
			$('#seletorScore select').append('<option value="S">Semanal(S)</option>');
			$('#seletorScore select').append('<option value="Q">Quinzenal(Q)</option>');
			$('#seletorScore select').append('<option value="M">Mensal(M)</option>');
			$('#seletorScore select').append('<option value="SEM">Semestral(SEM)</option>');
			$('#seletorScore select').append('<option value="A">Anual(A)</option>');

			// Adicionar botão de alteração de data de revisão
			$('#seletorScore').append('Próxima revisão (DD/MM/AAAA):<br><input type="text" name="revisao" id="dataRevisao">');

			$('#dataRevisao').mask('00/00/0000');

			// Adicionar área de alteração de feedback
			$('#seletorScore').append('Feedback:<br><input type="text" id="feedback">');
		}

	}

	$.fn.seletor = function(){


		// Recebe a posição do título da música
		var pos = $(this).offset();

		// Recebe a largura do elemento título da música
		var width = $(this).width();

		// Exibe as opções de score ao lado do título da música
		$('#seletorScore').css('left',pos.left +width-300);
		$('#seletorScore').css('top',pos.top-20);

		/* Aparecer/Desaparecer seletor */
		if($('#seletorScore').css('display')=='none'){

			// Seletor aparece
			$('#seletorScore').fadeIn();

			//Recebe o score atual
			var score = $(this).attr('data-score');

			//recebe o id da música
			var id = $(this).attr('data-id');

			// Armazene score e id no próprio seletor
			$('#seletorScore').attr('data-score',score);
			$('#seletorScore').attr('data-id',id);

			/* Os Botões de seleção incrementam/decrementam o score */
			$('#seletorScore button').bind('click',function(){

				// Incremento/decremento do botão
				incremento = $(this).html();

				// Score atual armazenado no seletor
				score = $('#seletorScore').attr('data-score');

				if(incremento=="+1"){

					score++;

				}else{
					score--;
				}

				id = $('#seletorScore').attr('data-id');
				txt = "score="+score+"&id="+id;


				/* Solicitação AJAX ao script score.php
				   Atualiza a pontuação (score) no banco de dados*/
				$.ajax({
					type:'POST',
					url:'Violaophp/score.php',
					data:txt,
					success:function(resultado){

						// Altera o score no seletor
						$('#seletorScore').attr('data-score',score);

						// Altera o score na página
						$('#musica-'+id+' .score').html(score);
					},

					error:function(){
						alert("violao.js: Erro na solicitação AJAX ao script score.php");
					}

				});

			});

			// Botão de seleção de status ao alterar o status ele será
			// alterado também na música escolhida, dinamicamente
			$('#seletorScore select').bind('change',function(){

				id = $('#seletorScore').attr('data-id');

				status= $(this).val();				

				txt="status="+status+"&id="+id;

				/* Solicitação AJAX ao script status.php
				   Atualiza o status da música no banco de dados*/
				$.ajax({
					type:'POST',
					url:'Violaophp/status.php',
					data:txt,
					success:function(resultado){

						// Altera o status na página
						$('#musica-'+id+' .status').html(status);
					},

					error:function(){
						alert("violao.js: Erro na solicitação AJAX ao script status.php");
					}

				});

				

			});

			// Seleção de data de revisão: ao alterar a data no seletor
			// da música escolhida, esta será alterada dinamicamente
			$('#dataRevisao').bind('focus',function(){

				// Ao apertar enter a data é atualizado
				$('#dataRevisao').bind('keydown',function(e){

					if(e.keyCode==13){

						id = $('#seletorScore').attr('data-id');

						data= $(this).val();

						validador ="";

						/* Validar a data */
						// Expressão regular para verificar 
						// se a data contém apenas números e barra invertida
						// no formato DD/MM/AAAA
						var reg1 = new RegExp(/\d\d\/\d\d\/\d\d\d\d/i);		

						/* A alteração só será feita se uma data válida foi passada */
						if(reg1.test(data)){

							data = data.split('/');

							txt="data="+data[2]+'-'+data[1]+'-'+data[0]+"&id="+id;

							/* Solicitação AJAX ao script status.php
							   Atualiza o status da música no banco de dados*/
							$.ajax({
								type:'POST',
								url:'Violaophp/data.php',
								data:txt,
								success:function(resultado){

									// Altera a data na página
									// Formatar data
									//data = data.split('-');
									dataF = data[0]+"/"+data[1]+"/"+data[2];
									$('#musica-'+id+' .data').html(dataF);
								},

								error:function(){
									alert("violao.js: Erro na solicitação AJAX ao script data.php");
								}
					

							});
						}else{
							// Se a data for inválida ressalte o formulário
							$(this).css('border','2px solid #ff0000');
						}

					}

				});

			});

			// Área de feedback: ao alterar a data no seletor
			// da música escolhida, esta será alterada dinamicamente
			$('#feedback').bind('focus',function(){

				// Ao apertar enter o feedback é atualizado
				$('#feedback').bind('keydown',function(e){

					if(e.keyCode==13){

						id = $('#seletorScore').attr('data-id');

						feedback= $(this).val();				

						txt="feedback="+feedback+"&id="+id;


						/* Solicitação AJAX ao script status.php
						   Atualiza o status da música no banco de dados*/
						$.ajax({
								type:'POST',
								url:'Violaophp/feedback.php',
								data:txt,
								success:function(resultado){

									// Altera o status na página
									$('#musica-'+id+' .feedback').html(feedback);
								},

								error:function(){
									alert("violao.js: Erro na solicitação AJAX ao script feedback.php");
								}

						});
					}

				});

			});

		}else{
			$('#seletorScore').fadeOut();
		}

	}

}(jQuery));
