package navin.FirstSpringboot.Q3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.TreeMap;

import javax.websocket.server.PathParam;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class ZipCountryController {		
	
	
	

	
	static UserAddress navin =  new UserAddress(413005, "MH","Solapur","India");
    static UserAddress navin1=  new UserAddress(413006, "AP","HYD","India");
    static TreeMap<Integer,UserAddress> b= new TreeMap<Integer,UserAddress>();
	
	  @ResponseBody
	  @RequestMapping(value="/reco1")
	  public static TreeMap<Integer,UserAddress> getAdrress()
	  {
		  

			
			b.put(navin.getZipcode(), navin);
			b.put(navin1.getZipcode(), navin1);		
			return b;	  
		  
	  }
	  
	  @ResponseBody
	  @RequestMapping(value="/reco1/admin")
	  public String admin()
	  {
		  
		  
		return "Welcome admin";
	  }
	  
	  
	  
	  @ResponseBody
	  @RequestMapping(value="/reco1/user")
	  public String user()
	  {
		  
		  
		return "Welcome user";
	  }
	  
	  
	  
	  
	 
	  @RequestMapping(value="/reco1/{zipcode}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	  @ResponseBody
	   public  Object  getname12(@PathVariable("zipcode") int zip)
		
		{
			  
	        return b.get(zip);
	
		}
}