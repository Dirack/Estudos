<?php
/*
	projetoVerificadorHumanos.php (PHP)
	
	Objetivo: Verificar a resposta do usuário enviada por index.php.
	Se a resposta estiver correta é um humano.
	Se estiver errada, é um robô.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 19/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

session_start();

# O usuário enviou alguma resposta?
if(! empty($_POST['respostaUsuario'])){

	# Verificação da resposta
	$respostaUsuario=$_POST['respostaUsuario'];
	$respostaCorreta=$_SESSION['respostaCorreta'];

	if($respostaUsuario == $respostaCorreta){
		echo "É um humano!";
	}else{
		echo "É um robô!";
	}

}else{

	header('location:index.php');
}

?>

