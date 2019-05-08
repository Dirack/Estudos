<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre funções de data e tempo em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 
			Primeira parte 06/05/2019
			Segunda parte 08/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre funções de data e tempo em PHP</title>
</head>
<body>

	<div class="estudoDate">
		<h1>Estudo sobre a função DATE em PHP</h1>
		
		<?php

			/* dia atual de 01-31 */
			$dataAtual=date("d");

			echo "<p>Data atual(dia): ".$dataAtual."</p>";

			/* data no formato dd/mm/aaaa e hora hh:ii:ss */
			$dataAtual=date("d/m/Y \à\s H:i:s");

			echo "<p>Data no formato (dd/mm/aaaa): ".$dataAtual."</p>";


		?>
	</div>

	<div class="estudoTime">

		<h1>Estudo sobre a função TIME em PHP</h1>

		<?php

			/* Tempo em segundos desde 01 JAN 1970 */
			$x = time();

			echo $x."<br>";

			$dataProxima = date('d/m/Y', strtotime('+10 days'));

			echo $dataProxima."<br>";

			$dataProxima = date('d/m/Y', 0);

			echo $dataProxima."<br>";

			$dataProxima = date('d/m/Y', strtotime('+2 days', 0));

			echo $dataProxima."<br>";

		?>
	</div>


</body>
</html>


