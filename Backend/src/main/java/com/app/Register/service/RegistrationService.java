package com.app.Register.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.app.Register.model.complaint;
import com.app.Register.model.user;
import com.app.Register.repository.RegisterRepository;
@Service
public class RegistrationService {
	
	@Autowired
	private RegisterRepository repo;
	
	public user saveUser(user User) {
		return repo.save(User);
	}
	
	public user fetchUserByEmailId(String emailid) {
		return repo.findByEmailid(emailid);
 }
	public user fetchUserByEmailIdAndPassword(String emailid,String password) {
		return repo.findByEmailidAndPassword(emailid, password);
 }
	 public List<user> fetch(){
		return repo.findAll();
		}
}
