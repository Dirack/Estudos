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
        if(estrutura == nullptr) return;
        delete [] estrutura;
        estrutura = nullptr;
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

    TipoItem pilha::remover()
    {
        if(estaVazia()){
            cout << "A pilha está vazia" << endl;
            return estrutura[tamanho];
        }

        tamanho--;
        return estrutura[tamanho-1];

    }

    void pilha::imprimir()
    {
        cout << "pilha: [";
        for(int i=0; i<tamanho; i++)
            cout << estrutura[i] << " ";
        
        cout << "]" << endl;
    }

    int pilha::qualTamanho()
    {
        return tamanho;

    }