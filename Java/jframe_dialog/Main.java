/*
	 Main.java (java)
	 
	 Objetivo: Estudo sobre adição de caixas de diálogo ao jframe do java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import javax.swing.JOptionPane;

public class Main
{
    public Main() {
    
    }
    
    
        public static void main(String args[])
        {
            String  nome;
            nome = JOptionPane.showInputDialog(null, "Qual e o seu nome ?", "Digite seu nome" , JOptionPane.QUESTION_MESSAGE );
            JOptionPane.showMessageDialog(null, "Ola "+nome , "Seja bem vindo", JOptionPane.INFORMATION_MESSAGE);
        }
} 
