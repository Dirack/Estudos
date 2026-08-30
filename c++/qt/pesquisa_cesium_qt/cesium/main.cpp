#include <QApplication>
#include <QWebEngineView>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QWebEngineView view;

    view.resize(1200, 800);
    view.setWindowTitle("Cesium PoC");

    view.load(QUrl::fromLocalFile(
        "/home/rodolfo/Documents/Dirack/Estudos/c++/qt/pesquisa_cesium_qt/cesium/index.html"
    ));

    view.show();

    return app.exec();
}