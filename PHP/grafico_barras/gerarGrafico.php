<?php
/*
	 gerarGrafico.php (PHP)
	 
	 Objetivo: Gerador de gráfico de barras com PHP.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 12/09/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

define('WIDTH',220);
define('HEIGHT',200);

$img =  imagecreatetruecolor(WIDTH,HEIGHT);
$bgcolor = imagecolorallocate($img, 255, 255, 255); // branco
$text_color = imagecolorallocate($img, 255, 255, 255); // branco
$border_color = imagecolorallocate($img, 64, 64, 64); // cinza-escuro
$bar_color = imagecolorallocate($img, 0, 0, 0); // preto

$bar_width=20;
$bar_height=array(5, 2, 3, 4, 2);
$bar_distance=20;
$bar_scale_increment = intval(HEIGHT/max($bar_height));

imagefilledrectangle($img,0,0,WIDTH,HEIGHT,$bgcolor);

$bar_start=$bar_distance;
$bar_end=$bar_start+$bar_width;

for($i=0;$i<5;$i++){
	$height = $bar_height[$i]*$bar_scale_increment;
	imagefilledrectangle($img,$bar_start,HEIGHT,$bar_end,HEIGHT-$height,$bar_color);
	$bar_start=$bar_end+$bar_distance;
	$bar_end=$bar_start+$bar_width;
}

imagerectangle($img,0,0,WIDTH-1,HEIGHT-1,$border_color);

//imagestringup($img,5,10,10,"oi");
header("Content-type: image/png");

imagepng($img);
imagedestroy($img);
	 
	 
?>
