/*
	 script.js (JavaScript)
	 
	 Objetivo: Programa organizar para organizar a vida e os estudos.
	 Tem um menu inferior com cada área da vida. Cada botão deste menu
	 ativa um console e um menu lateral com opções daquela área que exibe
	 as atividades da área da vida selecionada por categoria.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 03/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){


	/* O ícone cresce quando o mouse está sobre ele */
	$('.icone').hover(function(){

		$(this).animate({
			'width':100,
			'height': 100,
			'margin-top':-30

		},200);

	},
	function(){

		$(this).animate({
			'width':70,
			'height': 70,
			'margin-top':0

		},200);


	});

	/* Aparecer/Desaparecer menu e console ao clicar em qualquer ícone do menu inferior */
	$('.icone').bind('click',function(){

		if($('#canvas').css('display')=='none'){

			/* Exibir hora e data no console */
			var data = new Date(),

			// Formatar data
			dia  = data.getDate().toString(),
			diaF = (dia.length == 1) ? '0'+dia : dia,
			mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
			mesF = (mes.length == 1) ? '0'+mes : mes,
			anoF = data.getFullYear();

			// Mostrar menu e o console
			$('#canvas,#menu,#console').fadeIn('slow');

			/* Exibir hora no console */
			hora = data.getHours().toString(); // 0-23
			minu= data.getMinutes().toString(); // 0-59
			seg= data.getSeconds().toString(); // 0-59

			// Formatar hora
			var horaF = (hora.length==1) ? '0'+hora : hora;          
			var minuF = (minu.length==1) ? '0'+minu : minu;        
			var segF = (seg.length==1) ? '0'+seg : seg;        
			var tempo = horaF+":"+minuF+":"+segF; 

			// Exibir data e hora formatadas no topo do console
			if($('#data').length==0){
		    		$('#canvas').prepend("<div id='data'><h3>[Rodolfo Dirack em "+diaF+"/"+mesF+"/"+anoF+" às "+tempo+" ]</h3></div>");
			}else{

				$('#data').html("<h3>[Rodolfo Dirack em "+diaF+"/"+mesF+"/"+anoF+" às "+tempo+" ]</h3>");

			}

		}else{

			$('#canvas,#menu').fadeOut('slow');
			$('#menu').html('<h3>Opções</h3>');

		}


	});


	
	
});
