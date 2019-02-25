/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre mudar texto e estilo de elementos HTML com JQuery.
	 O plugin a ser utilizado é o jquey.mask.js que adiciona uma máscara a um
	 campo de um formulário. Útil para formatar o campo enquanto o usuário está
	 digitando como no caso de um CPF ou Data.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 25/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Adicionar máscara ao campo CPF */
$(document).ready(function(){ 

	$('#cpf').mask('000000000-00');

	$('#data').mask('00/00/0000');

	$('#hora').mask('00:00:00');
});


