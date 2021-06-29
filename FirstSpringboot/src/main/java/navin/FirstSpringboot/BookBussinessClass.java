package navin.FirstSpringboot;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BookBussinessClass {
	
	
	private List<Books> navin1= new ArrayList<>(Arrays.asList
    		(new Books(1,"Om","navin"),
    		new Books(2,"PK","Pavan"),
    		new Books(3,"Vk","Venky")
    		))
    		;
	
	
	
	public List<Books> getallbooks()
	
	{
		
		     
			return navin1;
		
		
	}

	public Books getbook(String id) {
		
		return navin1.stream().filter(t->t.getName().equals(id)).findFirst().get();
		
	}

	public void  addbook(Books book) {
		
		navin1.add(book);
	}

	public void updatebook(String id, Books book) {
		
		for(int i=0;i<navin1.size();i++)
		{
			
			Books b=navin1.get(i);
			
			if(b.getName().equals(id))
			{  
				
				navin1.set(i, book);
				
				
				
			}
			
			
		}
		
	}

	public void deletebook(String id) {
		
		
		navin1.removeIf(t->t.getName().equals(id));
		
	}

}
