<?php
/*
	 pontuacoes.php (PHP)
	 
	 Objetivo: Define a Classe Pontuacoes. Objeto a ser exibidas na página principal
	 do ranking de pontuações.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 13/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

class Pontuacoes{

	private $autor;
	private $pontos;
	private $imagem;

	public function __construct($autor, $pontos, $imagem){
		$this->autor = $autor;
		$this->pontos = $pontos;
		$this->imagem = $imagem;
	}

	public function getAutor(){
		return $this->autor;
	}

	public function setAutor($autor){
		$this->autor = $autor;
	}

	public function getPontos(){
		return $this->pontos;
	}

	public function setPontos($pontos){
		$this->pontos = $pontos;
	}

	public function getImagem(){
		return $this->imagem;
	}

	public function setImagem($imagem){
		$this->imagem = $imagem;
	}

	public function exibir(){
		echo "Autor: ".$this->getAutor()."<br>";
		echo "Pontos: ".$this->getPontos()."<br>";
		echo "<img src='".$this->getImagem()."' width='200' alt='Imagem não encontrada'><br>";
	}
	
} 
	 
?>
