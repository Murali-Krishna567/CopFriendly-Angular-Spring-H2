package com.app.Register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.app.Register.model.user;
import com.app.Register.service.RegistrationService;
 
@RestController
public class RegisterController {
	
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/register")
	@CrossOrigin(origins = "http://localhost:4200")
	public user registerUser(@RequestBody user User) throws Exception {
		String tempEmailId=User.getEmailid();
		if(tempEmailId!=null && !"".equals(tempEmailId)) {
			user UserObj=service.fetchUserByEmailId(tempEmailId);
			if(UserObj!=null) {
				throw new Exception("User with "+tempEmailId+" already exists");
			}
		}
		user UserObj=null;
		UserObj=service.saveUser(User);
		return UserObj;
	}

	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public user login(@RequestBody user user) throws Exception {
		String tempEmail=user.getEmailid();
		String tempPass=user.getPassword();
		user userobj=null;
		if(tempEmail != null && tempPass !=null) {
			userobj=service.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
		}
		if(userobj==null) {
			throw new Exception("Invalid Credentials");
		}
		return userobj;
	}
 
}
	
