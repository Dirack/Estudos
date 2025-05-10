#include <iostream>
#include "pilha.hh"

using namespace std;

int main(){

    pilha p1;

    p1 = new pilha::pilha();

    p1.inserir(1); p1.inserir(2); p1.inserir(3);

    p1.~pilha();
}