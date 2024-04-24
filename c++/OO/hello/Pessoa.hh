#include <string>
using std::string;

class Pessoa
{
private:
    string nome;
public:
    string getnome();
    void setnome(string nome);
};