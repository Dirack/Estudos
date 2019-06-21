/*
	 hipotenusa.java (java)
	 
	 Objetivo: Define o tipo Pitágoras (Dois catetos de um triângulo retângulo)
	 e o método que calcula a hipotenusa. 
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 21/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package trianguloRetangulo;
import java.lang.Math; 

public class Pitagoras{

	protected int catetoA;
	protected int catetoB;

	public void init(int a, int b){

		this.catetoA = a;
		this.catetoB = b;

	}

	public void hipotenusa(){

		double hipo;

		hipo = Math.sqrt(this.catetoA*this.catetoA+this.catetoB*this.catetoB);

		System.out.println("A hipotenusa de "+this.catetoA+" e "+this.catetoB+" é "+hipo);		

	}
	

}
