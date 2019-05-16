<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre upload de arquivos com PHP.
	Esta página recebe o nome do arquivo via formulário e envia
	para o script recebedor.php.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 16/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre upload de arquivos com PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre upload de arquivos com PHP</h1>
		
		<form method="POST" enctype="multipart/form-data" action="recebedor.php">

			<input type="file" name="arquivo"><br><br>

			<input type="submit" value="Enviar">

		</form>

</body>
</html>

