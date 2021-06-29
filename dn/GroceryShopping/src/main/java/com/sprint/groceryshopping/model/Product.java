package com.sprint.groceryshopping.model;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.sun.istack.NotNull;


@Document
public class Product implements Serializable{

	private static final long serialVersionUID = 1L;

	

	
	@Id
	private String name;

@NotNull
	private String price;
	
@NotNull
	private String description;
	
@NotNull
	private String quantity;
	

	private byte[] image;
	
	public Product() {
		
	}
	 
	public Product(String name, String price, String description, String quantity,byte[] image) {
			
		
	
		this.name = name;
		this.price = price;
		this.description = description;
		this.quantity = quantity;
		this.image = image;
	}





	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getBrand() {
		return quantity;
	}


	public void setBrand(String quantity) {
		this.quantity = quantity;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Product [name=" + name + ", price=" + price + ", description=" + description + ", quantity=" + quantity
				+ ", image=" + Arrays.toString(image) + "]";
	}

	
	
	
}