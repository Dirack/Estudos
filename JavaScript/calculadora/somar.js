/*
	 somar.js (JavaScript)
	 
	 Objetivo: Estudo sobre como somar dois números com JavaScript.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 07/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Somar dois números passados por formulário */
function somar(){

	// parseInt transforma texto em número inteiro
	n1 = parseInt(document.getElementById('n1').value);

	n2 = parseInt(document.getElementById('n2').value);

	soma = n1 + n2;
	
	document.getElementById('resultado').innerHTML = "<p>"+soma+"</p>";

}

