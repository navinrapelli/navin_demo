package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



public class Customer {
	
	@Id
	public String id;
	public String firstname;
	public String lasname;
	
	public Customer()
	{
		
		
		
	}

	public Customer(String id, String name, String lasname) {
		super();
		this.id = id;
		this.firstname = name;
		this.lasname = lasname;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return firstname;
	}

	public void setName(String name) {
		this.firstname = name;
	}

	public String getLasname() {
		return lasname;
	}

	public void setLasname(String lasname) {
		this.lasname = lasname;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + firstname + ", lasname=" + lasname + "]";
	}
	
	
	
	
	
	
	

}
