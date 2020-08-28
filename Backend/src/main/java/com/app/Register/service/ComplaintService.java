package com.app.Register.service;

 
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.expression.spel.support.ReflectivePropertyAccessor.OptimalPropertyAccessor;
import org.springframework.stereotype.Service;
 
import com.app.Register.model.complaint;
import com.app.Register.repository.ComplaintRepository;
 
 
@Service
public class ComplaintService {
	@Autowired
	 
	private ComplaintRepository reposi;
 
		public complaint saveComplaint(complaint complaint) {
		return reposi.save(complaint);
	}
			public List<complaint> findByvehicleno(String vehicleno) {
			return reposi.findByvehicleno(vehicleno);
		}
			 public List<complaint> fetch(){
			return reposi.findAll();
		}
		
	public complaint findByphoneno(String phoneno){
		return reposi.findByphoneno(phoneno);
		}
		 	 
}
