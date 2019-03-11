<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre bloco IF em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 11/03/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

// Basta descomentar e comentar abaixo
//$nome = "Rodolfo";
$nome = "Fulano";
//$apelido="Dirack";
$apelido="Jack";

// Se o nome é Rodolfo exiba a mensagem
if($nome=="Rodolfo"){

	echo "nome do usuário: ".$nome;

// Se o apelido é dirack exiba a mensagem
}elseif($apelido=="Dirack"){

	echo "Apelido: ".$apelido;

// Os testes falharam? Usuário não encontrado!
}else{

	echo "Usuário não encontrado!<br>";

}

$opcao = 1;

/* Menu de opções com SWITCH */
switch($opcao){
	case 0:
		echo "Opção 0 escolhida!";
	break;

	case 1:
		echo "Opção 1 escolhida!";
	break;

	case 2:
		echo "Opção 2 escolhida!";
	break;

	default:
		echo "Opção não encontrada!";
	break;

}

?>

