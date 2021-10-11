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
if(isset($_POST['nome']) && !empty($_POST['nome'])){

	$nome = addslashes($_POST['nome']);
	$email = addslashes($_POST['email']);
	$msg = addslashes($_POST['msg']);

	$para = "rodolfo_profissional@hotmail.com";
	$assunto = "Teste aleatório";
	$corpo = "Nome: ".$nome." - Email: ".$email." - Mensagem: ".$msg;
	$cabecalho = "From: ".$para."\r\n".
		"Reply-To: ".$email."\r\n".
		"X-Mailer: PHP/".phpversion();
	$success = mail($para,$assunto,$corpo,$cabecalho);
	if (!$success) {
	    $errorMessage = error_get_last();
		echo "erro: $errorMessage";
	}else{
		echo "foi!!!";
	}
	echo "<h2>Email enviado!</h2>";
	exit;
}
?>
<form method=POST>
	Nome: <input type=text name=nome><br>
	Email: <input type=text name=email><br>
	Mensagem: <textarea name=msg></textarea><br>
	<input type=submit value=Enviar>
</form>
