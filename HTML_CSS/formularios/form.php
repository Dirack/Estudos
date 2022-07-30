<!DOCTYPE html>
<!--
	Script PHP auxiliar a form.html
	Estudo sobre os tipos de formulários HTML:
		-Text
		-Select
		-Radio
		-Number
		-Textarea
	
	Programador: Rodolfo A. C. Neves 02/11/2018

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
			
			# SQL query a aprtir do SHELL SCRIPT
			# 'cmd' é uma string que recebe um comando 
			# para ser executado no terminal
			$cmd = "mysql -u root -p(sua senha aqui!) << 'END'
			SET NAMES 'utf8';
    			SET character_set_connection=utf8';
    			SET character_set_client=utf8';
    			SET character_set_results=utf8';
			USE cadastro;
			INSERT INTO formulario
			(id,nome,cidade,nacionalidade,sexo,nascimento,comentario)
			VALUES
			(DEFAULT,'$nome','$cidade','$nacionalidade','$sexo','$data','$coments');
			END";

				echo "<h2>Usuário cadastrado com sucesso!</h2><br>
				Nome = $nome<br>
				Cidade = $cidade<br>
				Nacionalidade = $nacionalidade <br>
				Sexo = $sexo<br>
				Data = $data<br>
				Comentário = $coments<br>
				";
				
				$result = shell_exec ( $cmd );
				
				echo "aq=> $result";
			


			?>
		</div>
</div>

</body>
</html>
