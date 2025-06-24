#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QWidget>

class QLabel;
class QPushButton;

class MainWindow : public QWidget{
    Q_OBJECT

    public:
        MainWindow(QWidget *parent = nullptr);

    private slots:
        void incrementCount();
        void decrementCount();

    private:
        QLabel *label;
        QLabel *contador;
        QPushButton *button;
        QPushButton *button2;
        int count;

};

#endif