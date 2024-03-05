<?php
include 'contact.class.php';
$database = "Estudos";
$host = "localhost";
$user = "root";
$password = "12345";
$contatos = new Contact($database,$host,$user,$password);

if(!empty($_GET['id'])){
    $id = $_GET['id'];
    $nome = $_POST['nome'];
    $contatos->deleteFromId($id);
}

header("Location: index.php");