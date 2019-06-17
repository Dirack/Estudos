/*
	 vetor3D.java (java)
	 
	 Objetivo: Implementar a classe vetor 3D a partir da classe vetor 2D.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 16/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

public class vetor3D extends vetor2D{

	double z;

	public void mostrarComponentesVetor(){

		super.mostrarComponentesVetor();
		System.out.println("z="+this.z);

	}

}
