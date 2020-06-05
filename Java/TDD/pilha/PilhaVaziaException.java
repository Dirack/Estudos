/*
	 PilhaVaziaException.java (Java)
	 
	 Objetivo: Lançar exceptin ao tentar desempilhar pilha vazia.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 05/06/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

public class PilhaVaziaException extends RuntimeException{
	
	public PilhaVaziaException(){
		super("Não é possível desempilhar. Pilha vazia!");
	}

}
