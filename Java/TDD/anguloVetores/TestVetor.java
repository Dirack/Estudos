/*
	 TestVetor.java (Java)
	 
	 Objetivo: Teste da classe Vetor.
	 Estudo sobre TDD com junit.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 21/10/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

public class TestVetor{

	@Test
	@Tag("CalculaAnguloEntreVetores")
	@DisplayName("TESTE VETOR")
	public void testCalculaAnguloEntreVetores(){
		double x1 = 0.0, x2 = 1.0;
		double y1 = 1.0, y2 = 0.0;
		double x3 = 1.0, y3 = 1.0;
		Vetor v1 = new Vetor(x1,y1);
		Vetor v2 = new Vetor(x2,y2);
		Vetor v3 = new Vetor(x3,y3);

		/* ângulo entre v1 e v2 deve ser PI/2*/
		assertEquals((Math.PI/2.),v1.calculaAnguloEntreVetores(v2),0.01);

		/* ângulo entre dois vetores iguais deve ser 0 */
		assertEquals(0.0,v1.calculaAnguloEntreVetores(v1),0.01);
		assertEquals(0.0,v2.calculaAnguloEntreVetores(v2),0.01);

		/* ângulo entre os vetores v1 e v3 deve ser PI/4 */
		assertEquals(0.785,v3.calculaAnguloEntreVetores(v1),0.01);
	}

}
