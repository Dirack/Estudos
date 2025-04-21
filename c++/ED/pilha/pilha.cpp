#include <iostream>
#include "pilha.hh"

using namespace std;

    pilha::pilha()
    {
        tamanho = 0;
        estrutura = new TipoItem[max_items];
    }

    pilha::~pilha()
    {
        delete [] estrutura;
    }

    void pilha::inserir(int i)
    {
        if(estaCheia()){
            cout << "A pilha está cheia" << endl;
            return;
        }
        estrutura[tamanho] = i;
        tamanho++;
    }

    bool pilha::estaCheia()
    {
        return (tamanho == max_items);
    }

    bool pilha::estaVazia()
    {
        return (tamanho == 0);
    }