#include <iostream>

using namespace std;

const int max_size = 100;
typedef int TipoItem;

class pilha{

    private:
        int tamanho;
        int *estrutura;

    public:
        pilha();
        ~pilha();
        void inserir(int i);
};