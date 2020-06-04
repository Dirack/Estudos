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
import org.junit.jupiter.api.Test;

public class TestPilha extends TestCase{

	@Test
	public void testPilhaVazia(){
		Pilha p = new Pilha();
		assertTrue(p.estaVazia());
		assertEquals(0,p.tamanho());
	}

	@Disabled("Pule este teste!!!")
	@Test
	public void testEmpilhaElemento(){
		Pilha p = new Pilha();
		p.empilha(1);
		assertFalse(p.estaVazia());
	//	p.empilha(2);
		assertEquals(1,p.tamanho());
		assertEquals(1,p.topo());
	}
}
