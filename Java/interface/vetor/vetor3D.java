/*
	 vetor3D.java (java)
	 
	 Objetivo: Implementar a classe vetor 3D a partir da classe vetor 2D.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 16/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/
package vetor;

public class vetor3D extends vetor2D{

	protected double z;

	public void iniciarVetor(double x1, double x2, double x3){

		this.x = x1;
		this.y = x2;
		this.z = x3;

	}

	public void mostrarComponentesVetor(){

		super.mostrarComponentesVetor();
		System.out.println("z="+this.z);

	}

}
