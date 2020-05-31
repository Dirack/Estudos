/*
	 MensagemFactory.java (Java)
	 
	 Objetivo: Factory dos objetos Mensagem.
	 Retorna um tipo de Mensagem a depender do inteiro
	 passado.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 30/05/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


public class MensagemFactory{

	public static Mensagem createMessage(int i){
	
		if(i == 1){
			return new MensagemSMS();
		}else{
			return new MensagemEmail();
		}
	}
}
