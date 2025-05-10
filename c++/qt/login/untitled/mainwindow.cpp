#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMessageBox>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_pushButton_clicked()
{
    QString usuario = ui->lineEdit->text();
    QString senha = ui->lineEdit_2->text();

    if(usuario == "rodolfo" && senha == "12345"){
        QMessageBox::information(this,"Login","login concluído");
    }else{
        QMessageBox::warning(this,"Login","Usuário ou senha incorretos!");
    }

}
