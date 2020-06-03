/*
	 RevistaInformatica.java (Java)
	 
	 Objetivo: Estudo sobre o padrão de projeto Observer.
	 A classe RevistaInformatica é o subject do padrão. Esta
	 notifica os observers se sofrer alguma atualização.

	 Os observers são os assinantes da revista que são notificados
	 pelo subject sempre que a revista é atualizada.
	 
	 Site: https://dirack.github.io
	 
	 Versão 1.0
	 
	 Programador: Rodolfo A C Neves (Dirack) 30/05/2020
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/
import java.util.Observable;
import java.util.Observer;

public class RevistaInformatica extends Observable {

    private int edicao;

    public void setNovaEdicao(int novaEdicao) {
        this.edicao = novaEdicao;

        setChanged();
        notifyObservers();
    }

    public int getEdicao() {
        return this.edicao;
    }

    public static void main(String[] args) {
        //poderia receber a nova edicao atraves de um recurso externo
        int novaEdicao = 3;
        RevistaInformatica revistaInformatica = new RevistaInformatica();
        Assinante1 assinante1 = new Assinante1(revistaInformatica);

        revistaInformatica.setNovaEdicao(novaEdicao);
	try{
		Thread.sleep(2000);
	}catch(InterruptedException e){
		e.getStackTrace();
	}
	novaEdicao++;
        revistaInformatica.setNovaEdicao(novaEdicao);
    }

}

class Assinante1 implements Observer {

    Observable revistaInformatica;

    int edicaoNovaRevista;

    public Assinante1(Observable revistaInformatica) {
        this.revistaInformatica = revistaInformatica;
        revistaInformatica.addObserver(this);
    }

    @Override
    public void update(Observable revistaInfSubject, Object arg1) {
        if (revistaInfSubject instanceof RevistaInformatica) {
            RevistaInformatica revistaInformatica = (RevistaInformatica) revistaInfSubject;
            edicaoNovaRevista = revistaInformatica.getEdicao();
            System.out.println("Atenção, já chegou a mais uma edição da Revista Informatica. " +
                    "Esta é a sua edição número: " + edicaoNovaRevista);
        }
    }
}
