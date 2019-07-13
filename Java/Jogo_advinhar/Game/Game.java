/*
	 Game.java (Java)
	 
	 Objetivo: Classe que define o Jogo de adivinhar
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 12/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/
package Game;

public class Game{

	public int numeroAdvinhar=0;

	public void start(){

		this.numeroAdvinhar=(int)(Math.random()*10.0);

	}

	public boolean acertouNumero(int numero){
		
		if (numero != this.numeroAdvinhar) {
			return false;
		}else{
			return true;
		}
	} 	
}
