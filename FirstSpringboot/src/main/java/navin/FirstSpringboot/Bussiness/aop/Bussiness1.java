package navin.FirstSpringboot.Bussiness.aop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import navin.FirstSpringboot.Data.aop.Data1;

@Service
public class Bussiness1 {
	
    @Autowired
	Data1 data;
    
    public String CalulculateSomething()
    {
		return data.retervieSomething();
    	
    	
    }
	
}
