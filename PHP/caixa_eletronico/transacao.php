<!doctype html>
<!--
	transacao.php (PHP)
	
	Objetivo: Projeto simulando um caixa eletrônico com PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 25/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Projeto simulando um caixa eletrônico com PHP</title>
</head>
<body>

	<?php

			//////////// Conexão com banco de dados //////////////////
			include('conect.php');

			session_start();

			//echo $_SESSION['logado'];

			if(isset($_POST['tipo'])){

				$tipo=$_POST['tipo'];
				$valor=str_replace(',','.',$_POST['valor']);
				$valor=floatval($valor);

				$sql=$pdo->prepare("INSERT INTO extrato(id_conta, tipo, valor, data_operacao) VALUES(:id_conta, :tipo, :valor, NOW())");

				//echo "oi";

				$sql->bindValue(':id_conta',$_SESSION['logado']);
				$sql->bindValue(':tipo',$tipo);
				$sql->bindValue(':valor',$valor);

				$sql->execute();


				// Mudar saldo

				if($tipo == "0"){

					$sql=$pdo->prepare("UPDATE caixa_eletronico SET saldo= saldo + :valor WHERE id= :id");

				}else{

					$sql=$pdo->prepare("UPDATE caixa_eletronico SET saldo= saldo - :valor WHERE id= :id");

				}
				
				$sql->bindValue(':valor',$valor);
				$sql->bindValue(':id',$_SESSION['logado']);
				$sql->execute();

				header('Location: index.php');
				exit;

			}
	?>

	<div class="estudoPHP">
		<h1>Transações</h1>

		<form method="POST">

			Tipo de transação:<br>
			<select name="tipo">
				<option value="0" selected="selected">Depósito</option>
				<option value="1">Saque</option>
			</select><br><br>

			Valor: <br><input type="text" name="valor" pattern="[0-9.,]{1,}"><br>
			<input type="submit" value="Enviar">
		</form>
	</div>
	

</body>
</html>

