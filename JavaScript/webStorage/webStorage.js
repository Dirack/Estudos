/*
	 webStorage.js (JavaScript)
	 
	 Objetivo: Estudo sobre web Storage (armazenar dados de usuário no navegador).
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Exemplo prático: Se o nome de usuário está setado, aparece na tela.
   Se o nome de usuário é desconhecido, pergunte ao usuário */
window.onload = function(){

	var usuario = localStorage.getItem('usuario');

	if(usuario == null){

		var user = prompt('Qual o seu nome?');

		localStorage.setItem('usuario',user);

		paragrafo = document.createElement('p');
		
		texto = document.createTextNode('Seu nome é '+usuario);

		paragrafo.appendChild(texto);

		document.getElementById('seuNome').appendChild(paragrafo);

	}else{

		paragrafo = document.createElement('p');
		
		texto = document.createTextNode('Seu nome é '+usuario);

		paragrafo.appendChild(texto);

		document.getElementById('seuNome').appendChild(paragrafo);

	}
};

/* Guardar nome de usuário no navegador */
localStorage.setItem('Nome','Dirack');

console.log("Nome (setado): "+localStorage.getItem('Nome'));

localStorage.removeItem('Nome');

console.log("Nome (removido): "+localStorage.getItem('Nome'));

/* Forma fácil */
localStorage.Nome = "Dirack";
console.log("Nome (Forma fácil): "+localStorage.getItem('Nome'));
