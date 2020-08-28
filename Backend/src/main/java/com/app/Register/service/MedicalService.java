package com.app.Register.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Register.model.Medical;
import com.app.Register.repository.MedicalRepository;

@Service
public class MedicalService {
	@Autowired
	private MedicalRepository repo;
	
	public MedicalService(MedicalRepository MedicalRepository) {
		this.repo=MedicalRepository;
	}
	
	public Medical saveCase(Medical Medical) {
		return repo.save(Medical);
	}
	public List<Medical> fetchall(){
		return repo.findAll();
	}

}
