<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre exibição de erros em PHP.

	CONFIGURAR O APACHE PARA EXIBIR ERROS: Geralmente o arquivo php.ini 
	fica no seguinte caminho "/etc/php/sua-versão-do-php-aqui/apache2/php.ini". 
	Para editar o arquivo é necessário abri-lo como root (Super usuário), para 
	isso recomendo utilizar a seguinte instrução "sudo nano php.ini", ao abrir o 
	arquivo busque pela flag display_errors apertando CTLR + W, procure pela ocorrência 
	da palavra que não tenha o ";" na frente, ao encontrar atribua "On" para a flag e 
	salve apertando CTRL + O. Após ter feito isso reinicie seu apache com o seguinte 
	comando "sudo /etc/init.d/apache2 restart". 
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 13/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre exibição de erros em PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre exibição de erros em PHP</h1>
		
	<?php

		/* Erro proposital sem '";' */
		echo "Meu nome é Rodolfo	

	?>

</body>
</html>

