/*
	 Clicado.java (java)
	 
	 Objetivo: Estudo sobre execução de eventos com jframe do java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import javax.swing.*;
import java.awt.event.*;

public class Clicado implements ActionListener
{
    public void actionPerformed(ActionEvent evento)
    {
        JOptionPane.showMessageDialog(null, "Você clicou no botão !!","Botao clicado", JOptionPane.PLAIN_MESSAGE);
    }
} 
