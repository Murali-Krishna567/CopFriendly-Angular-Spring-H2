package com.app.Register.controller;

import java.util.ArrayList;
import java.util.List;
 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.Register.model.complaint;
import com.app.Register.repository.ComplaintRepository;
//import com.app.Register.repository.ComplaintRepository;
import com.app.Register.service.ComplaintService;
 
@RestController
public class ComplaintController {
	@Autowired
	private ComplaintService servi;
	
	@Autowired
	private ComplaintRepository res;
	
	@PostMapping("/complain")
	@CrossOrigin(origins="http://localhost:4200")
	public complaint registerComplaint(@RequestBody complaint complaint) {
		complaint complaintobj=new complaint();
		complaintobj=servi.saveComplaint(complaint);
		return complaintobj;
	}
	 List<complaint> com= new ArrayList<complaint>();
	 
	@GetMapping("/complain/{vehicleno}")
	 @CrossOrigin(origins="http://localhost:4200")
	 public List<complaint> Mychallans( @PathVariable String vehicleno) {
			com=servi.findByvehicleno(vehicleno);
			return com;
	 }
	 
	 List<complaint> all=new  ArrayList<complaint>();
	 
	 @GetMapping("/violations")
	 @CrossOrigin(origins="http://localhost:4200")
	 public List<complaint> fetchall(){
		 all=servi.fetch();
		 return all;
	 }
	 
	 List<complaint> ph=new  ArrayList<complaint>();
	 @RequestMapping(value="/complaint/{phoneno}",method= {RequestMethod.GET,RequestMethod.DELETE})
	 @CrossOrigin(origins="http://localhost:4200")
	 public void Mychallanss( @PathVariable String phoneno) {
		 complaint ph=servi.findByphoneno(phoneno);
			res.delete(ph);
	 }
	  
	 

	 	 

}
