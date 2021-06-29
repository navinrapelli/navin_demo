package navin.FirstSpringboot.Bussiness.aop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import navin.FirstSpringboot.Data.aop.Data1;
import navin.FirstSpringboot.Data.aop.Data2;

@Service
public class Bussiness2 {
	
    @Autowired
	Data2 data;
    
    public String CalulculateSomething()
    {
		return data.retervieSomething();
    	
    	
    }
	
}
