<?php
/*
	 contact.class.php (PHP)
	 
	 Objetivo: Definição da classe contato para cadastrar informações de usuários.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 29/10/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

include('connect.php');

class Contact extends Connect{

	public function __construct($database,$host,$user,$password){
		parent::__construct($database,$host,$user,$password);
	}

	public function add($email,$nome=''){
		
		if(!$this->contactExists($email)){
			$sql = "INSERT INTO crude(nome,email) VALUES (:nome,:email)";
			$sql = $this->pdo->prepare($sql);
			$sql->bindValue(':nome',$nome);
			$sql->bindValue(':email',$email);
			$sql->execute();

			return true;
		}

		return false;
	}

	private function contactExists($email){

		$sql = "SELECT * FROM crude WHERE email=:email";
		$sql = $this->pdo->prepare($sql);
		$sql->bindValue(':email',$email);
		$sql->execute();

		if($sql->rowCount() > 0){
			return true;
		}

		return false;
	}

	public function getNome($email){

		$sql = "SELECT * FROM crude WHERE email=:email";
		$sql = $this->pdo->prepare($sql);
		$sql->bindValue(':email',$email);
		$sql->execute();

		if($sql->rowCount() > 0){
			$info = $sql->fetch();
			return $info['nome']; 
		}

		return '';
	}

	public function getInfo($id){
		$sql = "SELECT * FROM crude WHERE id = :id";
		$sql = $this->pdo->prepare($sql);
		$sql->bindValue(':id',$id);
		$sql->execute();

		if($sql->rowCount() > 0){
			return $sql->fetch();
		}else{
			return array();
		}
	}

	public function getAll(){
		$sql = "SELECT * FROM crude";
		$sql = $this->pdo->query($sql);

		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		}

		return array();
	}

	public function setNome($email, $nome){

		if($this->contactExists($email)){
			$sql = "UPDATE crude SET nome=:nome WHERE email=:email";
			$sql = $this->pdo->prepare($sql);
			$sql->bindValue(':nome',$nome);
			$sql->bindValue(':email',$email);
			$sql->execute();
			return true;
		}

		return false;

	}

	public function update($nome,$email,$id){
		//if($this->contactExists($email)) return false;

		$sql = "UPDATE crude SET nome=:nome, email=:email WHERE id=:id";
		$sql = $this->pdo->prepare($sql);
		$sql->bindValue(':nome',$nome);
		$sql->bindValue(':email',$email);
		$sql->bindValue(':id',$id);
		$sql->execute();
		return true;
	}

	public function deleteFromEmail($email){

		if($this->contactExists($email)){
			$sql = "DELETE FROM crude WHERE email=:email";
			$sql = $this->pdo->prepare($sql);
			$sql->bindValue(':email',$email);
			$sql->execute();
			return true;
		}

		return false;
	}

	public function deleteFromId($id){

		$sql = "DELETE FROM crude WHERE id=:id";
		$sql = $this->pdo->prepare($sql);
		$sql->bindValue(':id',$id);
		$sql->execute();
	}

}















	 
?>
