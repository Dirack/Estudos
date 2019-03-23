/*
	 tempo.js (JavaScript)
	 
	 Objetivo: Estudo sobre temporização de funções em JavaScript.
	 XXX IMPORTANTE: Não funciona no navegador Firefox. Rodar no Google Chrome.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/*
	clearInterval(timer1) pode ser utilizado para interromper a acao1
	clearTimeout(timer2) pode ser utilizado para interromper a ação 2

*/
/* Executar a ação a cada 2 segundos */
function acao1(){

	document.write("Executou a ação 1 <br>\n");

}

var timer1 = setInterval(acao1,2000);

/* Esperar 10 segundos para executar a ação */
function acao2(){

	document.write("Executou a AÇÃO 2 <br>\n");

}

var timer2 = setTimeout(acao2,10000);
