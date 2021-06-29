package navin.mvc;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GolbalExceptionClasshandl {
	
	
	@ExceptionHandler(value=ArithmeticException.class)
	public String handleExveption(Exception e)
	{   
		
		System.out.println("Balance insuffient");
		return "insuffiecentblance";
		
		
		
	}

}
