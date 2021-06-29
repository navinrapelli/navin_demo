package com.example.demo;

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
public class ControllerMongo {
	
	@Autowired
	ServiceRepo service1;
	

	
	@GetMapping("/navin")
	public List<users> gettheusers()
	{
		return service1.Getallusers();		
		
	}
		
	@GetMapping("/navin/{id}")
	public Optional<users> getoneuser(@PathVariable("id")String id)
	{
		return service1.getone(id);		
		
	}
	

	
	@RequestMapping(value="/navin" ,method=RequestMethod.POST)
	public void addtopic(@RequestBody users user)
	{
		service1.addone(user);		
		
	}
	
	
	@RequestMapping(value="/navin/{id}" ,method=RequestMethod.PUT)
	public void Updatetopic(@PathVariable("id")String id ,@RequestBody users user)
	{
		service1.update(id, user);		
		
	}
	
	
	@RequestMapping(value="/navin/{id}" ,method=RequestMethod.DELETE)
	public void Deletetopic(@PathVariable("id")String id)
	{
		service1.deletetopic(id);		
		
	}
	

	
	
	


}
