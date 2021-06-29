package navin.FirstSpringboot;

import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import navin.FirstSpringboot.Bussiness.aop.Bussiness1;
import navin.FirstSpringboot.Bussiness.aop.Bussiness2;

@SpringBootApplication
public class FirstSpringbootApplication implements CommandLineRunner {


	
	@Autowired
	private Bussiness1 bussiness1;
	
	@Autowired
	private Bussiness2 bussiness2;
	
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(FirstSpringbootApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		System.out.println( bussiness1.CalulculateSomething());
		 System.out.println(bussiness2.CalulculateSomething());                                             
		
		
	}

}
