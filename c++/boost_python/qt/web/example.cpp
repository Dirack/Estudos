#include <boost/python.hpp>

#include <QApplication>
#include <QFrame>
#include <QVBoxLayout>
#include <QWebEngineView>
#include <QUrl>

class WebFrame : public QFrame
{
public:
    WebFrame()
        : QFrame(nullptr)
    {
        setWindowTitle("Cesium + Qt WebEngine");
        resize(1200, 800);

        auto* layout = new QVBoxLayout(this);

        auto* view = new QWebEngineView(this);

        view->load(QUrl::fromLocalFile(
            "/home/rodolfo/Documents/Dirack/Estudos/c++/qt/"
            "pesquisa_cesium_qt/cesium/index.html"
        ));

        layout->addWidget(view);
    }
};

void create_application()
{
    if (QApplication::instance() == nullptr)
    {
        static int argc = 1;
        static char arg0[] = "example";
        static char* argv[] = {arg0, nullptr};

        new QApplication(argc, argv);
    }
}

void run_application()
{
    QApplication::instance()->exec();
}

BOOST_PYTHON_MODULE(example)
{
    using namespace boost::python;

    class_<WebFrame, boost::noncopyable>("WebFrame")
        .def("show", &WebFrame::show)
        .def("hide", &WebFrame::hide);

    def("create_application", create_application);
    def("run", run_application);
}