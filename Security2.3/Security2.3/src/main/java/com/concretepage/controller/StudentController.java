package com.concretepage.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.concretepage.bean.Student;
@Controller
@RequestMapping("/app")
public class StudentController {
	@RequestMapping
	public String login() {
 		return "customLogin";
 	} 	
	@RequestMapping("/secure/home")
	public String homePage(Model model) {
		List<Student> list = new ArrayList<>();
		list.add(new Student(1, "Mounika"));
		list.add(new Student(2, "Sharanya"));
		list.add(new Student(3, "Lakshmi"));
		model.addAttribute("list", list);
 		return "home";
 	}    
}