public class main {
    public enum EstacoesDoAno{
        PRIMAVERA,
        VERAO,
        OUTONO,
        INVERNO
    }
    public static void main(String[] args) {
        for (EstacoesDoAno estacao : EstacoesDoAno.values()) {
            System.out.println(estacao);
        }
	EstacoesDoAno estacaoAtual[] = EstacoesDoAno.values();

	for (EstacoesDoAno estacao : estacaoAtual)
	{
	    System.out.println("A estação " + estacao + " corresponde ao índice " + estacao.ordinal());
	}
	/* Resultado:

	    A estação PRIMAVERA corresponde ao índice 0

	    A estação VERAO corresponde ao índice 1

	    A estação OUTONO corresponde ao índice 2

	    A estação INVERNO corresponde ao índice 3

	*/

    }
 }
 /* Resultado:
 PRIMAVERA
 VERAO
 OUTONO
 INVERNO
 */
