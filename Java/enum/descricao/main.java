public class main {
    public enum MesesDoAno {
        JANEIRO(1, "Janeiro"),
        FEVEREIRO(2, "Fevereiro"),
        MARCO(3, "Março");
 
        private final int valor;
        private final String descricao;
 
        MesesDoAno(int valor, String descricao) {
            this.valor = valor;
            this.descricao = descricao;
        }
 
        public int getValor() {
            return this.valor;
        }
        public String getDescricao() {
            return this.descricao;
        }
    }
 
    public static void main(String[] args) {
 
        MesesDoAno mes = MesesDoAno.FEVEREIRO;
        System.out.println("Valor da constante: " + mes + "\n" + "Valor numérico do mês: " + mes.getValor() + "\n" + "Descrição do mês: " + mes.getDescricao());
 
    }
 }
/* Resultado: 
 Valor da constante: FEVEREIRO
 Valor numérico do mês: 2
 Descrição do mês: Fevereiro
*/
