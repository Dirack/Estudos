/*
	 TestPilha.java (Java)
	 
	 Objetivo: Estudo sobre TDD com junit.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 03/06/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

import org.junit.Assert.*;
import junit.framework.TestCase;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;

public class TestPilha extends TestCase{

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
}
