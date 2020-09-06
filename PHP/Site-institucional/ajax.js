/*
	ajax.js (JavaScript)
	
	Objetivo: Exibir os posts recentes na página index.html
	a partir dos dados na página posts.xml feito por solicitação AJAX. 
	Adaptado do estudo sobre solicitação Ajax em JavaScript.
	
	Email: rodolfo_profissional@hotmail.com

	Original: Rodolfo A. C. Neves 16/01/2019

	Programador: Rodolfo A. C. Neves 20/01/2019
*/

window.onload = ajax;

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

	
	/* 
		A saída foi adaptada para o formato exigido pela págiga index.html.
		A função abaixo pode ser readaptada para exibir qualquer formato
		html exigido pela página.

	*/
	xmlHttp.onreadystatechange = function(){	
		if(xmlHttp.readyState===4&&xmlHttp.status===200){

			xmlDoc = xmlHttp.responseXML;
			txt = "";
			
			/* Pegue os elementos a partir de uma página xml */
			titulo = xmlDoc.getElementsByTagName("titulo");
			imagem = xmlDoc.getElementsByTagName("imagem");
			texto = xmlDoc.getElementsByTagName("texto");

			/* Utilize o DOM para inserir os elementos na página */
			sobreDiv = document.createElement("div");

			sobreDiv.setAttribute("id","sobre");
			sobreDiv.setAttribute("class","sobre");

			//Uso insertBefore para inserir a div 'sobre' como primeira dentro da div 'container'
			document.getElementById("container").insertBefore(sobreDiv,document.getElementById("container").firstChild);

			// Adicione a imagem (Como a imagem flutua à esquerda ela deve vir antes)
			elementoIMG = document.createElement("img");
	
			elementoIMG.setAttribute("src",imagem[0].childNodes[0].nodeValue);

			document.getElementById("sobre").appendChild(elementoIMG);
			
			// Adicione o elemento titulo
			elementoTitulo = document.createElement("h4");

			elementoTitulo.appendChild(document.createTextNode(titulo[0].childNodes[0].nodeValue));

			document.getElementById("sobre").appendChild(elementoTitulo);

			// Adicione o texto
			elementoTexto = document.createElement("p");

			elementoTexto.appendChild(document.createTextNode(texto[0].childNodes[0].nodeValue));
			
			document.getElementById("sobre").appendChild(elementoTexto);
			
		}
	};

	/* Abre o arquivo home.xml com o método GET*/
	xmlHttp.open("GET","home.xml",true);

	/* Envia para a página */
	xmlHttp.send(null);

	
}
