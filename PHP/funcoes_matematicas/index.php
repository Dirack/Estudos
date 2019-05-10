<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre funções matemáticas do PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 10/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre funções matemáticas do PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre funções matemáticas do PHP</h1>
		
		<?php

			/* Valor absoluto de um número */
			echo "Abs de -10: ".abs(-10)."<br>";

			/* Arredondar número */
			echo "Arredondar número: ".round(2.3)."<br>";

			/* Arredondar para cima */
			echo "Arredondar para cima: ".ceil(2.1)."<br>";

			/* Arredondar para baixo */
			echo "Arredondar para baixo: ".floor(2.999)."<br>";

			/* Gera número aleatório entre 1 e 3 */
			echo "Gerar número aleatório: ".rand(0, 3)."<br>";

			/* Exemplo: Simulação de sorteio */
			$lista = array('Rodolfo','Jack','Danilo','Rafael');

			$x = rand(0,3);

			echo "O sorteado é: ".$lista[$x];



		?>
	</div>

</body>
</html>


