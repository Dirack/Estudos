import java.awt.FlowLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class tuna extends JFrame{

	private JLabel item1;

	public tuna(){
		super("Título aleatório");

		setLayout(new FlowLayout());

		item1 = new JLabel("Uma frase Qualquer");
		item1.setToolTipText("Isso vai aparecer!");
		add(item1);

	}

}
