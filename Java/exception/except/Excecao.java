/*
	 Excecao.java (Java)
	 
	 Objetivo: Estudo sobre exception em Java.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 27/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

package except;

//import Exception;

public class Excecao extends Exception {
    @Override
    public String getMessage(){
        return "Não existe letra B em sua frase";
    }
}
