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
import Game.FramesPerSecond;
import javax.swing.JFrame;
import java.awt.image.BufferedImage;

public class RenderGame extends FramesPerSecond implements Runnable{

	private boolean isRunning;

	public static FrameGame tela;

	int HEIGHT;
	int WIDTH;
	int SCALE;
	String FrameTitle;

	private BufferedImage image;
	private BufferStrategy bs;

	public RenderGame(int HEIGHT,int WIDTH,int SCALE,String FrameTitle){

		this.HEIGHT = HEIGHT;
		this.WIDTH = WIDTH;
		this.SCALE = SCALE;
		this.FrameTitle = FrameTitle;
		this.tela = new FrameGame(this.HEIGHT,this.WIDTH,this.SCALE, this.FrameTitle);
		this.tela.startGameFrame();
		this.image = new BufferedImage(this.WIDTH,this.HEIGHT,BufferedImage.TYPE_INT_RGB);
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

		Graphics g = image.getGraphics();
		g.setColor( Color.BLACK);
		this.tela.frame.paint(g);
		/*g.fillRect(0,0,this.WIDTH*this.SCALE,this.HEIGHT*this.SCALE);
		g = (Graphics2D) bs.getDrawGraphics();
		g.drawImage(image, 0, 0, this.WIDTH*this.SCALE,this.HEIGHT*this.SCALE, null );
		bs.show();*/

	}

	public synchronized void startGame(){

		this.isRunning = true;
		this.setStartGameTime(System.nanoTime());
		Thread thread = new Thread(this);
		thread.start();

	}

	public void run(){

		while(this.isRunning){

			if(this.isRunning(System.nanoTime())){
				//updateGameFrame();
				renderizeGame();
			}

		}

	}		

}
