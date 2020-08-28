package com.app.Register.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Register.model.Medical;

public interface MedicalRepository extends JpaRepository<Medical,Integer> {

}
