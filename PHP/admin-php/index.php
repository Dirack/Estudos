<?php
require('assets/php/connect.php');
require('assets/php/pontuacoes.php');
?>
<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Página principal do site. Simulação de uma seção de administrador com PHP.
	Neste projeto, os usuário devem poder enviar pontuações de um jogo hipotético que
	serão exibidas na página. Porém, um moderador será responsável por aprovar estas
	pontuações e validá-las.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 13/07/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
-->
<head>
	<meta charset="utf-8">
	<title>Página principal do ranking do jogo "Mestre dos Pulos"</title>
</head>
<body>

<a href="inserirPontuacao.php">Inserir nova pontuação</a>

<?php
	echo "<h1>Exibir o sistema de pontuações aqui!</h1>";
	
	$pontuacoes = array();

	$sql="SELECT * FROM ranking WHERE aprovada='y'";

	$sql=$pdo->query($sql);

	// Listar a tabela de Pontuações
	if($sql->rowCount() > 0){
		foreach($sql->fetchAll() as $p){

			$pontuacoes[] = new Pontuacoes($p['autor'],$p['pontos'],$p['imagem']);

		}
	} else {
		echo "NENHUMA pontuação cadastrada!";
	}

	// Exibir as pontuações
	foreach($pontuacoes as $player){
		$player->exibir();
	}
?>
</body>
</html>
