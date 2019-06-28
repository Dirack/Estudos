/*
	 Main.java (java)
	 
	 Objetivo: Estudo sobre execução de eventos com jframe do java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Principal extends JFrame
{
    public Principal()
    {
        super("Clique no botao !!");
        
        Container tela = this.getContentPane();
        tela.setLayout (new FlowLayout());
        
        JButton botao1 = new JButton("Clique aqui");
        
        botao1.addActionListener(new Clicado());
        
        tela.add(botao1);
        
        this.setSize(280,200);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);
        
    }
    
    public static void main(String args[])
    {
        new Principal();
    }
} 
