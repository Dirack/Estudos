<?php
use PHPUnit\Framework\TestCase;

class CalculadoraTest extends TestCase{

    public function testIncompleteExample(){
        $this->markTestIncomplete('Exemplo de teste incompleto');
    }

    public function testExpectNomeCompleto(){
        $this->expectOutputString('Teste');

        echo 'Teste';
    }

}

?>
