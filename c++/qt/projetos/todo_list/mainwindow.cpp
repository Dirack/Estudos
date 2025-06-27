#include "mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent) {
    
    // Cria o widget central
    central = new QWidget(this);
    setCentralWidget(central);

    // Componentes
    inputTask = new QLineEdit(this);
    inputTask->setPlaceholderText("Digite uma tarefa...");

    btnAdd = new QPushButton("Adicionar", this);
    btnRemove = new QPushButton("Remover", this);
    taskList = new QListWidget(this);

    // Layout horizontal para os controles
    QHBoxLayout *controlLayout = new QHBoxLayout();
    controlLayout->addWidget(inputTask);
    controlLayout->addWidget(btnAdd);
    controlLayout->addWidget(btnRemove);

    // Layout principal vertical
    QVBoxLayout *mainLayout = new QVBoxLayout();
    mainLayout->addLayout(controlLayout);
    mainLayout->addWidget(taskList);

    // Aplicar layout no central
    central->setLayout(mainLayout);

    // Conectar botões aos slots
    connect(btnAdd, &QPushButton::clicked, this, &MainWindow::addTask);
    connect(btnRemove, &QPushButton::clicked, this, &MainWindow::removeTask);
}

MainWindow::~MainWindow() {}

void MainWindow::addTask() {
    QString text = inputTask->text().trimmed();
    if (!text.isEmpty()) {
        taskList->addItem(text);
        inputTask->clear();
    }
}

void MainWindow::removeTask() {
    QListWidgetItem *item = taskList->currentItem();
    if (item) {
        delete taskList->takeItem(taskList->row(item));
    }
}
