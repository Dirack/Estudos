#include <iostream>
#include "pilha.hh"

using namespace std;

int main(){


    pilha pilha1;

    pilha1 = pilha();

    int opcao = 0;

    do
    {
        pilha1.imprimir();
        cout << "0 - Encerrar" << endl;
        cout << "1 - Inserir na pilha" << endl;
        cout << "2 - Remover da pilha" << endl;
        cin >> opcao;
        if(opcao == 1){
            int valor;
            cin >> valor;
            pilha1.inserir(valor);
        }else if (opcao == 2){
            pilha1.remover();
        }

    } while (opcao != 0);
    

    pilha1.~pilha();
}