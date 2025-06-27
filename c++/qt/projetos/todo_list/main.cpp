#include <QApplication>
#include "mainwindow.h"

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    MainWindow w;
    w.setWindowTitle("Lista de Tarefas");
    w.resize(400, 300);
    w.show();

    return app.exec();
}
