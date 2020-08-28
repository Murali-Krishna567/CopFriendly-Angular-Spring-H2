package com.app.Register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.Register.model.Amount;
import com.app.Register.service.AmountService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AmountController {

	@Autowired
	private AmountService ser;
	
	@PostMapping("/amt")
	public Amount registeramt(@RequestBody Amount amount) {
		Amount Amountobj=new Amount();
		Amountobj=ser.saveAmount(amount);
		return Amountobj;
	}
	@GetMapping("/getsum")
	public int gettotal() {
		int res=0;
		res=ser.getsu();
		return res;
	}

	
	
	
}
