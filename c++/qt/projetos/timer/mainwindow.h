#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QLabel>
#include <QPushButton>
#include <QVBoxLayout>
#include <QTimer>
#include <QTime>

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void updateClock();
    void toggleClock();

private:
    QWidget *central;
    QLabel *labelClock;
    QPushButton *buttonToggle;
    QTimer *timer;
    bool isRunning;
};

#endif // MAINWINDOW_H
