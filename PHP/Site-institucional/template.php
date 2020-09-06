<!doctype html>
<!--
	template.php (PHP) - Site Institucional

	Objetivo: Projeto desenvolvido durante o curso PHP do zero ao profissional.
	Criação de um site institucional.

	Este é o template do site, onde a div 'container' é carregada dinamicamente
	através do PHP com loadViewInTemplate($viewname,$viewdata). O conteúdo dinâmico
	estará em outras páginas do site, cada opção do menu de navegação terá a sua
	própria página PHP.

	***IMPORTANTE: Eu mudei a orientação original de carregar a página com PHP,
	para um carregamento utilizando o AJAX do Javascript e DOM. Retomarei a 
	proposta inicial do exercício em um futuro próximo.

	Programador: Rodolfo A. C. Neves(Dirack) 08/02/2019

	Email: rodolfo_profissional@hotmail.com

-->
<head>
	<meta charset="utf-8">
	<title>Projeto Site Institucional</title>
	<link type="text/css" rel="stylesheet" href="template.css">

	<!-- Carregar conteúdo da página com AJAX -->
	<script type="text/javascript" src="ajax.js"></script>
</head>

<body onload="ajax();">

	<div class="topo">
		<div class="topo1"></div>
		<div class="banner"></div>
	</div>

	<div class="menu">
		<ul>
			<a href="./"><li>HOME</li></a>
			<a href="./portfolio"><li>PORTIFÓLIO</li></a>
			<a href="./sobre"><li>SOBRE</li></a>
			<a href="./servico"><li>SERVIÇO</li></a>
			<a href="./contato"><li>CONTATO</li></a>
		</ul>
	</div>

	<!-- Carregar esta parte dinamicamente utilizando AJAX e DOM -->
	<div class="container" id="container">


		<!-- Album de fotos de portifólio-->
		<div class="portifolio">
			<h4>Meu portifólio</h4>
			
			<?php
				//////////// Conexão com banco de dados //////////////////
				include("conect.php");

						// Se a conexão falhar, avise o usuário
				if (mysqli_connect_error()):
					echo "Falha na conexão!".mysqli_connect_error();

				else:
					////////////// Consulte o banco de dados //////////////////
					$sql = "SELECT * FROM portifolio;";
					$resultado = mysqli_query($connect,$sql);

					if (mysqli_num_rows($resultado) > 0):
						while($linha = mysqli_fetch_array($resultado)):
							$imagem = $linha['imagem'];
							
							// Saída formatada
							echo "<img src='$imagem'>";
						endwhile;
					endif;


				
				endif;
			?>
		<div style="clear: both;"></div>
		</div>
	</div>



	<div class="rodape">
	</div>

</body>
</html>
