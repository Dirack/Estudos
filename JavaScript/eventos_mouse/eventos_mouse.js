/*

	eventos_mouse.js (JavaScript) - Estudo sobre eventos do mouse em JS
	
	Objetivo: Ilustrar os principais eventos de mouse em JS. A saída destes
	eventos é exibida no console através do método log() do objeto console.

	Email: rodolfo_profissional@hotmail.com

	Programador: Rodolfo A. C. Neves (Dirack) 08/02/2019

*/

// onmousedown: Apertou um botão
function apertouMouse(){

	console.log("Apertou o mouse!");

}

// onmouseup: Soltou um botão
function soltouMouse(){

	console.log("soltou o mouse!");

}

// onmouseover: Mouse em cima do objeto
function mouseEmCima(){

	console.log("mouse passou por cima!");

}

// onmouseout: Mouse saiu de cima do objeto
function mouseSaiuCima(){

	console.log("mouse saiu de cima!");

}

// onmousemove: Mouse se move em cima do objeto
function mouseMoveCima(){

	console.log("mouse se move em cima do objeto!");

}

// oncontextmenu: Clicar com o botão direito do mouse
// return false é para não exibir nenhum menu de opções
// depois da execução do código console.log();
function mouseBotaoDireito(){

	console.log("Click com botão direito!");
	return false;

}

// ondblclick: clique duplo
function duploClique(){

	console.log("Click DUPLO!");

}

