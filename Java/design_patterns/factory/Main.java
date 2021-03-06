/*
	 Main.java (Java)
	 
	 Objetivo: Estudo sobre o padrão de projeto Factory.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 30/05/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


import javax.swing.JOptionPane;

public class Main{

	public static void main(String[] args){

		String texto = JOptionPane.showInputDialog(null);
		Mensagem mensagem = MensagemFactory.createMessage(1);
		mensagem.enviar(texto);
	}
}
