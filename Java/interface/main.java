/*
	 main.java (java)
	 
	 Objetivo: Programa principal para testar as classes vetor2D e vetor3D.
	 Estudo sobre interfaces e OO em java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 16/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/
import vetor.vetor3D;

public class main{

	public static void main(String[] args){

		vetor3D vetor = new vetor3D();

		vetor.iniciarVetor(1.0,2.0,3.0);

		vetor.mostrarComponentesVetor();

	} 

}
