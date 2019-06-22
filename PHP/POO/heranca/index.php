<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre herança, POO em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 22/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

class Animal{

	private $nome;
	private $idade;

	public function __construct($nomeDoAnimal,$idadeDoAnimal){

		if(is_string($nomeDoAnimal)){
			
			$this->setNome($nomeDoAnimal);

		}

		if(is_int($idadeDoAnimal)){

			$this->setIdade($idadeDoAnimal);

		}

	}

	public function getNome(){

		return $this->nome;

	}

	public function setNome($nomeDoAnimal){

		$this->nome = $nomeDoAnimal;

	}

	public function getIdade(){

		return $this->idade;

	}

	public function setIdade($idadeDoAnimal){

		$this->idade = $idadeDoAnimal;

	}

}

class Cavalo extends Animal{

	private $raca;

	public function trotar(){

		return "Pocotó, pocotó, pocotó...";

	}

	public function infoSobreCavalo(){

		echo "O nome do meu cavalo é: ".$this->getNome()."<br>";
		echo "Ele tem ".(string)$this->getIdade()." anos de idade <br>";
		echo "Ele faz: ".$this->trotar()."<br>";


	}

}

$peDePano = new Cavalo("Pé de Pano",12);
$peDePano->infoSobreCavalo();

$rabioso = new Cavalo("Rabioso", 10);
$rabioso->infoSobreCavalo();


	
?>
