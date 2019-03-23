/*
	 objetos.js (JavaScript)
	 
	 Objetivo: Estudo de Introdução a orientação a objetos em JS.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

function animal(nome,tipo,raca,idade){

	/* Propriedades do objeto animal */
	this.nome = nome;
	this.tipo = tipo;
	this.raca = raca;
	this.idade = idade;

	/* Métodos dos animais */
	this.fazerXixi = function(){

		txt = this.nome.toString()+" está mijando!";

		texto = document.createTextNode(txt);

		paragrafo = document.createElement("P");

		paragrafo.appendChild(texto);

		document.body.appendChild(paragrafo);

	}

	this.barulho = function(){

		switch(this.tipo.toString()){
		case 'Cão':
			barulho = "Au, Au!";
			break;
		case 'Gato':
			barulho = "Miau!";
			break;
		default:
			barulho = "Animal desconhecido!";
			break;
		}

		alert(barulho);
	}

}

/* Instanciar o objeto animal */
var lulu = new animal('Lulu','Cão','pastor alemão',12);
var xuxu = new animal('Xuxu','Gato','Siamês',10);

