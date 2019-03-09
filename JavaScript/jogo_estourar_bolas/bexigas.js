/*
	 bexigas.js (JavaScript)
	 
	 Objetivo: Projeto do curso de PHP do básico ao profissional.
	 Criar um jogo de estourar bolas com DOM e JavaScript.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 09/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Adicionar bola em uma posição aleatória na tela com o DOM */
function addBola(){

	//Criar uma div bola e adicionar uma classe
	// bola a este elemento
	var bola = document.createElement("div");
	bola.setAttribute("class","bola");

	// Gerar posição aleatória
	x = Math.floor(Math.random()*500);
	y = Math.floor(Math.random()*400);

	// Adicionar as posições a bola
	bola.setAttribute('style','left:'+x+'px; '+'top:'+y+'px;');
	bola.setAttribute('top',y);

	//Adicionar evento de clique a bola
	bola.setAttribute('onclick','estourar(this);')
	
	//Adicionar bola em uma posição
	// aleatória na tela
	document.body.appendChild(bola);
	
}

/* Remover o elemento da tela (estourar bola) */
function estourar(bola){

	// Remover elemento da tela
	document.body.removeChild(bola);
	
	// somar ponto no placar
	pontos = document.getElementById("pontuacao").innerHTML;
	pontos++;

	document.getElementById("pontuacao").innerHTML = pontos;
	

}

/* Iniciar o jogo quando o botão iniciar é clicado */
function iniciarJogo(){
	
	// Ponha uma bola na tela a 
	// cada 1s
	setInterval(addBola,1000);
}
