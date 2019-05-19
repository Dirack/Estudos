<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exercício calculadora básica em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 19/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Exercício calculadora básica em PHP</title>
</head>
<body>


	<div class="estudoMath">
		<h1>Exercício calculadora básica em PHP</h1>
		
	<form method="GET" action="calculadoraBasica.php">

		<input type="number" name="numero1" required>
		<select name="operacaoMatematica">
			<option value="+" selected>+</option>
			<option value="-">-</option>
			<option value="*">*</option>
			<option value="/">/</option>
		</select>
		<input type="number" name="numero2" required>

		<input type="submit" value="Calcular">

	</form>

</body>
</html>

