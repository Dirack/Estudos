<?php
/*
	rBotao.php (PHP) 

	Objetivo: Funções dos botões r no script violao.js.

	Programador: Rodolfo A. C. Neves (Dirack) 04/03/2019
*/

// Recebe o repertório a ser exibido via POST
$chave = $_POST["chave"];

// Título a ser exibido no console
switch ($chave){

	case "CP":
		$repertorio = "Repertório Curso Progressivo de músicas de Violão:";
	break;

	case "CAV":
		$repertorio = "Repertório de músicas de Cavaquinho:";
	break;

	default:
		$repertorio= "Repertório $chave de músicas de Violão:";
	break;
}

//////////// Conexão com banco de dados //////////////////
include("../conect.php");

// Se a conexão falhar, avise o usuário
if (mysqli_connect_error()):
	echo "Falha na conexão!".mysqli_connect_error();	
endif;


////////////// Consulte o banco de dados: Repertório //////////////////
$sql = "SELECT * FROM repertorio where repertorio='$chave' order by pagina;";
$resultado = mysqli_query($connect,$sql);

// Exiba o resultado no console
if (mysqli_num_rows($resultado) > 0):

	echo "<h2>$repertorio</h2>\n";

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
		echo "<p>Nenhum cadastro encontrado.</p>";
endif;



?>
