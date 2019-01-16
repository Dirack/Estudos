<!DOCTYPE html>
<!--
	php2xml.php (PHP)	

	Objetivo: Estudo sobre como gerar arquivo XML a partir de um script PHP.
	Salva um novo comentário em comentarios.xml

	Email: rodolfo_profissional@hotmail.com
	
	Programador: Rodolfo A. C. Neves 16/01/2019
-->
<meta charset="utf-8">
<head>
	<title>Estudo tipos de formulaŕios html</title>
	<!-- Folha de estilo CSS -->
	<style type="text/css">
		body{
			background-color: #aaa;
		}
		
		#caixa_interna{
			background-color: #fff;
			
		}
	
	</style>
</head>

<body>
	<div id="caixa_externa">
		<div id="caixa_interna">

			<?php

			header('Content-Type: text/html; charset=utf-8');

			# Acesse as informações do usuário pelo método GET
			$nome = $_GET["nome"];
			$cidade = $_GET["cidade"];
			$nacionalidade = $_GET["nacionalidade"];
			$sexo = $_GET["sexo"];
			$data = $_GET["data"];
			$coments = $_GET["coments"];

			echo "<h2>Comentário cadastrado com sucesso!</h2><br>
				Nome = $nome<br>
				Cidade = $cidade<br>
				Nacionalidade = $nacionalidade <br>
				Sexo = $sexo<br>
				Data = $data<br>
				Comentário = $coments<br>
				";

			// Receberá todos os dados do XML
			$xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';

			// A raiz do meu documento XML
			$xml .= '<entradas>';

			// Os valores fornecidos pelo usuário através do formulário
			$xml .= "<nome> $nome </nome>";

			$xml .= "<cidade> $cidade </cidade>";

			$xml .= "<data>$data<data>";

			$xml .= "<coment>$coments</coment>";

			// Fechamento da raiz
			$xml .= '</entradas>';

			// Escreve no final do arquivo
			$fp = fopen('comentarios.xml', 'a+');
			fwrite($fp, $xml);
			fclose($fp);

			?>

		</div>
</div>

</body>
</html>
