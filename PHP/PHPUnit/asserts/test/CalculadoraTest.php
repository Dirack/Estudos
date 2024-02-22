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

	public function testDir(){

		$this->assertDirectoryExists('test');
		$this->assertDirectoryIsReadable('test');
		$this->assertDirectoryIsWritable('test');
	}

	public function testFile(){
		$this->assertFileEquals('arq1.txt','arq2.txt');
	}

	public function testSeveralExamples2(){
		$this->assertTrue(true);
		$this->assertFalse(false);
		$this->assertNull(null);
		$this->assertEquals(1,1);
		$this->assertStringStartsWith("Teste","Teste de uma string");
		$this->assertStringEndsWith("string","Teste de uma string");
		$this->assertGreaterThan(10,11);
		$this->assertGreaterThanOrEqual(10,11);
		$this->assertLessThan(10,5);
		$this->assertLessThanOrEqual(10,5);
	}
}

?>
