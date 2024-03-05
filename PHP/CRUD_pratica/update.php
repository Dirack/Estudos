<?php
include 'contact.class.php';
$database = "Estudos";
$host = "localhost";
$user = "root";
$password = "12345";
$contatos = new Contact($database,$host,$user,$password);

if(!empty($_GET['id'])){
    $info = $contatos->getInfo($_GET['id']);
    if(empty($info['email'])){
        header("Location: index.php");
        exit;
    }
}else{
    header("Location: index.php");
    exit;
}


if(!empty($_POST['email'])){
    $email = $_POST['email'];
    $nome = $_POST['nome'];
    $id = $_POST['id'];
    $contatos->update($nome,$email,$id);
    header("Location: index.php");
}

?>

<h1>Editar</h1>

<form method="POST">

    <input type="hidden" name="id" value="<?php echo $info['id']; ?>" />
    Nome:
    <input type="text" name="nome" value="<?php echo $info['nome']; ?>" /></br></br>

    Email:
    <input type="email" name="email" value="<?php echo $info['email']; ?>" /></br></br>

    <input type="submit" value="Salvar" />

</form>