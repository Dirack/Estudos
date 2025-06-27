#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QLineEdit>
#include <QPushButton>
#include <QListWidget>
#include <QVBoxLayout>
#include <QHBoxLayout>
#include <QWidget>

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void addTask();
    void removeTask();

private:
    QWidget *central;
    QLineEdit *inputTask;
    QPushButton *btnAdd;
    QPushButton *btnRemove;
    QListWidget *taskList;
};

#endif // MAINWINDOW_H
