#include <boost/python.hpp>
#include <cmath>

class Point
{
public:
    Point(double x, double y)
        : x(x), y(y)
    {}

    double x;
    double y;

    double distance()
    {
        return std::sqrt(x * x + y * y);
    }
};

BOOST_PYTHON_MODULE(example)
{
    using namespace boost::python;

    class_<Point>("Point", init<double, double>())
        .def_readwrite("x", &Point::x)
        .def_readwrite("y", &Point::y)
        .def("distance", &Point::distance);
}