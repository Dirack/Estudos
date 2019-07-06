/*
	 RenderGame.java (java)
	 
	 Objetivo: Estudo sobre game looping e threads em java
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package Game;

import java.awt.Canvas;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.image.BufferStrategy;
import java.awt.Graphics2D;
import Game.FrameGame;
import javax.swing.JFrame;

public class RenderGame implements Runnable{

	private boolean isRunning;

	public static FrameGame tela;

	int HEIGHT = 160;
	int WIDTH = 120;
	int SCALE = 3;
	String FrameTitle = "Game #1";

	public RenderGame(){

		this.tela = new FrameGame(this.HEIGHT,this.WIDTH,this.SCALE, this.FrameTitle);
		this.tela.startGameFrame();
	}

	public void updateGameFrame(){

		System.out.println("Updating Game...");

	}

	public void renderizeGame(){

		BufferStrategy bs = this.tela.frame.getBufferStrategy();

		if(bs == null){
			System.out.println("oi");
			this.tela.frame.createBufferStrategy(3);
			return;
		}

		System.out.println("Renderizando");

		Graphics g = bs.getDrawGraphics();
		g.setColor(new Color(19,19,19));
		g.fillRect(0,0,160*4,120*4);
		bs.show();

	}

	public synchronized void startGame(){

		this.isRunning = true;

		Thread thread = new Thread(this);
		thread.start();

	}

	public void run(){

		while(this.isRunning){

			//updateGameFrame();
			renderizeGame();

		}

	}	

}
