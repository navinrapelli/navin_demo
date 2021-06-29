package navin.FirstSpringboot.aspectBefore;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class Beforeclass {
	
	@Before("execution(* navin.FirstSpringboot.Bussiness.aop.*.*(..))")
	public void before(JoinPoint joinpoint)
	{
		System.out.println("intercepted methods");
		System.out.println("Allowed execuiton for"+joinpoint);
		
	}

}
