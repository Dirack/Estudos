<h1>Estudo Docker PHP Mysql</h1>
<?php

$pdo = new PDO("mysql:dbname=meudb;host=db","dirack","12345");

$sql = $pdo->query("SELECT * FROM usuarios");

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
?>