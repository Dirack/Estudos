/*
	 Button.java (java)
	 
	 Objetivo: Estudo sobre criação de botões dentro de um JFrame do java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package Frame;

import javax.swing.JFrame;
import javax.swing.JButton;
import java.awt.FlowLayout;
import Frame.Frame;

public class Button extends JFrame{
	
	private JButton buttonMade;
	private String buttonTitle;

	public Button(String title){

		this.buttonTitle = title;

	}
 
	public void addButton(Frame frame){

		frame.frame.setLayout( new FlowLayout() );
		buttonMade = new JButton(buttonTitle);
		frame.frame.add(buttonMade);

	}

}


