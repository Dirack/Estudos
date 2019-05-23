<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exercício construindo um sistema de tags em PHP.
	O PHP será utilizado para contar quantas vezes a mesma tag foi utilizada
	no banco de dados para atribuir uma característica ao usuário. 
	Em seguida o PHP exibirá a tag, o número de vezes que esta foi utilizada e 
	a tag aparecerá na tela com a fonte na proporção deste número de utilizações.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 23/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Exercício construindo um sistema de tags em PHP</title>
</head>
<body>

	<?php

			//////////// Conexão com banco de dados //////////////////
			try{

				$pdo= new PDO("mysql:dbname=cadastro;host=localhost","root","§");

			}catch(PDOException $e){

				echo "ERRO: ".$e->getMessage();
				exit;

			}

	?>

	<div class="estudoMath">
		<h1>Exercício construindo um sistema de tags em PHP</h1>

	<?php 

		$sql="SELECT tag FROM tags";
		$sql=$pdo->query($sql) or die("Erro na query");

		if($sql->rowCount() > 0){
		
			$lista = $sql->fetchAll();

			$carac = array();

			foreach($lista as $usuario){

				$palavras=explode(',',$usuario['tag']);

				foreach($palavras as $palavra){

					$palavra = trim($palavra);
					
					if(isset($carac[$palavra])){

						$carac[$palavra]++;

					}else{

						$carac[$palavra] = 1;

					}
				}

			}

			arsort($carac);

			$palavras=array_keys($carac);
			$contagem=array_values($carac);

			$maior=max($contagem);

			$tamanhos=array(11,15,20,30);

			for($x=0;$x<count($palavras);$x++){

				$n=$contagem[$x]/$maior;

				$h=ceil($n*count($tamanhos));

				echo "<p style='font-size:".$tamanhos[$h-1]."px;'>".$palavras[$x]." (".$contagem[$x].")</p>";



			}

		}

		

	?>

</body>
</html>

