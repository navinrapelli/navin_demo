package navin.FirstSpringboot;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BooksContoller {
	
	
	@Autowired
   private BookBussinessClass service;

	
	@RequestMapping("/books")
	public List<Books> getname1()
	
	{
		return service.getallbooks();
			
	}
	
	@RequestMapping("/books/{id}")
	public Books getonebook(@PathVariable("id")String id)
	{
		return service.getbook(id);
				
	}
	
	@RequestMapping(value="/books",method=RequestMethod.POST)
	public void addbook(@RequestBody Books book)
	{
		
		service.addbook(book);
		
	}
	
	@RequestMapping(value="/books/{id}",method=RequestMethod.PUT)
	public void updatebook(@PathVariable("id")String id,@RequestBody Books book)
	{
		
		service.updatebook(id,book);
		
	}
	
	@RequestMapping(value="/books/{id}",method=RequestMethod.DELETE)
	public void deletebook(@PathVariable("id")String id)
	{
		
		service.deletebook(id);
		
	}
	
	
	

}
