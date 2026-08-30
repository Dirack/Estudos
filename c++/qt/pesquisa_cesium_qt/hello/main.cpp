#include <QApplication>
#include <QWebEngineView>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QWebEngineView view;

    view.resize(1200, 800);
    view.setWindowTitle("Qt WebEngine PoC");

    view.load(QUrl::fromLocalFile(
        "/home/rodolfo/Documents/Eliis_SECB/1_Projects/pesquisa_cesium_qt/index.html"
    ));

    view.show();

    return app.exec();
}