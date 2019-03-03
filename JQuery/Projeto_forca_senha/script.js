/*
	 script.js (JavaScript)
	 
	 Objetivo: Projeto do curso PHP profissional do básico ao avançado.
	Força de senha. Calcula a força da senha digitada.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 02/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){ 

	// Ao digitar verifique a força da senha
	$('#senha').bind('keyup',function(){

		var txt = $(this).val(); // Senha digitada

		var forca = 0; // Força da senha

		// Expressão regular para verificar 
		// se senha contém números
		var reg1 = new RegExp(/[0-9]/i); 

		// Expressão regular para verificar 
		// se senha contém caracteres especiais
		var reg2 = new RegExp(/[^a-z0-9]/i); 

		// Senha tem mais de 5 caracteres?
		if(txt.length > 5){

			forca += 30;

		}
		
		// Tem número?
		if(reg1.test(txt)){

			forca+=35;

		}

		// Tem caracteres especiais?
		if(reg2.test(txt)){

			forca+=35;

		}

		$('#resultado').html("<p>Força: "+forca+"%</p><p>Senha: "+txt+"</p>");

	});
	
});
