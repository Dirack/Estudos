/*
	poo.js (JavaScript)

	Objetivo: Estudo sobre Programação Orientada a Objetos (POO) em
	Javascript. Scripts da página poo.html

	Programador: Rodolfo A. C. Neves (Dirack) 28/01/2019
*/

/* Referência a função (Callback)
	window.onload significa que quando a janela do navegador (objeto window)
	carregar (propriedade onload) a função showBlog será chamada automaticamente 
	por referência sem a necessidade de chamá-la diretamente.
*/
window.onload = showBlog;

// Construtor do Objeto Blog
function Blog(data,texto){
	this.data=data;
	this.texto=texto;
}

// Entradas do blog armazenas no array blog[] que é um array de objetos do tipo Blog(data,texto)
var blog = [ 
	new Blog("01/04/2019","Hoje é o dia da mentira, eu contei vc caiu! Na verdade hoje é primeiro de abril..."),
	new Blog("25/12/2018","Então é Natal, a festa cristã..."),
	new Blog("10/11/2018","Texto aleatório só p exemplo"),	
	new Blog("15/10/2018","Oi, tudo blz?"),	
	new Blog("02/07/2018","Esse é um estudo sobre POO em Javascript"),	
	new Blog("05/12/2017","Programação em JavaScript é muito legal!")			
];

// Função para mostrar as entradas do blog
function showBlog(){

	// Texto do blog armazenado na variável txt
	txt = "";

	// Varre todas as entradas do blog
	for (i=0; i<blog.length;i++){

		// Gerar layout cor sim cor não
		// Uma entrada terá fundo preto com letras brancas
		// a outra entrada terá fundo branco com letras pretas
		if (i%2 == 0){

			txt += 	'<p style="background-color:#000000; color:#ffffff">';
		}else{
			txt += 	'<p>';
		}

		// Código HTML formatado: 
		// Formata a entrada para ser exibida na página
		txt += '<strong>'+blog[i].data+'</strong><br>';
		txt += blog[i].texto+'</p>';
	}

	//substitua o conteúdo da div id=blog pelo texto formatado na variável 'txt'
	document.getElementById("blog").innerHTML = txt;	
}
