package Order;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class OrderController {
	
	
	
	
	@Autowired
	OrderService service2;
	

	
	@GetMapping("/order")
	public List<Order> gettheusers()
	{
		return service2.Getallorder();		
		
	}
		
	@GetMapping("/order/{id}")
	public Optional<Order> getoneuser(@PathVariable("id")String id)
	{
		return service2.getone(id);		
		
	}
	

	
	@RequestMapping(value="/order" ,method=RequestMethod.POST)
	public void addtopic(@RequestBody Order order)
	{
		service2.addone(order);		
		
	}
	
	
	@RequestMapping(value="/order/{id}" ,method=RequestMethod.PUT)
	public void Updatetopic(@PathVariable("id")String id ,@RequestBody Order order)
	{
		service2.update(id, order);		
		
	}
	
	
	@RequestMapping(value="/order/{id}" ,method=RequestMethod.DELETE)
	public void Deletetopic(@PathVariable("id")String id)
	{
		service2.deletetopic(id);		
		
	}
	

}
