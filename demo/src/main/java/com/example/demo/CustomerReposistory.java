package com.example.demo;

import java.awt.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface CustomerReposistory extends MongoRepository<Customer,String>{
	
	public Customer findByFirstName(String firstname);
	public List<Customer> findByLastName(String lastName);
	
	

}
