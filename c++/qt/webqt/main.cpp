#include <QApplication>
#include <QWebEngineView>
#include <QUrl>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QWebEngineView viewer;

    viewer.setWindowTitle("Cesium PoC");
    viewer.resize(1200, 800);

    viewer.load(QUrl("https://cesium.com/learn/cesiumjs/ref-doc/"));

    viewer.show();

    return app.exec();
}
