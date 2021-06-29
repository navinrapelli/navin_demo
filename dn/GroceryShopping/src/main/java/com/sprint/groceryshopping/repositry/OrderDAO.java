package com.sprint.groceryshopping.repositry;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sprint.groceryshopping.model.Order;

public interface OrderDAO extends MongoRepository<Order,Integer>
{	
	public List<Order> findByUserEmailId(String emailId);
	
	public List<Order> findByDate(LocalDate date);

}