<?php
/*
	statusBotao.php (PHP) 

	Objetivo: Funções dos botões de status no script violao.js.
	A consulta ao banco de dados é feita pelo critério de status
	uma coluna que separa as músicas pelo tempo estimado da próxima
	revisão. Exemplo, Diário é uma música que precisa ser revista todos
	os dias, aprender é uma música que precisa ser aprendida e etc.

	Programador: Rodolfo A. C. Neves (Dirack) 05/03/2019
*/

// Recebe o repertório a ser exibido via POST
$chave = $_POST["chave"];

//////////// Conexão com banco de dados //////////////////
include("../conect.php");

// Se a conexão falhar, avise o usuário
if (mysqli_connect_error()):
	echo "Falha na conexão!".mysqli_connect_error();	
endif;

// Título a ser exibido no console
switch ($chave) {

	case "AP":
		$revisao = "para Aprender";
	break;

	case "D":
		$revisao = "com revisão Diária";
	break;

	case "S":
		$revisao = "com revisao Semanal";
	break;

	case "Q":
		$revisao = "com revisão Quinzenal";
	break;

	case "M":
		$revisao = "com revisão Mensal";
	break;

	case "SEM":
		$revisao = "com revisão Semestral";
	break;

	case "A":
		$revisao = "com revisão Anual";
	break;

	case "R":
		$revisao = "para Relembrar";
	break;

}


////////////// Consulte o banco de dados: Repertório //////////////////
$sql = "SELECT * FROM repertorio where status='$chave' order by pagina;";
$resultado = mysqli_query($connect,$sql);

// Exiba o resultado no console
if (mysqli_num_rows($resultado) > 0):

	echo "<h2>Músicas $revisao:</h2>\n";

	while($linha = mysqli_fetch_array($resultado)):
		$id = $linha['id'];

		// Data Formatada
		$data = explode("-",$linha['prazo']);

		if (sizeof($data)==3):
			$dataF = $data[2]."/".$data[1]."/".$data[0];
		else:
			$dataF = "Indeterminado";
		endif;

		$musica = $linha['musica'];
		$compositor = $linha['compositor'];
		$pagina = $linha['pagina'];
		$score = $linha['score'];
		$status = $linha['status'];
		$feedback = $linha['feedback'];
					
		// Saída formatada
		echo "<div id='musica-$id'>\n";
		echo "<h3 class='musicaTitulo' data-score='$score' data-id='$id'><u>$musica ($compositor)</u></h3>\n";
		echo "<p>";
		echo "Página: $pagina Score: <span class='score'>$score</span> Status: <span class='status'>$status</span> Rever em: <span class='data'>$dataF</span></p>\n";
		echo "<p><span class='feedback'>$feedback</span></p></div>\n";
						
	endwhile;

else:
		echo "<h2>Músicas $revisao:</h2>\n";		
		echo "<p>Nenhum cadastro encontrado.</p>";
endif;



?>
