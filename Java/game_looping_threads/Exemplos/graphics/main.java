import javax.swing.*;

public class main{

	public static void main(String[] args){

		JFrame f = new JFrame("Title");
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		Exemplo p = new Exemplo();
		f.add(p);
		f.setSize(400,250);
		f.setVisible(true);

	}
}

