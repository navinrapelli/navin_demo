package SpringJdbc.JdbcFirst.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import SpringJdbc.JdbcFirst.Data.Entity.test;

@Repository
public class Getthedata {
	
	//SELECT * FROM TEST 
	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	public test findAll()
	{
		return 		 (test) jdbctemplate.query("SELECT * FROM TEST",new BeanPropertyRowMapper(test.class));

		
		
		
		
	}
}
