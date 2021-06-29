package EmployeeManagmentSystem;

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
public class EmployeeController {
	
	
	
	
	@Autowired
	EmployeeService service2;
	

	
	@GetMapping("/em")
	public List<Employee> gettheusers()
	{
		return service2.Getallusers();		
		
	}
		
	@GetMapping("/em/{id}")
	public Optional<Employee> getoneuser(@PathVariable("id")String id)
	{
		return service2.getone(id);		
		
	}
	

	
	@RequestMapping(value="/em" ,method=RequestMethod.POST)
	public void addtopic(@RequestBody Employee Employee1)
	{
		service2.addone(Employee1);		
		
	}
	
	
	@RequestMapping(value="/em/{id}" ,method=RequestMethod.PUT)
	public void Updatetopic(@PathVariable("id")String id ,@RequestBody Employee Employee1)
	{
		service2.update(id, Employee1);		
		
	}
	
	
	@RequestMapping(value="/em/{id}" ,method=RequestMethod.DELETE)
	public void Deletetopic(@PathVariable("id")String id)
	{
		service2.deletetopic(id);		
		
	}
	

}
