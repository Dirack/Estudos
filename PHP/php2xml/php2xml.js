/*
	php2xml.js (JavaScript)	

	Objetivo: Estudo sobre como gerar arquivo XML a partir de um script PHP.
	Valida os dados do formulaŕio na página php2xml.html para que possam ser
	registrados pelo script em PHP php2xml.php no arquivo comentarios.xml

	Email: rodolfo_profissional@hotmail.com
	
	Programador: Rodolfo A. C. Neves 16/01/2019
*/

// Checar se o usuário forneceu todos os dados
function checar(){
	
	// O usuário forneceu o nome?	
	if (document.getElementById("n").value==""){
		alert("Forneça o seu nome!");
		return false;
	}
	
	// forneceu a cidade?
	else if (document.getElementById("c").value==""){
		alert("Forneça a sua cidade!");
		return false;
	}
	// forneceu a data de nascimento?
	else if (document.getElementById("data").value==""){
		alert("Forneça a sua data de nascimento!");
		return false;
	}
	 
	else{
		// envie o formulário
		return true;
	}
}
