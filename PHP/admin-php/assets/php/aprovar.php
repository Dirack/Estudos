<?php
/*
	 aprovar.php (PHP)
	 
	 Objetivo: Aprovar as pontuações enviadas para o banco de dados.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 14/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

require('autenticar.php');
require('connect.php');

$id = $_GET['id'];


$sql = "UPDATE ranking SET aprovada='y' WHERE id=".$id;
$sql = $pdo->query($sql) or die('Erro na query');

echo "Pontuação aprovada com sucesso!<br>";
echo "<a href='../../admin.php'>Voltar</a>";
?>
