<!doctype html>
<!--
	index.html(HTML) - Interface para organizar estudos e tarefas.

	Objetivo: Visualização, cadastramento e manipulação da lista de estudos
	e tarefas cadastradas em um banco de dados SQL.

	As opções do menu são interpretadas por scripts do PHP que enviam SQLQueries
	para o banco de dados e retornam o resultado. Estes scripts interpretam as opções
	a partir do método GET: a url é enviada com as variáveis opcao e desc que informam
	ao PHP que valores e em que formato deverá ser o retorno.

	Programador: Rodolfo A. C. Neves (Dirack) 02/02/2019
-->

<head>
<meta charset="utf-8">

<title>BANCO: Estudos e tarefas</title>

<!-- Folhas de estilo CSS da página -->
<link type="text/css" rel="stylesheet" href="index.css">

<script language="javascript" type="text/javascript">

function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

window.onload = data;

function data(){
	document.getElementById("data").innerHTML = dataAtualFormatada();
}

</script>

</head>
<body>

<div id="menu">
	<h1 style="text-align:center;">Menu</h1>
	
	<h3>Repertório:</h3>
	<p>
	<a href="index.php?sql=1&opcao=repertorio&desc=repertorio&rp=M" title="Exibir repertório M?">M</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=repertorio&rp=CP" title="Exibir repertório CP?">CP</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=repertorio&rp=3" title="Exibir repertório 3?">3</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=repertorio&rp=2" title="Exibir repertório 2?">2</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=repertorio&rp=1" title="Exibir repertório 1?">1</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=status&rp=aprender" title="Exibir músicas a aprender?">A</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=status&rp=lembrar" title="Exibir músicas a serem lembradas?">L</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=status&rp=rever" title="Exibir músicas a serem revistas?">R</a>
	<a href="index.php?sql=1&opcao=repertorio&desc=status&rp=ok" title="Exibir músicas Ok">O</a></p>
	
	
	<h3>Estudos:</h3>
	<p>
	<a href="index.php?sql=1&opcao=estudos&desc=tipo&rp=Cavaco" title="Estudos sobre CAVACO">C</a>
	<a href="index.php?sql=1&opcao=estudos&desc=tipo&rp=Escala" title="Estudos sobre ESCALA">E</a>
	<a href="index.php?sql=1&opcao=estudos&desc=tipo&rp=Livro" title="Estudos sobre LIVRO">L</a>

	<a href="index.php?sql=1&opcao=estudos&desc=status&rp=AP" title="Estudos Aprender">AP</a>
	<a href="index.php?sql=1&opcao=estudos&desc=status&rp=D" title="Estudos Diário">D</a>
	<a href="index.php?sql=1&opcao=estudos&desc=status&rp=S" title="Estudos Semanal">S</a>
	<a href="index.php?sql=1&opcao=estudos&desc=status&rp=Q" title="Estudos Quinzenal">Q</a>
	<a href="index.php?sql=1&opcao=estudos&desc=status&rp=M" title="Estudos Mensal">M</a>
	<a href="index.php?sql=1&opcao=estudos&desc=status&rp=SEM" title="Estudos Semestral">SEM</a>
	<a href="index.php?sql=1&opcao=estudos&desc=status&rp=A" title="Estudos Anual">A</a>
	</p>
</div>

<div id="console">

	<p id="data"></p>
	<?php

	$sql = $_GET['sql'];
	$opcao = $_GET['opcao'];
	$desc = $_GET['desc'];

	if($sql=="1"):
		//////////// Conexão com banco de dados //////////////////
		include("conect.php");

		// Se a conexão falhar, avise o usuário
		if (mysqli_connect_error()):
			echo "Falha na conexão!".mysqli_connect_error();

		else:
			include("menu.php");
		
		endif;
	endif;
	?>
</div>
</body>
</html>
