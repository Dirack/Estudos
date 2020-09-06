<?php
/*
	menu.php (PHP) 

	Objetivo: Funções do menu da página index.php

	Programador: Rodolfo A. C. Neves (Dirack) 02/02/2019
*/

switch($opcao){

	//Exibir...
	case("repertorio"):

		switch($desc){

			// Repertório
			case("repertorio"):

			$rp = $_GET['rp'];

			////////////// Consulte o banco de dados: Repertório //////////////////
			$sql = "SELECT * FROM repertorio where repertorio='$rp' order by pagina;";
			$resultado = mysqli_query($connect,$sql);

			// Exiba o resultado no console
			if (mysqli_num_rows($resultado) > 0):

				echo "<h2>Repertório de músicas do Violão:</h2>\n";

				while($linha = mysqli_fetch_array($resultado)):
					$musica = $linha['musica'];
					$compositor = $linha['compositor'];
					$repertorio = $linha['repertorio'];
					$pagina = $linha['pagina'];
					$score = $linha['score'];
					$status = $linha['status'];
					$feedback = $linha['feedback'];
					
					// Saída formatada
					echo "<h3 style='text-decoration-line:underline;'>$musica ($compositor)</h3>\n";
					echo "<p>Repertório: $repertorio ";
					echo "Página: $pagina Score: $score Status: $status</p>\n";
					echo "<p>$feedback</p>\n";
						
				endwhile;

			else:
				echo "<p>Nenhum cadastro encontrado.</p>";
			endif;

			break;

			// Selecionar por status
			case("status"):

			$rp = $_GET['rp'];

			////////////// Consulte o banco de dados: Repertório //////////////////
			$sql = "SELECT * FROM repertorio where status='$rp' order by prazo;";
			$resultado = mysqli_query($connect,$sql);

			// Exiba o resultado no console
			if (mysqli_num_rows($resultado) > 0):

				echo "<h2>Repertório de músicas do Violão:</h2>\n";

				while($linha = mysqli_fetch_array($resultado)):
					$musica = $linha['musica'];
					$compositor = $linha['compositor'];
					$repertorio = $linha['repertorio'];
					$pagina = $linha['pagina'];
					$score = $linha['score'];
					$status = $linha['status'];
					$feedback = $linha['feedback'];
					$prazo = $linha['prazo'];
					
					// Saída formatada
					echo "<h3 style='text-decoration-line:underline;'>$musica ($compositor)</h3>\n";
					echo "<p>Repertório: $repertorio ";
					echo "Página: $pagina Score: $score Status: $status ($prazo)</p>\n";
					echo "<p>$feedback</p>\n";
						
				endwhile;

			else:
				echo "<p>Nenhum cadastro encontrado.</p>";
			endif;

			break;

		}

	// Estudos: Selecionar por tipo e status
	case("estudos"):

		switch($desc){

			// tipo
			case("tipo"):

			$rp = $_GET['rp'];

			////////////// Consulte o banco de dados: Repertório //////////////////
			$sql = "SELECT * FROM estudos where tipo='$rp' order by review desc;";
			$resultado = mysqli_query($connect,$sql);

			// Exiba o resultado no console
			if (mysqli_num_rows($resultado) > 0):

				echo "<h2>Estudos ($rp):</h2>\n";

				while($linha = mysqli_fetch_array($resultado)):
					$estudo = $linha['estudo'];
					$descricao = $linha['descricao'];
					$tipo = $linha['tipo'];
					$data = $linha['review'];
					$review = explode('-',$data);
					$score = $linha['score'];
					$status = $linha['status'];
					$feedback = $linha['feedback'];
										
					// Saída formatada
					echo "<h3 style='text-decoration-line:underline;'>$estudo</h3>\n";
					echo "<p>Descrição: $descricao</p> ";
					echo "<p>Score: $score Status: $status ";
					echo "Próxima revisão: $review[2]/$review[1]/$review[0]</p>\n";
					echo "<p>$feedback</p>\n";
						
				endwhile;

			else:
				echo "<p>Nenhum cadastro encontrado.</p>";
			endif;

			break;

			// status
			case("status"):

			$rp = $_GET['rp'];

			////////////// Consulte o banco de dados: Repertório //////////////////
			$sql = "SELECT * FROM estudos where status='$rp' order by review desc;";
			$resultado = mysqli_query($connect,$sql);

			// Exiba o resultado no console
			if (mysqli_num_rows($resultado) > 0):

				echo "<h2>Estudos ($rp):</h2>\n";

				while($linha = mysqli_fetch_array($resultado)):
					$estudo = $linha['estudo'];
					$descricao = $linha['descricao'];
					$tipo = $linha['tipo'];
					$data = $linha['review'];
					$review = explode('-',$data);
					$score = $linha['score'];
					$status = $linha['status'];
					$feedback = $linha['feedback'];
										
					// Saída formatada
					echo "<h3 style='text-decoration-line:underline;'>$estudo</h3>\n";
					echo "<p>Descrição: $descricao</p> ";
					echo "<p>Score: $score Status: $status ";
					echo "Próxima revisão: $review[2]/$review[1]/$review[0]</p>\n";
					echo "<p>$feedback</p>\n";
						
				endwhile;

			else:
				echo "<p>Nenhum cadastro encontrado.</p>";
			endif;

			break;
		}
	}
?>
