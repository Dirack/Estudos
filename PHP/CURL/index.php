<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre a biblioteca cURL do PHP.

	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 02/07/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/
error_reporting(0);

$ch = curl_init();

curl_setopt($ch,CURL_POST, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
curl_setopt($ch, CURLOPT_URL,"https://alunos.b7web.com.br/api/ping");
curl_setopt($ch, CURL_POSTFIELDS,"nome=Dirack&idade=90&sexo=masculino");
curl_setopt($ch, CURL_RETURNTRANSFER, true);

$resposta = curl_exec($ch);
curl_close($ch);

//print_r($resposta);


?>
