package navin.FirstSpringboot.Q2;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsernamePasswordContoller {
	
	
	String usernmae1="navin";
	String pass1="Baba@34";
	
	@RequestMapping(value="/reco/{Username}/{Passwowrd}",method=RequestMethod.GET)
	@ResponseBody
	public String getUserPass(@PathVariable("Username")String usesr,@PathVariable("Passwowrd")String pass)
	{
		
		if(usesr.equals(usernmae1) && pass.equals(pass1))
			
		{
			
			 return "valid user";
			
		}
	
		
		
		return "invalid user";
		
		
		
		
		
		
		
	}

}
