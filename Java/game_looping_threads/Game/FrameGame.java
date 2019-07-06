/*
	 FrameGame.java (java)
	 
	 Objetivo: Gerar o Jframe (Tela de diálogo) de um programa no java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package Game;
import java.awt.Canvas;
import java.awt.Dimension;
import javax.swing.JFrame;
import java.awt.Graphics;
import java.awt.Color;

public class FrameGame extends Canvas{

	public static JFrame frame;
	private int HEIGHT;
	private int WIDTH;
	private int SCALE;
	private String FrameTitle;

	public FrameGame(int HEIGHT, int WIDTH, int SCALE, String FrameTitle){

		this.HEIGHT = HEIGHT;
		this.WIDTH = WIDTH;
		this.SCALE = SCALE;
		this.FrameTitle = FrameTitle;

	}

	public void startGameFrame(){

		this.setPreferredSize(new Dimension(this.WIDTH*this.SCALE,this.HEIGHT*this.SCALE));
		this.frame = new JFrame(this.FrameTitle);
		this.frame.add(this);
		this.frame.setResizable(false);
		this.frame.pack();
		this.frame.setLocationRelativeTo(null);
		this.frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.frame.setVisible(true);

	}

	public void paint(Graphics g){

		g.fillRect(0,0,this.WIDTH*this.SCALE,this.HEIGHT*this.SCALE);

		g.dispose();
	}

}
