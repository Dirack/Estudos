# Estudo sobre a api do madagascar axa.c

> Esta api permite a criação dos eixos coordenados dos arquivos rsf

Neste exercício, construa a estrutura de dados de um eixo do pacote Madagascar. Este objeto é um eixo regularmente espaçado
identificado por n, o e d; onde n é o número de amostras do eixo coordenado, o é a origem do eixo, e d é a amostragem.
Sua tarefa é construir tal estrutura de dados, o construtor e os métodos getter e setter da estrutura.
O resultado é armazenado nas seguintes variáveis globais (atribua as variáveis usando os métodos setter e getter).
Use o método construtor para atribuir os valores a estrutura de dados e get os valores para atribuir as variáveis
identificadas com o sufixo \_antes. Depois set os novos valores para as variáveis identificadas com o sufixo \_depois.

- n\_antes, número de amostras antes de usar o set, 10

- n\_depois, número de amostras depois de usar o set, 20

- o\_antes, origem do eixo antes de usar o set, 0

- o\_depois, origem do eixo depois de usar o set, 1

- d\_antes, amostragem antes de usar o set, 0.5

- d\_depois, amostragem depois de usar o set, 0.1

- label\_antes, legenda antes de usar o set, "Distância"

- label\_depois, legenda depois de usar o set, "Profundidade"

- unit\_antes, unidade antes de usar o set, "Km"

- unit\_depois, unidade depois de usar o set, "m"

Exemplo de como deverá ser a implementação destes métodos na função main:

```c
int main(void){

	/* Inicializa a estrutura */
	sf_axis ax;

	/* Constroi o eixo e seta label e unit */
	ax = sf_maxa(10,0,0.5);
	sf_setlabel(ax,"Distância");
	sf_setunit(ax,"Km");

	/* Muda os valores dos parâmetros do eixo */
	sf_setn(ax,20);
	sf_setd(ax,0.1);
	sf_seto(ax,1);
	sf_setlabel(ax,"Profundidade");
	sf_setunit(ax,"m");

}
```
