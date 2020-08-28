package com.app.Register.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.Register.model.Amount;

public interface AmountRepository extends JpaRepository<Amount, Integer>{

	@Query("select sum(amount) from Amount")
		public int getsum();
}
