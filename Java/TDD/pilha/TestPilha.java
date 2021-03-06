/*
	 TestPilha.java (Java)
	 
	 Objetivo: Estudo sobre TDD com junit.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 03/06/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

public class TestPilha{

	@Test
	@Tag("PilhaVazia")
	@DisplayName("PILHA VAZIA")
	public void testPilhaVazia(){
		Pilha p = new Pilha();
		assertTrue(p.estaVazia());
		assertEquals(0,p.tamanho());
	}

	@Test
	@Tag("EmpilhaElemento")
	@DisplayName("EMPILHA ELEMENTOS")
	public void testEmpilhaElemento(){
		Pilha p = new Pilha();
		
		/* Empilha primeiro elemento */
		p.empilha(1);
		assertFalse(p.estaVazia());
		assertEquals(1,p.topo());
		assertEquals(1,p.tamanho());

		/* Empilha segundo elemento */
		p.empilha(2);
		assertEquals(2,p.tamanho());
		assertEquals(2,p.topo());
	}

	@Test
	@Tag("Desempilha")
	@DisplayName("DESEMPILHA ELEMENTOS")
	public void testDesempilhaElemento(){
		Pilha p = new Pilha();

		/* Empilha 2 elementos e desempilha 1 */
		p.empilha(1);
		p.empilha(2);
		assertEquals(2,p.desempilha());
		assertEquals(1,p.tamanho());
		assertEquals(1,p.topo());
	}

	@Test
	@Tag("lancarErroDesempilharPilhaVazia")
	@DisplayName("EXCEPTION PILHA VAZIA")
	public void testPilhaVaziaException() throws PilhaVaziaException{
		Pilha p = new Pilha();

		/* Tenta remover de pilha vazia */
		assertThrows(PilhaVaziaException.class,()->{p.desempilha();});
	
	}

	@Test
	@Tag("lancarErroEmpilharPilhaCheia")
	@DisplayName("EXCEPTION PILHA CHEIA")
	public void testPilhaCheiaException() throws PilhaCheiaException{
		Pilha p = new Pilha();
		int i;

		/* Empilha elementos até encher a pilha */
		for(i=0;i<p.MAX;i++){
			p.empilha(i);
		}

		/* Tentar empilhar elemento em pilha cheia */
		assertThrows(PilhaCheiaException.class,()->{
				p.empilha(11);

			}
		);
	}
}
