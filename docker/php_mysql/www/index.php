<h1>Estudo Docker PHP Mysql</h1>
<?php

try {
    $pdo = new PDO("mysql:dbname=meudb;host=db","dirack","12345");

    $sql = $pdo->query("SELECT * FROM usuarios");

    if(!$sql){
        throw new Exception("Algo deu errado! Adicionou a tabela usuarios ao database db?");
    }
    
    if($sql->rowCount()>0){
        $usuarios = $sql->fetchAll();
        echo "<ul>";
        foreach($usuarios as $usuario){
            echo "<li>".$usuario['nome']."</li>";
        }
        echo "</ul>";
    }else{
        echo "Nenhum usuário cadastrado!";
    }
}catch(Exception $e){
    echo "<p><b>Some error:</b> ".$e->getMessage()."</p>";
}

?>
