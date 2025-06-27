#include "mainwindow.h"
#include <QString>
#include <QMessageBox>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent) {

    central = new QWidget(this);
    setCentralWidget(central);

    input1 = new QLineEdit(this);
    input2 = new QLineEdit(this);
    input1->setPlaceholderText("Número 1");
    input2->setPlaceholderText("Número 2");

    resultado = new QLabel("Resultado: ", this);
    resultado->setStyleSheet("font-weight: bold;");

    btnSoma = new QPushButton("Somar", this);
    btnSub = new QPushButton("Subtrair", this);
    btnMult = new QPushButton("Multiplicar", this);
    btnDiv = new QPushButton("Dividir", this);

    QGridLayout *layout = new QGridLayout();
    layout->addWidget(input1, 0, 0, 1, 2);
    layout->addWidget(input2, 1, 0, 1, 2);
    layout->addWidget(btnSoma, 2, 0);
    layout->addWidget(btnSub, 2, 1);
    layout->addWidget(btnMult, 3, 0);
    layout->addWidget(btnDiv, 3, 1);
    layout->addWidget(resultado, 4, 0, 1, 2);

    central->setLayout(layout);

    connect(btnSoma, &QPushButton::clicked, this, &MainWindow::soma);
    connect(btnSub, &QPushButton::clicked, this, &MainWindow::subtrai);
    connect(btnMult, &QPushButton::clicked, this, &MainWindow::multiplica);
    connect(btnDiv, &QPushButton::clicked, this, &MainWindow::divide);
}

MainWindow::~MainWindow() {}

double MainWindow::getNumero(QLineEdit *lineEdit, bool *ok) {
    return lineEdit->text().toDouble(ok);
}

void MainWindow::soma() {
    bool ok1, ok2;
    double n1 = getNumero(input1, &ok1);
    double n2 = getNumero(input2, &ok2);
    if (ok1 && ok2)
        resultado->setText("Resultado: " + QString::number(n1 + n2));
    else
        resultado->setText("Erro: entrada inválida");
}

void MainWindow::subtrai() {
    bool ok1, ok2;
    double n1 = getNumero(input1, &ok1);
    double n2 = getNumero(input2, &ok2);
    if (ok1 && ok2)
        resultado->setText("Resultado: " + QString::number(n1 - n2));
    else
        resultado->setText("Erro: entrada inválida");
}

void MainWindow::multiplica() {
    bool ok1, ok2;
    double n1 = getNumero(input1, &ok1);
    double n2 = getNumero(input2, &ok2);
    if (ok1 && ok2)
        resultado->setText("Resultado: " + QString::number(n1 * n2));
    else
        resultado->setText("Erro: entrada inválida");
}

void MainWindow::divide() {
    bool ok1, ok2;
    double n1 = getNumero(input1, &ok1);
    double n2 = getNumero(input2, &ok2);
    if (!ok1 || !ok2)
        resultado->setText("Erro: entrada inválida");
    else if (n2 == 0)
        resultado->setText("Erro: divisão por zero");
    else
        resultado->setText("Resultado: " + QString::number(n1 / n2));
}
