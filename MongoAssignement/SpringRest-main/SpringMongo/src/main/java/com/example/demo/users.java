package com.example.demo;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class users {
	
	
	@Id
	String id;
	
	String username;
	String first_name;
	String last_name;
	
	public users() {
		
		
		
		
	}
	
	

	public users(String id, String username, String first_name, String last_name) {
		super();
		this.id = id;
		this.username = username;
		this.first_name = first_name;
		this.last_name = last_name;
	}
	
	
	
	@Override
	public String toString() {
		return "users [id=" + id + ", username=" + username + ", first_name=" + first_name + ", last_name=" + last_name
				+ "]";
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getFirst_name() {
		return first_name;
	}



	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}



	public String getLast_name() {
		return last_name;
	}



	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}



	
	
	
	
	
	
	

}
