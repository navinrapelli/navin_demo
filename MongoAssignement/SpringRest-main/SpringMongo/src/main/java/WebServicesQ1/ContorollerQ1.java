package WebServicesQ1;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContorollerQ1 {
	
	
	
	
	
	@RequestMapping(value="/reco1/hello",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	  @ResponseBody
	   public  String  getname12()
		
		{
			  
	        return "hellowWord";
	
		}

}
