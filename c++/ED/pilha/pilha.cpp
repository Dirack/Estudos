#include <iostream>
#include "pilha.hh"

using namespace std;

    pilha::pilha()
    {
        tamanho = 0;
        estrutura = new TipoItem[max_size];
    }
    
    pilha::~pilha()
    {
        delete [] estrutura;
    }
    
    void pilha::inserir(int i)
    {
        estrutura[tamanho] = i;
        tamanho++;
    }