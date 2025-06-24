#include <QApplication>
#include "mainwindow.h"

int main(int argc, char *argv[]){
    QApplication myapp(argc,argv);
    MainWindow window;
    window.show();
    return myapp.exec();
}