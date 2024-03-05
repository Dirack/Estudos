<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre crude em PHP.

	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', dirname(__FILE__) . '/error_log.txt');
error_reporting(E_ALL);

require 'contact.class.php';

$database = "Estudos";
$host = "localhost";
$user = "root";
$password = "12345";

$contatos = new Contact($database,$host,$user,$password);

?>

<h1>Contatos</h1>

<a href="adicionar.php">[ ADICIONAR ]</a></br></br>

<table border="1" width="600">
	<tr>
		<th>ID</th>
		<th>NOME</th>
		<th>EMAIL</th>
		<th>AÇÕES</th>
	</tr>
	<?php
		$lista = $contatos->getAll();
		foreach($lista as $item):
	?>
	<tr>
		<td><?php echo $item['id']; ?></td>
		<td><?php echo $item['nome']; ?></td>
		<td><?php echo $item['email']; ?></td>
		<td>
			<a href="update.php?id=<?php echo $item['id']; ?>">[ EDITAR ]</a>
			<a href="excluir.php?id=<?php echo $item['id'];?>">[ EXCLUIR ]</a>
		</td>
	</tr>
	<?php endforeach; ?>

</table>