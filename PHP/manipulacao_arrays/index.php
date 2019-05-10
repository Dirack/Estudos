<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre manipulação de arrays em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 10/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre manipulação de arrays em PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre manipulação de arrays em PHP</h1>
		
		<?php

			/* Construindo um array com as chaves de outro array */
			$array1=array(
				nome=> "Rodolfo",
				sobrenome=> "Neves",
				apelido => "Dirack",
				email=>"rodolfo_profissional@hotmail.com",
				idade=>27,			
				hobbie=>"Tocar Violão"
			);

			/* array com as chaves do array 1 */
			$array2=array_keys($array1);

			print_r($array2);
			echo "<br>";

			/* array com os valores do array1 */
			$array3=array_values($array1);
		
			print_r($array3);
			echo "<br>";

			/* Remover o último item do array */
			array_pop($array1);
			print_r($array1);
			echo "<br>";

			/* Remover o primeiro item do array */
			array_shift($array1);
			print_r($array1);
			echo "<br>";

			/* Ordenar em ordem alfabética dos valores */
			asort($array1);
			print_r($array1);
			echo "<br>";

			/* Reverter a ordem alfabética */
			arsort($array1);
			print_r($array1);	
			echo "<br>";

			/* Contar número de itens do array */
			$alunos=array(
				"jack",
				"Ronilson",
				"Wélerson",
				"Samira"
			);

			echo "Número de alunos: ".count($alunos)."<br>";

			/* Verificar se o registro está presente no array */
			if(in_array("Ronilson",$alunos)){
				echo "Aluno encontrado!<br>";
			}else{
				echo "Aluno não cadastrado!<br>";
			}
		?>
	</div>

</body>
</html>


