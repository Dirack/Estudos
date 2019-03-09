/*
	 datas.js (JavaScript)
	 
	 Objetivo: Estudo sobre manipulação de datas em JavaScript.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 09/03/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

// Objeto date do JavaScript
dt = new Date();

// horas
document.write("Hora: "+dt.getHours()+"<br>");

// minutos
document.write("Minutos: "+dt.getMinutes()+"<br>");

// segundos
document.write("Segundos: "+dt.getSeconds()+'<br>');

// Data em 1 de Janeiro de 1970
document.write("Data em 1 de Janeiro de 1970: "+Date(0)+"<br>");

// Valor em milissegundos de 10 de março
document.write("Data em convertida do formato americano: "+Date.parse("March 10, 2001")+"<br>");

// Dia de 1-31
document.write("dia: "+dt.getDate()+"<br>");

// Dia da semana 1-6
dia = ["domingo","segunda","terça","quarta","quinta","sexta","sábado"];
document.write("Dia da semana: "+dia[dt.getDay()]+"<br>");

// Ano completo
document.write("Ano: "+dt.getFullYear()+"<br>");

// Data no formato DD/MM/AAAA
dia = dt.getDate().toString(); // toString converte de número para string
mes = (dt.getMonth()+1).toString(); // Mês começa em 0, por isso soma 1
ano = dt.getFullYear();
dia = (dia.length==1)? "0"+dia:dia; // Se o dia tem um algarismo, ponha o zero na frente
mes = (mes.length==1)? "0"+mes:mes; // Se o mês tem um algarismo, ponha o zero na frente
document.write("Data DD/MM/AAAA: "+dia+'/'+mes+'/'+ano+"<br>");

// Adicionar horas
dt.setHours(dt.getHours()+2);
document.write("Hora atual mais 2: "+dt.getHours()+"<br>");
