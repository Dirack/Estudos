#include <iostream>
#include <fstream>

using namespace std;

int main(){

    fstream myfile;
    myfile.open("dummy.txt",ios::out);

    if(myfile.is_open()){
        myfile << "Hello\n";
        myfile << "this is the second line\n";
        myfile.close();
    }

    myfile.open("dummy.txt",ios::app);

    if(myfile.is_open()){
        myfile << "Linha append mode\n";
        myfile.close();
    }
}