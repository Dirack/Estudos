/*
	 vetor2D.java (java)
	 
	 Objetivo: Implementar a classe vetor2D com a interface vetorInterface.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 16/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

public class vetor2D implements vetorInterface{

	double x;
	double y;

	public void mostrarComponentesVetor(){

		System.out.println("x="+this.x);
		System.out.println("y="+this.y);

	}

}
