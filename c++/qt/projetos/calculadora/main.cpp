#include <QApplication>
#include "mainwindow.h"

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    MainWindow w;
    w.setWindowTitle("Calculadora Básica");
    w.resize(300, 200);
    w.show();

    return app.exec();
}
