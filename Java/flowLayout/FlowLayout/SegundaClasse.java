/*
	 SegundaClasse.java (java)
	 
	 Objetivo: Estudo sobre FlowLayout em java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: 
			-Original Jidean Viana 23/06/2019

			-modificado por Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package FlowLayout;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class SegundaClasse extends JFrame implements ActionListener{
	
	JButton bSair, bLimpar;
	JTextField tfNome, tfEndereco;
	JLabel lNome, lEndereco, lSexo;
	ButtonGroup bgSexo;
	JRadioButton rbMasc, rbFem;
		
	public SegundaClasse() {
		
		lNome = new JLabel("Nome:");
		add(lNome);
		tfNome = new JTextField(15);
		add(tfNome);
		lEndereco = new JLabel("Endereço: ");
		add(lEndereco);
		tfEndereco = new JTextField(15);
		add(tfEndereco);
		lSexo = new JLabel("Sexo: "); 
		add(lSexo);
		rbMasc = new JRadioButton("Masculino");	add(rbMasc);
		rbFem = new JRadioButton("Feminino");
		add(rbFem);
		bgSexo = new ButtonGroup();	
			bgSexo.add(rbMasc);	
			bgSexo.add(rbFem); 
		
		bLimpar = new JButton("Limpar");
		bLimpar.addActionListener(this);
		add(bLimpar);
		bSair = new JButton("Sair");
		bSair.addActionListener(this);
		add(bSair);
		
		setVisible(true);	
		setTitle("Programa teste");		
		setLayout( new FlowLayout());
		setSize(250, 150);
			
	}

	@Override
	public void actionPerformed(ActionEvent evento) {
		   
		if (evento.getSource() == bLimpar) {
			tfNome.setText("");
				tfEndereco.setText(""); 
		}
		if (evento.getSource() == bSair) System.exit(0);		
	}
		
}
