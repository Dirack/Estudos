#include "mainwindow.h"
#include <QLabel>
#include <QPushButton>
#include <QVBoxLayout>

MainWindow::MainWindow(QWidget *parent): QWidget(parent), count(0){
    label = new QLabel("Olá mundo, Qt!",this);
    label->setAlignment(Qt::AlignCenter);

    QFont font = label->font();
    font.setPointSize(24);
    label->setFont(font);

    contador = new QLabel("0",this);
    contador->setAlignment(Qt::AlignCenter);

    QFont font2 = contador->font();
    font2.setPointSize(18);
    contador->setFont(font2);

    button = new QPushButton("Incrementar++",this);
    connect(button, &QPushButton::clicked, this, &MainWindow::incrementCount);

    button2 = new QPushButton("Decrementar--",this);
    connect(button2,&QPushButton::clicked,this,&MainWindow::decrementCount);

    QVBoxLayout *layout = new QVBoxLayout(this);
    layout->addWidget(label);
    layout->addWidget(contador);
    layout->addWidget(button);
    layout->addWidget(button2);

    setLayout(layout);

    setFixedSize(500,500);

}

void MainWindow::incrementCount(){
    count++;
    contador->setText(QString::number(count));
}

void MainWindow::decrementCount(){
    count--;
    contador->setText(QString::number(count));
}