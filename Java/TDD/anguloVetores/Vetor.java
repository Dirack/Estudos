/*
	 Vetor.java (Java)
	 
	 Objetivo: Classe vetor em coordenadas cartesianas.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 21/10/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

public class Vetor{
	
	double x=0;
	double y=0;
	double modulo=0;

	public Vetor(double x,double y){
		this.x = x;
		this.y = y;
		this.modulo = Math.sqrt(x*x+y*y);
	}

	public double calculaAnguloEntreVetores(Vetor v){
		
		double angulo = Math.acos(((v.x*this.x)+(v.y*this.y))/(this.modulo*v.modulo));

		return angulo;
	}

}
