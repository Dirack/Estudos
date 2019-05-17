<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre upload múltiplo de arquivos com PHP.
	Esta página recebe os arquivos enviados via formulário
	na página index.php.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 17/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre upload múltiplo de arquivos com PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre upload múltiplo de arquivos com PHP</h1>
		
		<form method="POST" enctype="multipart/form-data" action="recebedor.php" >

			<!-- 'multiple' permite o upload de vários arquivos -->
			<!-- 'arquivo[]' é um array com os arquivos escolhidos -->
			<input type="file" name="arquivo[]" multiple><br><br>

			<input type="submit" value="Enviar">

		</form>
	
	<pre>
	<!-- Exibir array 'arquivo[]' enviado -->
	<?php print_r($_FILES); ?>
	</pre>

</body>
</html>

