/*
	 imc.js (JavaScript)
	 
	 Objetivo: Projeto do curso PHP do básico ao profissional.
	Criar uma calculadora de Índice de Massa Copórea (IMC).
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 27/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

$('document').ready(function(){

	// Ao clicar no botão forneça o IMC
	$("#calcularIMC").bind("click",function(){

		peso = $("#peso").val().replace(',','.');

		altura = $('#altura').val().replace(',','.');

		imc = peso/(altura*altura);

		if(imc < 16.99){

			txt = "Baixo Peso";

		}else if(imc < 24.99){

			txt = "Peso Normal";
		}else{

			txt = "Obesidade";
		}

		$("#resultado").html("<p>"+imc+"Kg/m²</p><p>"+txt+"</p>");

	});


});
