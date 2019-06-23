/*
	 main.java (java)
	 
	 Objetivo: Estudo sobre FlowLayout em java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/
	
import FlowLayout.SegundaClasse;
import javax.swing.*;
import java.awt.FlowLayout;

public class main{
	
	public static void main(String[] args) {
		
		SegundaClasse janela = new SegundaClasse();
		janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			
		janela.setLayout(new FlowLayout());	
		janela.setTitle("Programa teste");
		janela.setVisible(true);
		janela.setLocationRelativeTo(null);
		janela.setSize(250, 150);
	}
}
