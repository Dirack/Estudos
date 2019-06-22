<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre redimensionamento de imagens com GD do PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 21/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

	$nomeDoArquivo = "banner.png";

	$largura = 200;
	$altura = 200;

	list($largura_original,$altura_original) = getimagesize($nomeDoArquivo);

	$razaoLarguraAltura = $largura_original/$altura_original;

	if($largura/$altura > $razaoLarguraAltura){

		$largura = $altura * $razaoLarguraAltura;

	}else{

		$altura = $largura / $razaoLarguraAltura;
	}

	//echo "Dimensões originais da imagem: Largura=".$largura_original." Altura=".$altura_original."<br>";
	//echo "Dimensões modificadas da imagem: Largura=".$largura." Altura=".$altura."<br>";
	
	$imagem_redimensionada = imagecreatetruecolor($largura,$altura);
	$imagem_original = imagecreatefrompng($nomeDoArquivo);

	imagecopyresampled($imagem_redimensionada, $imagem_original,0,0,0,0,$largura,$altura,$largura_original,$altura_original);

	header("Content-Type: image/png");
	imagepng($imagem_redimensionada,null);

?>
