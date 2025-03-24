#include <iostream>
#include <string>

namespace MyNamespace {
    std::string nome = "Rodolfo";

    int soma(int x, int y){
        return x+y;
    }
}

int main(){
    std::cout << "My name is " << MyNamespace::nome << std::endl;

    std::cout << "The sum of 2+2=" << MyNamespace::soma(2,2) << std:: endl;
}