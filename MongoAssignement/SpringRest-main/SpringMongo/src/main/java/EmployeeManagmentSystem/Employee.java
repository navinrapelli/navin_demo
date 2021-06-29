package EmployeeManagmentSystem;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Employee")
public class Employee {
	
	@Id
	String id;
	
	String employeename;
	String employeedepa;
	String employeedesignation;
	String employeedesalary;
	
	
	public Employee() {
		
	}
	public Employee(String id, String employeename, String employeedepa, String employeedesignation,
			String employeedesalary) {
		super();
		this.id = id;
		this.employeename = employeename;
		this.employeedepa = employeedepa;
		this.employeedesignation = employeedesignation;
		this.employeedesalary = employeedesalary;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmployeename() {
		return employeename;
	}
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	public String getEmployeedepa() {
		return employeedepa;
	}
	public void setEmployeedepa(String employeedepa) {
		this.employeedepa = employeedepa;
	}
	public String getEmployeedesignation() {
		return employeedesignation;
	}
	public void setEmployeedesignation(String employeedesignation) {
		this.employeedesignation = employeedesignation;
	}
	public String getEmployeedesalary() {
		return employeedesalary;
	}
	public void setEmployeedesalary(String employeedesalary) {
		this.employeedesalary = employeedesalary;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", employeename=" + employeename + ", employeedepa=" + employeedepa
				+ ", employeedesignation=" + employeedesignation + ", employeedesalary=" + employeedesalary + "]";
	}
	
	
	
	

}
