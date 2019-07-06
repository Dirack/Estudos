/*
	 FramesPerSecond.java (java)
	 
	 Objetivo: Estudo sobre Game looping profissional em java.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

package Game;

public class FramesPerSecond{

	private long startGameTime;
	private final double amountOfTicks = 60;
	private final double ns = 1000000000;
	private double deltaTSeconds=0;
	private int frameAtual=0;
	private final int ratio = 1;
	private int deltaFrame=0;

	public void setStartGameTime(long timeNsNow){

		this.startGameTime = timeNsNow;

	}

	public boolean isRunning(long timeNsNow){

		this.deltaTSeconds = (timeNsNow - this.startGameTime)/this.ns;
		this.deltaFrame = ratio*(int)Math.floor(this.deltaTSeconds);		

		if(this.deltaFrame > frameAtual){

			frameAtual++;
			return true;

		}else{
			return false;
		}

	}

}
