package SpringJdbc.JdbcFirst;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import SpringJdbc.JdbcFirst.Data.Getthedata;

@SpringBootApplication
public class JdbcFirstApplication implements CommandLineRunner{

	@Autowired
	Getthedata get;
	
	public static void main(String[] args) {
		SpringApplication.run(JdbcFirstApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
		System.out.println(get.findAll());
		
	}

}
