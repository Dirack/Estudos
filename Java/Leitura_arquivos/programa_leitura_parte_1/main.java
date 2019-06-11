/*
	 main.java (java)
	 
	 Objetivo: Parte 1 - Estudo sobre leitura de arquivos com Java.
	 Neste estudo será pedido o nome do usuário e a resposta
	 será este nome exibido na tela.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 10/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package programa_leitura_parte_1;

import java.util.Scanner;

public class main{

	public static void main(String[] args){

		Scanner in = new Scanner(System.in);

		System.out.println("Digite o seu nome: ");

		String nome = in.nextLine();

		System.out.println("Seu nome é "+nome);


	}

}
