<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre manipulação de texto em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 10/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre manipulação de texto em PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre manipulação de texto em PHP</h1>
		
		<?php

			/* Separação de string */
			$nome="Rodolfo André Cardoso Neves";
			
			print_r(explode(" ", $nome));

			/* Concatenação de string */
			$nomeSeparado=array("Rodolfo", "Dirack");

			$nomeJunto=implode(" ", $nomeSeparado);

			echo "<br>".$nomeJunto."<br>";

			/* Formatar casas decimais de número */
			$x = number_format(444443.949371572359,2, ",", ".");

			echo $x."<br>";

			/* Trocar string por outra */
			$texto="O rato roeu a roupa do rei de roma!";

			$trocada=str_replace("roeu","<trocada style='color: red;'>comeu</trocada>",$texto);

			echo $trocada."<br>";

			/* Manipular caixa do texto */
			echo strtolower("TOLOWER: OI TUDO BLZ?")."<br>";

			echo strtoupper("toupper: oi tudo blz?")."<br>";

			/* Selecione os caracteres de 2-4 */
			$subString=substr($texto, 2,4);

			echo $subString."<br>";
		

		?>
	</div>

</body>
</html>


