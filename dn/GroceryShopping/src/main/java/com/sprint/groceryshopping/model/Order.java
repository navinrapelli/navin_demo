package com.sprint.groceryshopping.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Order implements Serializable{
    
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int orderId;
	
	private LocalDate date;
	
	private Integer amount;

	@ManyToMany      
	@JoinTable(name = "product_order_details",
	           joinColumns = { @JoinColumn(name = "order_id") }, 
	             inverseJoinColumns = { @JoinColumn(name = "product_id") })
	private Set<Product> products = new HashSet<>();
	
	@ManyToOne
	@JoinColumn(name="login_id")
	private User user;

	
	public Order() {
		
	}

	public Order(LocalDate date, Set<Product> products, User user) {
		this.date = date;
		this.products = products;
		this.user = user;
	}

	
	public int getOrderId() {
		return orderId;
	}
	
	public void setOrderId(int id) {
		this.orderId = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Set<Product> getProducts() {
		return products;
	}

	public void setProducts(Set<Product> products) {
		this.products = products;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
		
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + orderId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Order other = (Order) obj;
		if (orderId != other.orderId)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", date=" + date + ", amount=" + amount + ", products=" + products
				+ ", user=" + user + "]";
	}

	
}
