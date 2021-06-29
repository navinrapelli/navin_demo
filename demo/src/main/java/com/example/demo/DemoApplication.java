package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoTemplate;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner{
	
	@Autowired
	private CustomerReposistory repository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
		repository.deleteAll();

		
		repository.save(new Customer1("navin","pavan"))
	    // save a couple of customers
	    repository.save(new Customer("Alice", "Smith"));
	    repository.save(new Customer("Bob", "Smith"));

	    // fetch all customers
	    System.out.println("Customers found with findAll():");
	    System.out.println("-------------------------------");
	    for (Customer customer : repository.findAll()) {
	      System.out.println(customer);
	    }
	    
	
		
	}

	
	
	

}
