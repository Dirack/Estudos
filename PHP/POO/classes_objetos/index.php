<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre orientação à objetos em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 21/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

class Cachorro{

	public $nome;
	private $raca;

	public function __construct($nomeDoCachorro,$racaDoCachorro){

		$this->nome = $nomeDoCachorro;
		$this->setRaca($racaDoCachorro);

	}

	public function latir(){

		echo "Au Au!";

	}

	public function setRaca($racaDoCachorro){

		if(is_string($racaDoCachorro)){
			$this->raca = $racaDoCachorro;
		}

	}

	public function getRaca(){

		return $this->raca;

	}

	public function exibaInfoCachorro(){

		echo "<br>";
		echo "O nome do meu cachorro é: ".$this->nome."<br>";
		echo "A raça dele é: ".$this->getRaca()."<br>";

	}

}
	
$lika = new Cachorro("L","L");
$lika->latir();
$lika->nome = "Lika";
$lika->setRaca("Vira-lata");
$lika->exibaInfoCachorro();

$lola = new Cachorro("Lola","Coque");
$lola->exibaInfoCachorro();
?>
