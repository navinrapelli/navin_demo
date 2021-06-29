package navin;

import org.springframework.stereotype.Service;

@Service
public class Recognation {
	
	public boolean RecongnationUser(String name,String accountNo)
	{
		
		if(name.equals("navin")&& accountNo.equals("123456789"))
		{
			
			return true;
		}
		return false;
		
	}

}
