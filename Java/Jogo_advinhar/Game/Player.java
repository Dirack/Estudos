/*
	 player.java (Java)
	 
	 Objetivo: Estudo sobre OO em Java, fazendo um jogo simples de advinhar números.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 12/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

package Game;

public class Player{

	private int number=0;
	public boolean acertou=false;

	public int getPlayerNumber(){
		return this.number;
	}

	public void guessNumber(){
		this.number=(int)(Math.random()*10.0);
	}

}
