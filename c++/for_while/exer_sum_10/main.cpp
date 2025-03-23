#include <iostream>

using namespace std;

int main(){

    int i, sum=0;

    cout << "Find the first 10 natural numbers sum using FOR loop" << endl;
    cout << "The first 10 natural numbers are: ";

    for (i=1; i<=10; i++){
        sum += i;

        cout << i << " ";
    }

    cout << " = " << sum << endl;

    cout << "Find the first 10 natural numbers sum using WHILE loop" << endl;
    cout << "The first 10 natural numbers are: " ;

    i=1; sum=0;
    while(i<=10){
        cout << i << " ";
        sum += i;
        i++;
    }

    cout << " = " << sum << endl;

}