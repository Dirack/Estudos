<?php
use PHPUnit\Framework\TestCase;

class CalculadoraTest extends TestCase{

    public function testSoma1(){
        $calc =new Calculadora();
        $this->assertEquals(
            2,
            $calc->soma(1,1)
        );
    }

    public function testSoma2(){
        $calc =new Calculadora();
        $this->assertEquals(
            -5,
            $calc->soma(-10,5)
        );
    }

    public function testSoma3(){
        $calc =new Calculadora();
        $this->assertEquals(
            60,
            $calc->soma(51,9)
        );
    }

}

?>
