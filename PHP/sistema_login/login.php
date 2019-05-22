<?php
/*
	index.php (PHP)
	
	Objetivo: Exercício construindo um sistema de login PHP.
	Este é o formulário de login.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 21/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

*/


echo "Área de login";

session_start();

if(isset($statusUsuario) && (!empty($statusUsuario))){

	echo "Área restrita... Usuário logado!";

}


?>

<!-- Menu de login do site -->
<div id="caixa-login" class="linha">
	<h1>Login</h1>
	<form action="./index.php" method="POST">
		<p>Login: <input type="text" name="login" id="login"></p>
		<p>Senha: <input type="password" name="senha" id="senha"></p>
		<p><button type="submit" name="botao"> Entrar </button></p>
	</form>
</div>
