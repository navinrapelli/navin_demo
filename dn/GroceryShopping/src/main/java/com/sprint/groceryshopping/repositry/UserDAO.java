package com.sprint.groceryshopping.repositry;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sprint.groceryshopping.model.User;

public interface UserDAO extends MongoRepository<User,String> {

	Optional<User> findByEmailId(String emailId);

}
