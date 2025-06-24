#include "mainwindow.h"
#include <QRandomGenerator>
#include <QString>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent) {

    central = new QWidget(this);
    setCentralWidget(central);

    label = new QLabel("Clique no botão para jogar o dado", this);
    label->setAlignment(Qt::AlignCenter);

    button = new QPushButton("Jogar dado", this);

    QVBoxLayout *layout = new QVBoxLayout();
    layout->addWidget(label);
    layout->addWidget(button);

    central->setLayout(layout);

    connect(button, &QPushButton::clicked, this, &MainWindow::rollDice);
}

MainWindow::~MainWindow() {}

void MainWindow::rollDice() {
    int value = QRandomGenerator::global()->bounded(1, 7); // 1 a 6
    label->setText("Resultado: " + QString::number(value));
}
