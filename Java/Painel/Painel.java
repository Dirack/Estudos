import java.awt.Graphics;
import javax.swing.JPanel;

public class Painel extends JPanel{
 public void paintComponent( Graphics g ){
     super.paintComponent( g );
     int pixel=0;
     
     for(pixel=0 ; pixel <= getHeight() ; pixel += 10){
         g.drawLine(0, pixel, pixel, getHeight());
         }

     for(pixel=getHeight() ; pixel >=0 ; pixel -= 10){
         g.drawLine(0, pixel, getHeight() - pixel, 0);
     }
     
     for(pixel=0 ; pixel <= getHeight() ; pixel +=10){
         g.drawLine(getWidth(), pixel, getWidth() - pixel, getHeight());
     }
     
     for(pixel=getHeight() ; pixel >=0 ; pixel -= 10){
         g.drawLine(getWidth(), pixel, getWidth() - (getHeight() - pixel), 0);
     }
     
 }
}
