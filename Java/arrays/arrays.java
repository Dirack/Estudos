/*
	 arrays.java (java)
	 
	 Objetivo: Ilustrar a lógica dos arrays em java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 07/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package arrays;

public class arrays{

	public static void main(String[] args){

		// Array do tipo string
		String[] nome= new String[5];

		nome[0] = "João";
		nome[1] = "Rodolfo";

		String[][] nome2= new String[2][2];

		nome2[0][0] = "Rodolfo Dirack";

		System.out.println("Meu nome é "+nome2[0][0]);



	}

}
