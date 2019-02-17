/*
	 testeJquery.js (JavaScript)
	 
	 Objetivo: Estudo sobre JQuery em JavaScript.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 16/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

function tudoPronto(){
	alert("tudo pronto!");
}

function semConflito(){
	alert("sem Conflito!");
}

$(document).ready( function(){
	alert("olá, JQuery!");
});

$(document).ready(tudoPronto);

// Evitar conflito do JQuery
var $j = jQuery.noConflict();

$j(document).ready(semConflito);
