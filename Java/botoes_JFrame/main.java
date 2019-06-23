/*
	 main.java (java)
	 
	 Objetivo: Estudo sobre botões dentro de um JFrame do java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import javax.swing.JFrame;
import Frame.Botao;

public class main {
 public static void main(String[] args) {
  Botao botao1 = new Botao();
  
  botao1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  botao1.setSize(350,80);
  botao1.setVisible(true);
 }
}


