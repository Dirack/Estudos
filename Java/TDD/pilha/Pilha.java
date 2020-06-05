/*
	 Pilha.java (Java)
	 
	 Objetivo: Classe Pilha para o estudo sobre TDD.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 03/06/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

public class Pilha{
	
	int[] elementos = new int[10];
	int tamanho=0;

	public boolean estaVazia(){
		return (this.tamanho() == 0);
	}

	public int tamanho(){
		return this.tamanho; 
	}

	public void empilha(int i){
		this.elementos[tamanho]=i;
		this.tamanho++;
	}

	public int topo(){
		return this.elementos[this.tamanho-1];
	}
	
	public int desempilha(){
		if(this.estaVazia())
			throw new PilhaVaziaException();
		int topo = this.topo();
		tamanho--;
		return topo;
	}
}
