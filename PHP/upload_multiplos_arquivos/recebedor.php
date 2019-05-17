<?php
/*

	recebedor.php (PHP)
	
	Objetivo: Estudo sobre upload múltiplo de arquivos com PHP.
	Esta página recebe os arquivos enviados via formulário
	na página index.php.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 17/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

*/

$arquivo=$_FILES['arquivo'];

// Verifique se um nome de arquivo foi passado
if(isset($arquivo['tmp_name']) && !empty($arquivo['tmp_name'])){

	if(count($arquivo['name']) > 0){
		for($q=0; $q < count($arquivo['name']); $q++){

			// Envie o arquivo com um nome aleatório para evitar 
			// sobreescrever arquivos com mesmo nome
			$nomedoarquivo=md5(time().rand(0,99)).'.png';

			// Move o arquivo da pasta temporária para o local desejado
			move_uploaded_file($arquivo['tmp_name'][$q],'arquivo/'.$nomedoarquivo);

			echo "Upload de arquivo ".$arquivo['name'][$q]
				." finalizado com sucesso!<br>\n";

		}
	}

}

?>
