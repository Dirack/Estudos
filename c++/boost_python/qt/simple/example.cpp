#include <boost/python.hpp>

#include <QApplication>
#include <QFrame>
#include <QVBoxLayout>
#include <QLabel>

class MyFrame : public QFrame
{
public:
    MyFrame()
        : QFrame(nullptr)
    {
        setWindowTitle("Boost.Python + Qt");
        resize(600, 400);

        auto* layout = new QVBoxLayout(this);
        auto* label = new QLabel("Hello from C++!", this);

        layout->addWidget(label);
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

    class_<MyFrame, boost::noncopyable>("MyFrame")
        .def("show", &MyFrame::show)
        .def("hide", &MyFrame::hide);

    def("create_application", create_application);
    def("run", run_application);
}