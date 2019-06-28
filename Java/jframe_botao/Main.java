/*
	 mensagem.java (java)
	 
	 Objetivo: Estudo sobre adição de botões ao jframe do java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import javax.swing.*;
import java.awt.*;

public class Main extends JFrame
{
    
    public Main()
            
    {
        super("Trabalhando com botoes ");
        
        Container tela = this.getContentPane();
        tela.setLayout(null);
        
        JButton botao01 = new JButton ("Botao");
        botao01.setBounds(10, 10, 120, 50);
        
        tela.add(botao01);
        this.setSize(300,220);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
        
    }
    
    public static void main(String args[])
    {
        new Main();
    }
}  
