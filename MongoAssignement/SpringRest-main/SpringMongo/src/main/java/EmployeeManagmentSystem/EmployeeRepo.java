package EmployeeManagmentSystem;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface EmployeeRepo extends MongoRepository<Employee,String>{

}
