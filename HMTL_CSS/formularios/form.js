// Fornecer a data de hoje
function data_hoje(){
	var data=new Date();
	var meses=new Array("janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
	var dia=new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");

	document.write(dia[data.getDay()]+", "+data.getDate()+" de "+meses[data.getMonth()]+" de "+data.getFullYear());

}

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
