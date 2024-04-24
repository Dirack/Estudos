#include <iostream>
#include "Pessoa.hh"

int main(){
    Pessoa *p = new Pessoa();

    p->setnome("fulano");
    string nome = p->getnome();
}