/*
	 violao.js (JavaScript)
	 
	 Objetivo: Programa organizar para organizar a vida e os estudos.
	 Funções para manipular as opções do ícone violao.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 04/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){


	// Opções da área violão
	$('#violao').bind('click',function(){

		// Botões para a área violão, aparecem no menu lateral quando o ícone de violão é clicado
		if($('#menu').find('div img').length == 0){
			$('#menu').append('<div class="iconeViolao botaoRepertorio" id="r1Botao" data-botao="1"><img src="icones/r1.png" title="Iniciação ao Violão 1"></div>');
			$('#menu').append('<div class="iconeViolao botaoRepertorio" id="r2Botao" data-botao="2"><img src="icones/r2.png" title="Iniciação ao Violão 2"></div>');
			$('#menu').append('<div class="iconeViolao botaoRepertorio" id="r3Botao" data-botao="3"><img src="icones/r3.png" title="Repertório 3"></div>');
			$('#menu').append('<div class="iconeViolao botaoRepertorio" id="cpBotao" data-botao="CP"><img src="icones/cp.png" title="Curso Progressivo"></div>');
			$('#menu').append('<div class="iconeCavaco botaoCavaco" id="cavacoBotao" data-botao="CAV"><img src="icones/cavaco.png" title="Cavaquinho"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="diaBotao" data-botao="D"><img src="icones/dia.png" title="Diário"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="semanaBotao" data-botao="S"><img src="icones/semana.png" title="Semanal"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="quinzenaBotao" data-botao="Q"><img src="icones/quinzena.png" title="Quinzenal"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="mesBotao" data-botao="M"><img src="icones/mes.png" title="Mensal"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="semestreBotao" data-botao="SEM"><img src="icones/semestre.png" title="Semestral"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="anoBotao" data-botao="A"><img src="icones/ano.png" title="Anual"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="aprenderBotao" data-botao="AP"><img src="icones/aprender.png" title="Aprender"></div>');
			$('#menu').append('<div class="iconeViolao botaoStatus" id="relembrarBotao" data-botao="R"><img src="icones/lembrar.png" title="Relembrar!"></div>');
			
			/* Inserir seletor na canvas */
			// Seletor é uma div com várias opções para alterar os valores de
			// cada música exibida quando selecionado um repertório
			$('#canvas').criarSeletor();
		}


		/* Ação dos botões no menu de opções para a área Violão */

		// Botões (Exibir Repertórios)
		// Solicitação AJAX a rBotao.php
		/*
			Cada botão tem um atributo data-botao a ser passado
			ao 'rBotao.php' via POST. Este atributo é uma chave que
			informa ao PHP qual repertório deverá ser procurado no
			banco de dados e exibido no console na página index.html.
		*/
		$('.iconeViolao.botaoRepertorio, .iconeCavaco.botaoCavaco').bind('click',function(){

			// Retirar o seletor da tela
			$('#seletorScore').fadeOut();

			txt = "chave="+$(this).attr('data-botao');


			$.ajax({
				type:'POST',
				url:'Violaophp/rBotao.php',
				data:txt,
				success:function(resultado){
					$('#console').html(resultado);

					/* Seletor de score, aparece quando o título da música é clicado 
					   E desaparece quando o título da música é clicado novamente.
					   Serve para alterar o score da música em incrementos de 1 */
					$('.musicaTitulo').bind('click',function(){

						/* Função plugin JQuery do script seletor.js */
						// Exibe um seletor de score quando o 
						// título da música é clicado
						$(this).seletor();

						// Deixar o status do seletor pré-selecionado
						// com o mesmo status do título da música
						id = $(this).attr('data-id');

						status = $('#musica-'+id+' .status').html();

						$('#seletorScore select').val(status);

					});

				},

				error:function(){
					$('#canvas').html("violao.js: Erro na solicitação AJAX ao script 'Violaophp/rBotao.php'");
				}

			});

			


		});


		/* Funções dos botões seleção por Status/tempo 
		   Status: Aprender, relembrar,
		   Diário, Semanal, Quinzenal, Mensal, Semestral e Anual.
		   Ao clicar no botão, uma solicitação AJAX é enviada ao
		   script 'statusBotao.php' e ele responderá com as músicas
		   cadastradas pelo critério de status.
		*/
		$('.iconeViolao.botaoStatus').bind('click',function(){

			// Retirar o seletor da tela
			$('#seletorScore').fadeOut();

			txt = "chave="+$(this).attr('data-botao');

			$.ajax({
				type:'POST',
				url:'Violaophp/statusBotao.php',
				data:txt,
				success:function(resultado){
					$('#console').html(resultado);

					/* Seletor de score, aparece quando o título da música é clicado 
					   E desaparece quando o título da música é clicado novamente.
					   Serve para alterar o score da música em incrementos de 1 */
					$('.musicaTitulo').bind('click',function(){

						/* Função plugin JQuery do script seletor.js */
						// Exibe um seletor de score quando o 
						// título da música é clicado
						$(this).seletor();

						// Deixar o status do seletor pré-selecionado
						// com o mesmo status do título da música
						id = $(this).attr('data-id');

						status = $('#musica-'+id+' .status').html();

						$('#seletorScore select').val(status);


					});

				},

				error:function(){
					$('#console').html("violao.js: Erro na solicitação AJAX ao script statusBotao.php");
				}

			});

		});



	});
	
});
