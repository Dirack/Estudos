/*
	eventos_teclado.js (JavaScript) - Script de eventos_teclado.html

	Objetivo: Estudo sobre eventos do teclado em JS.
	Exemplificar os eventos do teclado em JavaScript. 
	Aula do	curso PHP do zero ao profissional.

	Programador: Rodolfo A. C. Neves (Dirack) 08/02/2019

	Email: rodolfo_profissional@hotmail.com

*/

// evento.keyCode: a tecla que foi apertada

// onkeydown: apertou a tecla
function apertouTecla(event){

	console.log("Apertou: "+event.keyCode);

}

// onkeyup: apertou e soltou a tecla
function soltouTecla(event){

	console.log("soltou: "+event.keyCode);

}

// onkeypress: pressionou a tecla
function pressTecla(event){

	console.log("Pressionou: "+event.keyCode);

}

// onkeydown: apertou a tecla
function apertoushiftE(event){

	if(event.shiftKey == true && event.keyCode == 69)
		console.log("Apertou shift + E");

}
