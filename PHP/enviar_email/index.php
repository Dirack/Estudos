<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo enviar email através do PHP com
	a função 'mail()'. 
	
	XXX Não funciona no localhost, mas funciona no Dirack's Lounge.

	Extra: A função 'phpinfo()' mostra as informações da
	sua instalação do PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 03/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

/* Esta função exibe as informações da sua instalação PHP */
/* TODO: Descomentar para exibir as informações */
//phpinfo();

ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);

/* Enviar email com a função mail() */
$para = "rodolfo_profissional@hotmail.com";
$assunto = "Email de teste";
$msg = "Email de teste";
$remetente = "Script PHP de teste";
$remetente = "From: ".$remetente;

$success = mail($para,$assunto,$msg,$remetente);
if (!$success) {
    $errorMessage = error_get_last();
	echo "erro: $errorMessage";
}else{
	echo "foi!!!";
}

?>

