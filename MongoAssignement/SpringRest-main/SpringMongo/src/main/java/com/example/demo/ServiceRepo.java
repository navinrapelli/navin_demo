package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceRepo {
	
	
	@Autowired
	private CustomerReposistory repository;
	
	public List<users> Getallusers() {
	
		List<users> user=new ArrayList();
		repository.findAll()
		.forEach(user::add);
		return user;
	}


	public Optional<users> getone(String id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}


	public void addone(users user) {
		// TODO Auto-generated method stub
		repository.save(user);
	}





	public void update(String id, users user) {
		// TODO Auto-generated method stub
		repository.save(user);
		
	}


	public void deletetopic(String id) {
		
		repository.deleteById(id);
		
	}

}
