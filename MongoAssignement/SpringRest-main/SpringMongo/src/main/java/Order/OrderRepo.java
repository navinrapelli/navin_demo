package Order;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface OrderRepo extends MongoRepository<Order,String>{

}
