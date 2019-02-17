/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre a manipulação de atributos com JQuery.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 17/02/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* 
   Mude o atributo da tag 'a' com JQuery.
   Utilize o método 'attr' para acessar atributos:
  	$('tag').attr('atributo','valor');

   Se eu não passar nenhum valor para o atributo, ele apenas informa
   o atributo atual:
	$('tag').attr('atributo');
*/
$('document').ready(function(){

	// Mude o valor do atributo 'href'
	$('a').attr('href','http://www.dirackslounge.online');

	// Informe o valor atual do atributo 'href'
	alert($('a').attr('href'));
});
