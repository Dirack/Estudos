<!doctype html>
<!--
	index.html (HTML)
	
	Objetivo: Sistema de chat com HTML/CSS, Javascript e PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 12/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
-->
<head>
	<meta charset="utf-8">
	<title>Sistema de CHAT</title>
	<link type="text/css" rel="stylesheet" href="assets/css/chat.css">

	<!-- JQuery -->
	<script type="text/javascript" src="assets/javascript/jquery-3.3.1.min.js"></script>

	<!-- Botões para abrir e fechar o chat -->
	<script type="text/javascript" src="assets/javascript/chat.js"></script>
</head>
<body>

	<?php

	// Armazena o usuário como uma variável de sessão
	$user=$_GET['user'];

	echo "<h1>".$user."</h1>\n";

	?>

	<!-- Clique neste botão para abrir o chat -->
	<div class="chatBotao">

	</div>


	<!-- Sistema de chat -->
	<div class="chat" style="display: none;">

			<headerChat>
				<div class="imagemPessoa">
					<div class="fotoPessoa">
						<div class="sombraBolinhaOnline">
							<div class="bolinhaOnline"></div>
						</div>
					</div>
				</div>
				<div class="nomePessoa">
					<div class="nomePessoaUsuario"><b>Rodolfo Dirack</b></div>
					<div class="nomePessoaStatus">Online agora</div>
				</div>
				<div class="menuChat">
					<div class="menuChatBotao">
						<div class="botao botao1">X</div>
						<div class="botao botao2">X</div>
						<div class="botao botao3">X</div>
						<div class="botao botao4">X</div>
					</div>
				</div>
			</headerChat>

			<mensagemChat>
				<div class="historicoMensagens">

						<?php

							// Armazena o usuário como uma variável de sessão
							$user=$_GET['user'];

							echo "<iframe src='./assets/php/mensagens.php?user=$user#footer' id='frame' class='iframeMensagens'></iframe>\n";

						?>
				</div>
			</mensagemChat>

			<footerChat>
				<div class="formMensagem">
					<input placeholder="Digite uma mensagem...">
				</div>
				<div class="menuMensagem">

				</div>
			</footerChat>

	</div>


</body>
</html>

