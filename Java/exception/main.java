/*
	 main.java (Java)
	 
	 Objetivo: Estudo sobre exception em Java.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 27/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

import except.Excecao;

public class main {
    public static void main(String args[]) throws Excecao
    {
        String frase = "Sou um teste!";
        if(!frase.contains("b") || !frase.contains("B"))
        throw new Excecao();
    }
}
