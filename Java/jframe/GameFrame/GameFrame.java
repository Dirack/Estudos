/*
	 GameFrame.java (java)
	 
	 Objetivo: Gerar o Jframe (Tela de diálogo) de um programa no java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package GameFrame;
import java.awt.Canvas;
import java.awt.Dimension;
import javax.swing.JFrame;

public class GameFrame extends Canvas{

	public static JFrame frame;
	private int HEIGHT;
	private int WIDTH;
	private int SCALE;

	public GameFrame(int HEIGHT, int WIDTH, int SCALE){

		this.HEIGHT = HEIGHT;
		this.WIDTH = WIDTH;
		this.SCALE = SCALE;

	}

	public void startGameFrame(String FrameTitle){

		this.setPreferredSize(new Dimension(WIDTH*SCALE,HEIGHT*SCALE));
		frame = new JFrame(FrameTitle);
		frame.add(this);
		frame.setResizable(false);
		frame.pack();
		frame.setLocationRelativeTo(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);

	}

}
