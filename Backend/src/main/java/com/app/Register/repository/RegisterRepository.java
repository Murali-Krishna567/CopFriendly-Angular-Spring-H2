package com.app.Register.repository;

 
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Register.model.user;

public interface RegisterRepository extends JpaRepository<user, Integer> {
	public user findByEmailid(String emailid);
	public user findByEmailidAndPassword(String emailid,String password);
	
}
