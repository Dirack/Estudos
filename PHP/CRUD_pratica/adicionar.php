<?php
include 'contact.class.php';
$database = "Estudos";
$host = "localhost";
$user = "root";
$password = "12345";
$contatos = new Contact($database,$host,$user,$password);

if(!empty($_POST['email'])){
    $email = $_POST['email'];
    $nome = $_POST['nome'];
    $contatos->add($email,$nome);
    header("Location: index.php");
}

?>

<h1>Adicionar</h1>

<form method="POST">

    Nome:
    <input type="text" name="nome" /></br></br>

    Email:
    <input type="email" name="email" /></br></br>

    <input type="submit" value="Adicionar" />

</form>