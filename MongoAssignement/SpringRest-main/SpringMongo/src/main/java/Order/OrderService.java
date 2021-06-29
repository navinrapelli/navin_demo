package Order;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepo repository1;

	public List<Order> Getallorder() {
		List<Order> order=new ArrayList();
		repository1.findAll()
		.forEach(order::add);
		return order;
	}

	public Optional<Order> getone(String id) {
		return repository1.findById(id);
	}

	public void addone(Order order) {
		repository1.save(order);
		
	}

	public void update(String id, Order order) {
		repository1.save(order);
		
	}

	public void deletetopic(String id) {
		repository1.deleteById(id);
		
	}

}
