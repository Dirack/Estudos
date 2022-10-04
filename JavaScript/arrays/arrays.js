/*
	 arrays.js (JavaScript)
	 
	 Objetivo: Estudo arrays em JavaScript.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 07/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/


document.write('<h1>Estudo sobre array</h1>');

/* Declaração de arrays em JavaScript */
lista = ["Item 1","Item 2",3,"Item 4"];

document.write("lista=["+lista+"]<br>");

// Retorna a posição do item no array lista
// se não foi encontrado retorna -1
document.write('A string "Item 2" da lista está na posição: '+lista.indexOf("Item 2")+"<br>\n");


// join junta os itens do array utilizando o
// caractere passado como separador
document.write('Itens de lista separados por vírgula: '+lista.join(',')+"<br>"); // Itens separados por vírgula
document.write('Itens de lista separados por barra: '+lista.join('/')+"<br>"); // Itens separados por barra

// Retirar último valor da lista
lista.pop();
document.write("lista=["+lista+"]<br>");

// Retirar primeiro valor da lista
lista.shift();
document.write("lista=["+lista+"]<br>");

// Adicionar valor a lista
lista.push("teste");
lista.push("teste 2");
lista.push("teste 3");
document.write("lista=["+lista+"]<br>");

// Remover valores específicos da lista
// splice o primeiro valor é a posição
// o segundo valor é a quantidade de 
// valores a serem removidos
lista.splice(2,3); // remover 3 valores a partir da posição 2
document.write("lista=["+lista+"]<br>");

lista1 = ["capa","docia","nola"];
lista2 = [1,2,3];
document.write("concat="+lista1.concat(lista2)+"<br>");
document.write(lista1.reverse()+"<br>");
document.write(lista2.map((item)=>{return item*2;}));
document.write(lista2.filter((item)=>{
	if(item>2){
		return true;
	}else{
		return false;
	}
})+"<br>");
document.write(lista2.every((item)=>{
	if(item>2){
		return true;
	}else{
		return false;
	}
})+"<br>");
document.write(lista2.some((item)=>{
	return (item>2)? true: false;
})+"<br>");
