<?php
use PHPUnit\Framework\TestCase;

class CalculadoraTest extends TestCase{

    /**
     * @expectedException InvalidArgumentException
     */
    public function testExpectErrorWhenFileNotFound(){

        $this->assertFalse(file_exists('ghostfile.php'));
        
    }

}

?>
