#include "mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent) {
    
    // Criar o widget central
    central = new QWidget(this);
    setCentralWidget(central);

    // Criar botões
    btnRed = new QPushButton("Vermelho", this);
    btnGreen = new QPushButton("Verde", this);
    btnBlue = new QPushButton("Azul", this);

    // Layout vertical
    QVBoxLayout *layout = new QVBoxLayout();
    layout->addWidget(btnRed);
    layout->addWidget(btnGreen);
    layout->addWidget(btnBlue);

    // Aplicar o layout ao widget central
    central->setLayout(layout);

    // Conectar os botões aos slots
    connect(btnRed, &QPushButton::clicked, this, &MainWindow::changeToRed);
    connect(btnGreen, &QPushButton::clicked, this, &MainWindow::changeToGreen);
    connect(btnBlue, &QPushButton::clicked, this, &MainWindow::changeToBlue);
}

MainWindow::~MainWindow() {}

void MainWindow::changeToRed() {
    central->setStyleSheet("background-color: red;");
}

void MainWindow::changeToGreen() {
    central->setStyleSheet("background-color: green;");
}

void MainWindow::changeToBlue() {
    central->setStyleSheet("background-color: blue;");
}
