#include <iostream>
#include "pilha.hh"

using namespace std;

int main(){


    pilha pilha1;

    pilha1 = pilha();

    cout << "oi" << endl;

    pilha1.inserir(1);

    pilha1.inserir(4);

    pilha1.~pilha();
}