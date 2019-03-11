<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre tipos de variáveis em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 10/03/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/


// array ou vetor
$vetor = array('rodolfo_profissional', 1, 34.5,true); 
		
// Constantes
define('URL','http://www.dirackslounge.online');

// Exibindo na tela	
echo "vetor[0]=".$vetor[0]."<br>";
echo "vetor[1]=".$vetor[1]."<br>";
echo "vetor[2]=".$vetor[2]."<br>";
echo "vetor[3]=".$vetor[3]."<br>";

// Exibir constante na tela	
echo "Meu site: ".URL."<br>";

// Vetores e chaves: Cada elemento do array é identificado
// por uma chave. Exemplo, $vetor2["nome"] contém a string "Rodolfo"
$vetor2 = array(

	"nome" => "Rodolfo",
	"apelido" => "Dirack",
	"idade" => 27,
	"sexo" => "masculino"

);

// Alterar valor de um array
$vetor2["idade"] = 28;

// imprimir array na tela
print_r($vetor2);
echo "<br>";

// Adicionar elemento ao array
$vetor2[] = "Elemento novo";
print_r($vetor2);
echo "<br>";

// Variáveis globais
print_r($_SERVER);


?>

