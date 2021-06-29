package EmployeeManagmentSystem;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepo repository1;

	public List<Employee> Getallusers() {
		List<Employee> Employee1=new ArrayList();
		repository1.findAll()
		.forEach(Employee1::add);
		return Employee1;
	}

	public Optional<Employee> getone(String id) {
		return repository1.findById(id);
	}

	public void addone(Employee Employee1) {
		repository1.save(Employee1);
		
	}

	public void update(String id, Employee Employee1) {
		repository1.save(Employee1);
		
	}

	public void deletetopic(String id) {
		repository1.deleteById(id);
		
	}

}
