<?php
/*
	connect.php (PHP)
	
	Objetivo: Estudo sobre crude em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

class Connect{

	private $pdo;

	public function __construct($database,$host,$user,$password){

		$string = "mysql:dbname=".$database.";host=".$host;

		$this->pdo = new PDO($string,$user,$password);

	}


}


?>
