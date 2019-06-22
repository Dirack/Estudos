<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre interfaces, POO em PHP.

	Diferença de Classes abstratas e interfaces: Classes abstratas são classes que usamos em
	casos de herança.Já as interfaces são contratos entre as classes, onde cria-se  metodos 
	genericos e cada classe implenta esses mesmo metodos da forma que necessitar. 
	Ou seja, cumprem o contrato por elas firmados.
	Elas são bastantes usadas para deixar as classes mais independentes uma das outras. 
	Aumentando o reuso de codigo e evitando acomplamento de classes.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 22/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

interface Pessoa{

	public function __construct($nomePessoa,$idadePessoa);

	public function setNome($nomePessoa);

	public function getNome();

	public function setIdade($idadePessoa);

	public function getIdade();

}

class Rodolfo implements Pessoa{

	private $nome;
	private $idade;

	public function __construct($nomePessoa, $idadePessoa){

		$this->nome = $nomePessoa;
		$this->idade = $idadePessoa;

	}

	public function setNome($nomePessoa){

		if(is_string($nomePessoa)){
			$this->nome = $nomePessoa;
		}

	}

	public function getNome(){

		return $this->nome;

	}

	public function setIdade($idadePessoa){

		$this->idade = $idadePessoa;

	}

	public function getIdade(){

		return $this->idade;

	}

	public function exibirInfoRodolfo(){

		echo "Meu nome é ".$this->getNome()."<br>";
		echo "Eu tenho ".$this->getIdade()." anos <br>";

	}

}

$rodolfo = new Rodolfo("Rodolfo Dirack",27);
$rodolfo->exibirInfoRodolfo();
	
?>
