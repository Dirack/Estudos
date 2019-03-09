/*
	 script.js (JavaScript)
	 
	 Objetivo: Estudo sobre evento disparado quando o usuário
	está saindo da página.

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 08/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

/* Eventos com JQuery */
$(document).ready(function(){ 

$(document).bind("mouseleave", function(e) {
    if (e.pageY - $(window).scrollTop() <= 1) {    
        alert('Tem certeza que quer fechar a aba? :(');
    }
});

	
});
