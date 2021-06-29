package com.sprint.groceryshopping.repositry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sprint.groceryshopping.model.Product;


public interface ProductDAO extends MongoRepository<Product, Long> {
	public Product findByName(String name);

}