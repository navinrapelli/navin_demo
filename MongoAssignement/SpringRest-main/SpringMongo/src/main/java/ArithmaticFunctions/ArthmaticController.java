package ArithmaticFunctions;


import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArthmaticController {

	
	
	
	@RequestMapping(value="/reco2/add/{a}/{b}")
	@ResponseBody
	   public  int  add(@PathVariable("a") int a,@PathVariable("b") int b)
		
		{
			  
	        return a+b;
	
		}
	
	
	@RequestMapping(value="/reco2/sub/{a}/{b}",method=RequestMethod.GET)
	@ResponseBody
	   public  int  sub(@PathVariable("a") int a,@PathVariable("b") int b)
		
		{
			  
	        return a-b;
	
		}
	
	@RequestMapping(value="/reco2/mul/{a}/{b}",method=RequestMethod.GET)
	@ResponseBody
	   public  int mul(@PathVariable("a") int a,@PathVariable("b") int b)
		
		{
			  
	        return a*b;
	
		}
	
	@RequestMapping(value="/reco2/div/{a}/{b}",method=RequestMethod.GET)
	@ResponseBody
	   public   int div(@PathVariable("a") int a,@PathVariable("b") int b)
		
		{
			  
	        return a/b;
	
		}
	
	
	
	
}
