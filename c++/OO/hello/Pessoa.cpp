#include <iostream>
#include "Pessoa.hh"

string Pessoa::getnome()
{
    return this->nome;
}

void Pessoa::setnome(string nome){
    this->nome = nome;
}