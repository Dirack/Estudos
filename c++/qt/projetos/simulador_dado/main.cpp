#include <QApplication>
#include "mainwindow.h"

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    MainWindow w;
    w.setWindowTitle("Simulador de Dado");
    w.resize(300, 150);
    w.show();

    return app.exec();
}
