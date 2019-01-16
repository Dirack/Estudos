/*
	ajax.js (JavaScript)

	Objetivo: Estudo sobre solicitação Ajax em JavaScript.
	Script da página index.html

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
		if(xmlHttp.readyState===4&&xmlHttp.status===200)
			document.getElementById("retorno").innerHTML = xmlHttp.responseText;

	};

	/* Abre o arquivo ajax.txt com o método GET*/
	xmlHttp.open("GET","ajax.txt",true);

	/* Envia para a página */
	xmlHttp.send();
}
