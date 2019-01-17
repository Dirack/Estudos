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

			// Acesse as informações do usuário pelo método GET
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

			// Separe o conteúdo dos comentários antigos na variável c
			$conteudo = file_get_contents("comentarios.xml");
			$b = explode('<entradas>',$conteudo);
			$c = explode('</entradas>',$b[1]);
	
			// xml receberá o comentário novo
			$xml = '<?xml version="1.0" encoding="UTF-8"?>';

			// A tag <entradas> marca o começo e o fim do arquivo XML
			$xml .= '<entradas>';

			// Os valores fornecidos pelo usuário através do formulário
			// para o comentário novo
			$xml .= "<entrada><nome> $nome </nome>";
			$xml .= "<cidade> $cidade </cidade>";
			$xml .= "<nacionalidade> $nacionalidade </nacionalidade>";
			$xml .= "<sexo> $sexo </sexo>";
			$xml .= "<data>$data</data>";
			$xml .= "<comentario>$coments</comentario></entrada>";

			// Adicione os comentários antigos aos novos
			$xml .= $c[0];

			// Fechamento da tag <entradas> marca o fim do arquivo
			$xml .= '</entradas>';

			//Apaga a versão antiga do arquivo e cria uma nova
			unlink("comentarios.xml");

			// Escreve nova versão do arquivo xml
			$fp = fopen('comentarios.xml', 'a+');
			fwrite($fp, $xml);
			fclose($fp);
			?>

		</div>
</div>

</body>
</html>
