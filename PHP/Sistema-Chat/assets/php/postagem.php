<?php
/*
	postagem.php (PHP)
	
	Objetivo: Script para postar as mensagens na área de mensagens
	do chat.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 12/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

*/

function postagem($data,$autor,$mensagem,$usuario){

	// Se eu não sou o autor da mensagem adote um layout
	// Se for a minha resposta adote outro layout
	if("$autor"!="$usuario"){

		echo "<div class='widgetMensagem'>\n";
		echo "\t<div class='dataMensagem'>'$data'</div>\n";
		echo "\t\t<div class='mensagem'>\n";
		echo "\t\t\t<div class='imagemMensagem'>\n";
		echo "\t\t\t\t<div class='imagemPessoa'>\n";
		echo "\t\t\t\t\t<div class='fotoPessoa' style='background-image: url('..images".$usuario.".jpg');'>";
		echo "\t\t\t\t\t\t<div class='sombraBolinhaOnline'>\n";
		echo "\t\t\t\t\t\t\t<div class='bolinhaOnline'></div>\n";
		echo "\t\t\t\t\t\t</div>\n";
		echo "\t\t\t\t\t</div>\n";
		echo "\t\t\t\t</div>\n";
		echo "\t\t\t</div>\n";
		echo "\t\t<div class='textoMensagem outraPessoa'>$mensagem</div>\n";
		echo "\t</div>\n";
		echo "</div>\n";
	}else{

		echo "<div class='widgetMensagem'>\n";
		echo "\t<div class='dataMensagem'>'$data'</div>\n";
		echo "\t\t<div class='mensagem euPessoaContainer'>\n";
		echo "\t\t\t<div class='imagemMensagem' style='display: none;'>\n";
		echo "\t\t\t\t<div class='imagemPessoa'>\n";
		echo "\t\t\t\t\t<div class='fotoPessoa'>\n";
		echo "\t\t\t\t\t\t<div class='sombraBolinhaOnline'>\n";
		echo "\t\t\t\t\t\t\t<div class='bolinhaOnline'></div>\n";
		echo "\t\t\t\t\t\t</div>\n";
		echo "\t\t\t\t\t</div>\n";
		echo "\t\t\t\t</div>\n";
		echo "\t\t\t</div>\n";
		echo "\t\t<div class='textoMensagem euPessoa'>$mensagem</div>\n";
		echo "\t</div>\n";
		echo "</div>\n";

	}

}


?>
