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

	/* Propriedades
		Acrescentar propriedades a um objeto
		se faz através do operador this, como
		no exemplo:
		this.propriedade=valor;
	*/
	this.data=data; // Data da entrada no Blog
	this.texto=texto; // Texto da entrada

	/* Métodos	
		Acrescentar métodos ao objeto Blog 
		Quando se acrescenta métodos a um objeto
		se faz através de literais de função: 
		this.nomeDaFuncao = function(){código};
	*/
	//Converter a data para string no formato DD/MM/AAAA
	this.formataData = function(){
		
		// Utilizo o operador ternário para obter o dia e o mês
		// pois getDate e getMonth fornecem o número do dia e do 
		// mês com apenas 1 algarismo quando o dia ou mês é menor 
		// que 10.
		// Sintaxe: (condition) ? expr1 : expr2 
		dia = this.data.getDate().toString();
		dia = (dia.length==1)?"0"+dia:dia;

		// o mês vai de 0 a 11 por isso soma 1
		mes = (this.data.getMonth()+1).toString();
		mes = (mes.length==1)?"0"+mes:mes;

		return dia+"/"+mes+"/"+this.data.getFullYear();
	};

	this.formataTexto = function(cor){

		// Gerar layout cor sim cor não
		// Uma entrada terá fundo preto com letras brancas
		// a outra entrada terá fundo branco com letras pretas
		// a depender da variável 'cor' do tipo booleano
		if (cor == 0){

			txt += 	'<p style="background-color:#000000; color:#ffffff">';
		}else{
			txt += 	'<p>';
		}

		// Código HTML formatado: 
		// Com o método toString() formate a data para ser exibida na página
		txt += '<strong>'+this.formataData()+'</strong><br>';
		txt += this.texto+'</p>';
	};
}

// Entradas do blog armazenas no array blog[] que é um array de objetos do tipo Blog(data,texto)
// Agora a data é um objeto do tipo Date, não uma string! A conversão de Date para string será feita
// pelo método toString() do objeto blog. O objeto Date lê as datas no formato AAAA/MM/DD
var blog = [ 
new Blog(new Date("2019/04/01"),"Hoje é o dia da mentira, eu contei vc caiu! Na verdade hoje é primeiro de abril..."),
new Blog(new Date("2018/12/25"),"Então é Natal, a festa cristã..."),
new Blog(new Date("2018/11/10"),"Texto aleatório só p exemplo"),	
new Blog(new Date("2018/10/15"),"Oi, tudo blz?"),	
new Blog(new Date("2018/07/02"),"Esse é um estudo sobre POO em Javascript"),	
new Blog(new Date("2017/12/05"),"Programação em JavaScript é muito legal!")			
];

// Função para mostrar as entradas do blog
function showBlog(){

	// Texto do blog armazenado na variável txt
	txt = "";

	// Varre todas as entradas do blog
	for (i=0; i<blog.length;i++){
	
		// Chama formataTexto() que já deixa a
		// entrada do blog no formato correto
		blog[i].formataTexto(i%2==0);

	}

	//substitua o conteúdo da div id=blog pelo texto formatado na variável 'txt'
	document.getElementById("blog").innerHTML = txt;	
}
