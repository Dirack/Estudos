/*
	 main.java (java)
	 
	 Objetivo: Exemplificar a Orientação à Objetos em java.
	 Chama as classes inimigo e player e instancia objetos destas
	 classes.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 15/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package OO;

public class main{

	public static void main(String[] args){

		Inimigo inimigo = new Inimigo();
		Player player1 = new Player();
		Player player2 = new Player(); 

		player1.iniciarPlayer("Dirack");
		player2.iniciarPlayer("Fulano");

		inimigo.iniciarInimigo();


	}

}
