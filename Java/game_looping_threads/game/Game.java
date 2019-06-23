/*
	 Game.java (java)
	 
	 Objetivo: Estudo sobre game looping e threads em java
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package game;

public class Game implements Runnable{

	private boolean isRunning;

	public void updateGameFrame(){

		System.out.println("Updating Game...");

	}

	public void renderGame(){

		System.out.println("Renderizing Game...");

	}

	public synchronized void startGame(){

		this.isRunning = true;

		Thread thread = new Thread(this);
		thread.start();

	}

	public void run(){

		while(this.isRunning){

			updateGameFrame();
			renderGame();

		}

	}	

}
