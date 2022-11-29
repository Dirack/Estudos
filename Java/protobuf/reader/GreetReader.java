import java.io.FileInputStream;
import java.io.IOException;

public class GreetReader{
   public static void main(String[] args) throws IOException {
      Greeting.Greet.Builder greetBuilder = Greeting.Greet.newBuilder();

      String filename = "greeting_protobuf_output";
      System.out.println("Reading from file " + filename);
	    
      try(FileInputStream input = new FileInputStream(filename)) {
         Greeting.Greet greet = greetBuilder.mergeFrom(input).build();
         System.out.println("Greeting: " + greet.getGreeting() + "\n" + "Username: " + greet.getUsername());
      }
   }
}
