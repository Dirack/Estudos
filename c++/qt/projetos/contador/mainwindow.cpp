#include "mainwindow.h"
#include <QPushButton>
#include <QLabel>
#include <QVBoxLayout>

MainWindow::MainWindow(QWidget *parent) : QWidget(parent), count(0) {
    label = new QLabel("0", this);
    QPushButton *button = new QPushButton("Incrementar", this);

    QVBoxLayout *layout = new QVBoxLayout(this);
    layout->addWidget(label);
    layout->addWidget(button);

    connect(button, &QPushButton::clicked, this, &MainWindow::incrementCount);
    setLayout(layout);

    //setFixedSize(400, 300);
    resize(400, 300);

    label->setAlignment(Qt::AlignCenter);
    QFont font = label->font();
    font.setPointSize(24);
    label->setFont(font);
}

void MainWindow::incrementCount() {
    count++;
    label->setText(QString::number(count));

}
