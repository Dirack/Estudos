<?php
use PHPUnit\Framework\TestCase;

class CalculadoraTest extends TestCase{

	public function testSeveralExamples(){

		$a = array();
		$b =  array(
			"nome" => "rodolfo",
			"idade" => 32
		);

		$c =  array(1,2,3,4,5);

		$this->assertEmpty($a);

		$this->assertArrayHasKey("nome",$b);

		$this->assertCount(2,$b);

		$this->assertContains(3,$c);

		$this->assertContainsOnly("integer",$c);

		$this->assertClassHasAttribute("name",Calculadora::class);

		$this->assertRegExp('/^[a-z]{3}$/','opa');
	}
}

?>
