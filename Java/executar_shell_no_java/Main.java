/*
	 Main.java (java)
	 
	 Objetivo: Estudo sobre execução de comandos do shell no java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 28/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

import java.io.*;

public class Main{

	public static void main(String[] args){
		
		try {

			// Run a shell command
			Process process = Runtime.getRuntime().exec("./teste.sh");

			int exitVal = process.waitFor();
				if (exitVal == 0) {
					System.out.println("Success!");
					System.exit(0);
				} else {
					System.out.println("Error!");
					System.exit(0);
				}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
