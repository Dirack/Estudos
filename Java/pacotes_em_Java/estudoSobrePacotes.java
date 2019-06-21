/*
	 estudoSobrePacotes.java (java)
	 
	 Objetivo: Estudo sobre pacotes no desenvolvimento em Java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 21/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import mesages.mensagem;
import trianguloRetangulo.Pitagoras;

public class estudoSobrePacotes{

	public static void main(String[] args){

		Pitagoras pitagoras = new Pitagoras();

		pitagoras.init(3,4);

		mensagem.mensagem();

		pitagoras.hipotenusa();

	}


}
