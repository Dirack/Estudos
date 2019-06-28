/*
	 mensagem.java (java)
	 
	 Objetivo: Ilustrar como exibir uma mensagem na tela co JFrame do java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import javax.swing.JOptionPane;

public class Main
{
    public static void main(String args[])
    {
        JOptionPane.showMessageDialog(null, "Exibindo uma mensagem", "Título",JOptionPane.PLAIN_MESSAGE); 
    }
} 
