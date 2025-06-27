#include "mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent), isRunning(true) {

    central = new QWidget(this);
    setCentralWidget(central);

    labelClock = new QLabel(this);
    labelClock->setAlignment(Qt::AlignCenter);
    labelClock->setStyleSheet("font-size: 24px;");

    buttonToggle = new QPushButton("Pausar", this);

    QVBoxLayout *layout = new QVBoxLayout();
    layout->addWidget(labelClock);
    layout->addWidget(buttonToggle);
    central->setLayout(layout);

    // Timer para atualizar a cada segundo
    timer = new QTimer(this);
    connect(timer, &QTimer::timeout, this, &MainWindow::updateClock);
    timer->start(1000);

    // Botão para pausar/continuar
    connect(buttonToggle, &QPushButton::clicked, this, &MainWindow::toggleClock);

    updateClock(); // Atualiza na inicialização
}

MainWindow::~MainWindow() {}

void MainWindow::updateClock() {
    QString currentTime = QTime::currentTime().toString("HH:mm:ss");
    labelClock->setText(currentTime);
}

void MainWindow::toggleClock() {
    if (isRunning) {
        timer->stop();
        buttonToggle->setText("Continuar");
    } else {
        timer->start(1000);
        buttonToggle->setText("Pausar");
    }
    isRunning = !isRunning;
}
