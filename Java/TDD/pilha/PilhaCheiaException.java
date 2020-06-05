/*
	 PilhaCheiaException.java (Java)
	 
	 Objetivo: Lançar exception ao tentar empilhar pilha cheia.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 05/06/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


public class PilhaCheiaException extends RuntimeException{
	public PilhaCheiaException(){
		super("Não é possível empilhar. Pilha cheia!");
	}
}
