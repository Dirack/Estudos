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
	private final int HEIGHT=160;
	private final int WIDTH=120;
	private final int SCALE=3;

	public void startGameFrame(){

		this.setPreferredSize(new Dimension(WIDTH*SCALE,HEIGHT*SCALE));
		frame = new JFrame();
		frame.add(this);
		frame.setResizable(false);
		frame.pack();
		frame.setLocationRelativeTo(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);

	}

}
