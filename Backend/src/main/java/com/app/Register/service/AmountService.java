package com.app.Register.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Register.model.Amount;
import com.app.Register.repository.AmountRepository;

@Service
public class AmountService {

@Autowired
private AmountRepository repos;
public Amount saveAmount(Amount amount) {
	return repos.save(amount);
}
	public int getsu() {
		return repos.getsum();
	}
}
