<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre criptografia em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 10/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre criptografia em PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre criptografia em PHP</h1>
		
		<?php

			$nome = "Dirack";
			$nome2 = md5($nome);

			echo "Nome <nome style='color: blue;'>$nome</nome> criptografado ".
				"em md5: ".$nome2;

		?>
	</div>

</body>
</html>


