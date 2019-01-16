/*
	ajax.js (JavaScript)
	
	Objetivo: Exibir uma página XML do servidor. Esta página contém comentários cadastrados.
	Adaptado do estudo sobre solicitação Ajax em JavaScript.
	
	Email: rodolfo_profissional@hotmail.com

	Programador: Rodolfo A. C. Neves 16/01/2019
*/

function ajax(){

	/*
		XMLHttpRequest() é um objeto que permite fazer a comunicação com o
		servidor de forma dinâmica.
	*/
	var xmlHttp = new XMLHttpRequest();

	/* 
		onreadystatechange significa que a função abaixo será chamada toda
		vez que a propriedade readystate for alterada. readyState detém o
		status da XMLHttpRequest. Pode assumir os seguintes valores:
			0: requisição não inicializada
			1: Conexão com o servidor estabelecida
			2: requisição recebida
			3: processando requisição
			4: requisição terminada e a resposta está pronta 
		A propriedade status retorna o status-number de uma requisição:
			200: "OK"
			403: "Forbidden"
			404: "Not Found"
		Ou seja, o if na função abaixo permite que a resposta seja retornada se
		a requisição está terminada e pronta (readyState=4) e tudo ocorreu bem
		com a requisição (status=200).
		A propriedade responseText o servidor responde com texto.
		Se utilizar responseXML o servidor responde com um arquivo XML.
	*/

	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState===4&&xmlHttp.status===200){
			xmlDoc = xmlHttp.responseXML;
			txt = "";
			
			nome = xmlDoc.getElementsByTagName("nome");
			cidade = xmlDoc.getElementsByTagName("cidade");
			nacionalidade = xmlDoc.getElementsByTagName("nacionalidade");
			sexo = xmlDoc.getElementsByTagName("sexo");
			data = xmlDoc.getElementsByTagName("data");
			comentario = xmlDoc.getElementsByTagName("comentario");

			for(i=0; i<nome.length; i++){
				txt += "Nome: "+nome[i].childNodes[0].nodeValue + "<br>";
				txt += "Cidade: "+cidade[i].childNodes[0].nodeValue + "<br>";
				txt += "Nacionalidade: "+nacionalidade[i].childNodes[0].nodeValue + "<br>";
				txt += "Sexo: "+sexo[i].childNodes[0].nodeValue + "<br>";
				txt += "Data: "+data[i].childNodes[0].nodeValue + "<br>";
				txt += "Comentário: "+comentario[i].childNodes[0].nodeValue + "<br><br>";
			}

			document.getElementById("coments").innerHTML = txt;
		}
	};

	/* Abre o arquivo ajax.txt com o método GET*/
	xmlHttp.open("GET","comentarios.xml",true);

	/* Envia para a página */
	xmlHttp.send(null);

	
}
