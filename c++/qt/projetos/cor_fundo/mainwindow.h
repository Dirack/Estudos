#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QPushButton>
#include <QVBoxLayout>
#include <QWidget>

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void changeToRed();
    void changeToGreen();
    void changeToBlue();

private:
    QWidget *central;
    QPushButton *btnRed;
    QPushButton *btnGreen;
    QPushButton *btnBlue;
};

#endif // MAINWINDOW_H
