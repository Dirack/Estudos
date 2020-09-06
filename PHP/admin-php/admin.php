<?php
require('assets/php/connect.php');
require('assets/php/autenticar.php');
?>
<!doctype html>
<!--
	admin.php (PHP)
	
	Objetivo: Página do administrador do site do ranking do mestre dos pulos.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 14/07/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
-->
<head>
	<meta charset="utf-8">
	<title>Bem vindo Administrador!</title>
</head>
<body>

<h2>Tabela de Pontuações dos Usuários</h2>
<?php

	$sql="SELECT * FROM ranking";
	$sql=$pdo->query($sql);

	if($sql->rowCount() > 0){

		?><ul><?php

		foreach($sql->fetchAll() as $p){

			?>
			<li>
			<?php
				if($p['aprovada']=='n'){
					$link="<a href='assets/php/aprovar.php?id=".$p['id']."'>Aprovar</a>";
					echo $p['autor']." ".$p['pontos']." ".$link; 
				}else{
					echo $p['autor']." ".$p['pontos'];
				}
			?></li>
			<?php
		}
		?></ul><?php
	}
	
?>
</body>
</html>
