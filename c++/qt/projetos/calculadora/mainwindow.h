#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QLineEdit>
#include <QPushButton>
#include <QLabel>
#include <QGridLayout>

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void soma();
    void subtrai();
    void multiplica();
    void divide();

private:
    QWidget *central;
    QLineEdit *input1;
    QLineEdit *input2;
    QLabel *resultado;
    QPushButton *btnSoma;
    QPushButton *btnSub;
    QPushButton *btnMult;
    QPushButton *btnDiv;

    double getNumero(QLineEdit *lineEdit, bool *ok);
};

#endif // MAINWINDOW_H
