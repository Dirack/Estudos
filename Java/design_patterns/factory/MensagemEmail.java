/*
	 MensagemEmail.java (Java)
	 
	 Objetivo: Mensagem a ser enviada por email.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 30/05/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

import javax.swing.JOptionPane;

public class MensagemEmail implements Mensagem{

	public void enviar(String mensagem){
		JOptionPane.showMessageDialog(null,"EMAIL: "+mensagem);
	}
}
