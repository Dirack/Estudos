/*
	 botao.java (java)
	 
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

public class Botao extends JFrame{
 private JButton ok,
         cancelar;
 
 public Botao(){
  super("Criando botões");
  setLayout( new FlowLayout() );

  ok = new JButton("OK");
  cancelar = new JButton("Cancelar");
  add(ok);
  add(cancelar);
 }

}


