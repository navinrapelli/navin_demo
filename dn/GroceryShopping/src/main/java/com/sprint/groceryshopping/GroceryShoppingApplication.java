package com.sprint.groceryshopping;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import com.sprint.groceryshopping.controller.OrderController;

@SpringBootApplication(exclude = {
	    DataSourceAutoConfiguration.class, 
	    DataSourceTransactionManagerAutoConfiguration.class, 
	    HibernateJpaAutoConfiguration.class })
public class GroceryShoppingApplication {
	
	private static final Logger log = LoggerFactory.getLogger(OrderController.class);


	public static void main(String[] args) {
		log.info("Application Started");
		SpringApplication.run(GroceryShoppingApplication.class, args);
	}
}
