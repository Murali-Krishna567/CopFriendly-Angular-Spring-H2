package com.app.Register.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.Register.model.Medical;
import com.app.Register.service.MedicalService;

@RestController
public class MedicalController {
	
	@Autowired
	private MedicalService servic;
	
	@PostMapping("/emergency")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public Medical registerCase(@RequestBody Medical Medical) {
		Medical Medicalobj=servic.saveCase(Medical);
		return Medicalobj;
	}

	List<Medical> al=new ArrayList<Medical>();
	
	@GetMapping("/medico")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Medical> fetchall(){
		al=servic.fetchall();
		return al;
		
	}
}
