<?php
use PHPUnit\Framework\TestCase;

class CalculadoraTest extends TestCase{

    /**
     * @dataProvider somaDataProvider
     */
    public function testSoma($n1,$n2,$esperado){
        $calc =new Calculadora();
        $this->assertEquals(
            $esperado,
            $calc->soma($n1,$n2)
        );
    }

    
    public function somaDataProvider(){
        return array(
            array(1,1,2),
            array(20,10,30),
            array(-100,30,-70)
        );
    }

}

?>
