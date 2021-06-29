package com.sprint.groceryshopping.repositry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sprint.groceryshopping.model.Address;

public interface AddressDAO extends MongoRepository<Address, Integer> {

}