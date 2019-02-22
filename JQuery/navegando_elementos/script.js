/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre navegação e seleção de elementos com JQuery.
	 A navegação segue uma lógica hierárquica semelhante a uma árvore 
	 genealógica. O elemento que contém é o elemento pai, o que é contido
	 é o elemento filho.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 20/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Manipular elementos com JQuery */
$(document).ready(function(){

	// 3 formas de navegar para a div id="Pai"
	divPai = $('#filho').parent();

	divPai = $('body').find('div').eq(0);

	divPai = $('.filho').closest('div'); 

	//Encontrar filho a partir do pai
	spanFilho = $('#pai').find('span').eq(0);

	//Encontrar irmão a partir do pai
	spanIrmao = $('#pai').find('span').eq(1);
	

});



