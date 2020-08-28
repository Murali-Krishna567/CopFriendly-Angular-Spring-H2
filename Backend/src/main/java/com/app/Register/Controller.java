package com.app.Register;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import javax.validation.Valid;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("twil/sms")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

	 private final Service service;

	    @Autowired
	    public Controller(Service service) {
	        this.service = service;
	    }

	    @PostMapping
	    public void sendSms(@RequestBody SmsRequest smsRequest) {
	        service.sendSms(smsRequest);
	    }
}
