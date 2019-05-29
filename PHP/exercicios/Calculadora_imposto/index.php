<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Calculadora simples de taxa de imposto. 
	Exercício do módulo de PHP intermediário
	do curso PHP profissional do professor Bonieky.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 29/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
-->
<head>
	<meta charset="utf-8">
	<title>Calculadora simples de taxa de imposto</title>
</head>
<body>

	<form method="POST">
		Calculadora de imposto<br>
		Valor do produto:<br><input type="text" name="valorProduto" required><br>
		Taxa de imposto (em %):<br><input type="text" name="taxaImposto" required><br>
		<input type="submit" value="Calcular"><br><br>
	</form>

	<?php

		if(isset($_POST['valorProduto']) && !empty($_POST['valorProduto'])){

			$valorProduto = $_POST['valorProduto'];
			$taxaImposto = $_POST['taxaImposto'];

			$valorImposto = $valorProduto * $taxaImposto/100;

			$valorProdutoSemImposto = $valorProduto - $valorImposto;

			echo "Valor do Produto: R$".$valorProduto."<br>";
			echo "Taxa de Imposto: R$".$taxaImposto."<br>";
			echo "<hr><br>";
			echo "Imposto: R$".$valorImposto."<br>";
			echo "Produto: R$".$valorProdutoSemImposto."<br>";		

	
		}

	?>



</body>
</html>

