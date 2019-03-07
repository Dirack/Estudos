/*
	 manipular.js (JavaScript)
	 
	 Objetivo: Estudo sobre como manipular lista com JavaScript e DOM.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 07/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Adicionar novo item a lista */
function adicionar(){

	// Texto do formulário a ser adicionado a lista
	item = document.getElementById("itemNovo").value;

	// itemElemento é um novo elemento <li></li>
	itemElemento = document.createElement("li");

	// Cria nó texto em itemElemento <li>texto</li>
	texto = document.createTextNode(item);
	itemElemento.appendChild(texto);

	// Inserindo item na lista como um nó filho da lista <ul>[...]<li>item</li></ul>
	document.getElementById("lista").appendChild(itemElemento);

}

