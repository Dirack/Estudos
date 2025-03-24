#include <iostream>

// Definindo um namespace chamado 'MeuNamespace'
namespace MeuNamespace {
    void saudacao() {
        std::cout << "Hello, from my namespace" << std::endl;
    }

    int soma(int a, int b) {
        return a + b;
    }
}

int main() {
    // Usando a função saudacao do MeuNamespace
    MeuNamespace::saudacao();

    // Usando a função soma do MeuNamespace
    int resultado = MeuNamespace::soma(5, 3);
    std::cout << "Sum: " << resultado << std::endl;

    return 0;
}
