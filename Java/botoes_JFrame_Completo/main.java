/*
	 main.java (java)
	 
	 Objetivo: Estudo sobre jframe em java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import Frame.Frame;
import Frame.Button;

public class main{

	public static void main(String[] args){

		final int HEIGHT = 160;
		final int WIDTH = 120;
		final int SCALE = 3;
		final String FrameTitle = "Game #1";

		Frame screen = new Frame(HEIGHT,WIDTH,SCALE,FrameTitle);
		Button button = new Button("Ok");
		button.addButton(screen);
		screen.startFrame();

	}

}
