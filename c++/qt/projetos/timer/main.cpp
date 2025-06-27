#include <QApplication>
#include "mainwindow.h"

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    MainWindow w;
    w.setWindowTitle("Relógio Digital");
    w.resize(250, 150);
    w.show();

    return app.exec();
}
