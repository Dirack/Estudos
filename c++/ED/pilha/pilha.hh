
typedef int TipoItem;

const int max_items = 100;

class pilha {

    private:
        int tamanho;
        int *estrutura;
    public:
        pilha();
        ~pilha();
        void inserir(int i);
        bool estaVazia();
        bool estaCheia();
        TipoItem remover();
        void imprimir();
        int qualTamanho();
};