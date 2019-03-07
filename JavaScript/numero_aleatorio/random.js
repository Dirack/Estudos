/*
	 arrays.js (JavaScript)
	 
	 Objetivo: Estudo gerar números aleatórios em JavaScript.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 07/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

// Mostrar o número digitado pelo usuário em
// uma div numeroDigitado com onkeyup
function mostra(){

	var num = document.getElementById("numero").value;

	document.getElementById("numeroDigitado").innerHTML = num;

}

function gerarAleatorio(){

	// Random gera número aleatório multiplica por 10 para 
	// ficar um número entre 0 e 10, o padrão é entre 0 e 1
	// floor arredonda o número para o inteiro mais próximo
	var aleatorio = Math.floor(Math.random()*10);

	document.getElementById("numeroAleatorio").innerHTML = aleatorio;

}

// Verificar se os números são iguais
function verificar(){

	var aleatorio = document.getElementById("numeroAleatorio").innerHTML;

	var numero = document.getElementById("numero").value;

	if(aleatorio==numero){

		document.getElementById("resultado").innerHTML = "Acertou!";

	}else{

		document.getElementById("resultado").innerHTML = "Errou!";
	}

}
