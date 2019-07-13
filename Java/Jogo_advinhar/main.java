/*
	 main.java (Java)
	 
	 Objetivo: Estudo sobre OO em Java, fazendo um jogo simples de advinhar números.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 12/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

import Game.Game;
import Game.Player;

public class main{

	public static void main(String[] args){

		Game game = new Game();
		Player player1 = new Player();
		Player player2 = new Player();
		Player player3 = new Player();

		// Inicia o jogo criando um número aleatório
		game.start();

		// player tenta adivinhar
		player1.guessNumber();
		player2.guessNumber();
		player3.guessNumber();

		// Player acertou?	
		player1.acertou=game.acertouNumero(player1.getPlayerNumber());
		player2.acertou=game.acertouNumero(player2.getPlayerNumber());
		player3.acertou=game.acertouNumero(player3.getPlayerNumber());

		if(player1.acertou || player2.acertou || player3.acertou){
			System.out.println("Temos um vencedor! :)");
		}else{
			System.out.println("Ninguém acertou o número! :(");
		}

		System.out.println("O número: "+game.numeroAdvinhar);
		System.out.println("O Player 1 chutou: "+player1.getPlayerNumber());
		System.out.println("O Player 2 chutou: "+player2.getPlayerNumber());
		System.out.println("O Player 3 chutou: "+player3.getPlayerNumber());
	}

}
