/*
	 main.java (java)
	 
	 Objetivo: Parte 3 - Estudo sobre leitura de arquivos com Java.
	 Mini jogo de dados, Usuário x Computador (Função gerar número aleatório).	 

	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 11/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package programa_leitura_parte_3;

import java.util.Scanner;
import java.util.Random;

public class main{

	public static void main(String[] args){

		Scanner in = new Scanner(System.in);

		System.out.println("Olá, seja bem vindo ao jogo dos dados! ");

		System.out.println("Digite o seu nome: ");

		String nome = in.nextLine();

		System.out.println("Lançando dados...");

		Random dados = new Random();

		// Jogada do usuário
		System.out.println(nome+" lança dados...");

		int usuario = dados.nextInt(6)+1;
		System.out.println("Usuário tirou: "+usuario);

		// Jogada do Computador
		System.out.println(" Computador lança dados...");

		int computador = dados.nextInt(6)+1;
		System.out.println(" Computador tirou: "+computador);

		if(computador < usuario){

			System.out.println("Vc ganhou! Que legal! :)");

		}else{

			System.out.println("Que pena vc perdeu! :/");

		}

	}

}
