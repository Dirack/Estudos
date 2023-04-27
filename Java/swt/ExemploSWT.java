package org.maujr;


import org.eclipse.swt.SWT;

import org.eclipse.swt.events.SelectionAdapter;

import org.eclipse.swt.events.SelectionEvent;

import org.eclipse.swt.layout.RowLayout;

import org.eclipse.swt.widgets.Button;

import org.eclipse.swt.widgets.Display;

import org.eclipse.swt.widgets.Shell;



public class ExemploSWT {


      private static int selecoes = 0;


      public static void main(String[] args) {


            Display display = Display.getDefault();

            Shell shell = new Shell(display, SWT.CLOSE | SWT.TITLE | SWT.MIN |

                                    SWT.MAX | SWT.RESIZE);

            shell.setLayout(new RowLayout());

            shell.setText("Aprendendo SWT");


            Button button = new Button(shell, SWT.PUSH);

            button.setText("Clique Aqui Agora!!!");


            button.addSelectionListener(new SelectionAdapter() {


                  @Override
                  public void widgetSelected(SelectionEvent event) {

                        Button buttonClicked = (Button) event.getSource();

                        selecoes += 1;

                        buttonClicked.setText(String.format("Fui clicado %s vezes!", selecoes));

                  }


            });


            shell.setSize(300, 100);

            shell.open();


            while (!shell.isDisposed()) {

                  if (!display.readAndDispatch()) {

                        display.sleep();

                  }

            }

            display.dispose();

      }

}
