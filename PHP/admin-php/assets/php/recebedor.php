<?php
/*

	recebedor.php (PHP)
	
	Objetivo: Estudo sobre upload de arquivos com PHP.
	Esta página recebe o arquivo enviado via formulário
	na página index.php.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 16/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

*/

require('connect.php');

$arquivo=$_FILES['arquivo'];

/* O arquivo é enviado com um array de dados com as principais informações sobre ele
   É armazenado em uma pasta temporária no servidor. O nome do arquivo fica 
   armazenado em $arquivo['name'] */
// print_r($arquivo); //TODO: Descomentar para exibir as informações na tela

// Verifique se um nome de arquivo foi passado
if(isset($arquivo['tmp_name']) && !empty($arquivo['tmp_name'])){

	// Envie o arquivo com um nome aleatório para evitar 
	// sobreescrever arquivos com mesmo nome
	$nomedoarquivo=md5(time().rand(0,99));

	// Move o arquivo da pasta temporária para o local desejado
	move_uploaded_file($arquivo['tmp_name'],'../images/'.$nomedoarquivo) or die("Erro ao enviar imagem");

	$sql="INSERT INTO ranking(autor,pontos,imagem)".
	" values('".$_POST['autor']."',".$_POST['pontos'].",'assets/images/".$nomedoarquivo."')";
	$sql = $pdo->query($sql);

	echo "Pontuação enviada com sucesso, aguarde a aprovação<br>";
	echo "Autor: ".$_POST['autor']."<br>";
	echo "Pontuação: ".$_POST['pontos']."<br>";
	echo "Arquivo: ".$arquivo['name']."<br>";

	echo "<a href='../../index.php'>Voltar</a>";
}

?>
