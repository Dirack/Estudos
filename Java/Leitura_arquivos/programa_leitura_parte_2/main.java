/*
	 main.java (java)
	 
	 Objetivo: Parte 2 - Estudo sobre leitura de arquivos com Java.
	 Neste estudo será pedido os dados do usuário e a resposta
	 será estes dados exibidos na tela. Há ainda um teste para verificar
	 se o usuário mora em Belém (Exemplo do método equals).
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 11/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package programa_leitura_parte_2;

import java.util.Scanner;

public class main{

	public static void main(String[] args){

		Scanner in = new Scanner(System.in);

		System.out.println("Digite o seu nome: ");

		String nome = in.nextLine();

		System.out.println("Digite o seu peso: ");

		String peso = in.nextLine();

		System.out.println("Digite o sua idade: ");

		String idade = in.nextLine();

		System.out.println("Digite a cidade onde vc mora: ");

		String cidade = in.nextLine();

		if(cidade.equals("Belém")){

			System.out.println("Que legal! Sou de Belém Também! :)");

		}else{

			System.out.println("Que pena que vc não é de Belém! :/");

		}

		System.out.println("Digite o Estado onde vc mora: ");

		String estado = in.nextLine();

		System.out.println("Digite o seu País: ");

		String pais = in.nextLine();


		System.out.println("--------------");

		System.out.println("Resultado do teste: ");

		System.out.println("Seu nome é "+nome);
		System.out.println("Seu peso é "+peso);
		System.out.println("Sua idade é "+idade);
		System.out.println("Você mora em "+cidade+", "+estado+", "+pais);

	}

}
