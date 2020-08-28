package com.app.Register;

import com.twilio.Twilio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
//import com.app.Register.TwilioConfiguration;

@Configuration
public class TwilioInitializer {

	
	 private final static Logger LOGGER = LoggerFactory.getLogger(TwilioInitializer.class);

	 //private TwilioConfiguration twilioConfiguration;

	 	private TwilioConfiguration twilioConfiguration;
	    @Autowired
	    public TwilioInitializer(TwilioConfiguration twilioConfiguration) {
	        this.setTwilioConfiguration(twilioConfiguration);
	        Twilio.init(
	                twilioConfiguration.getAccountSid(),
	                twilioConfiguration.getAuthToken()
	        );
	        LOGGER.info("Twilio initialized ... with account sid {} ", twilioConfiguration.getAccountSid());
	    }
		public TwilioConfiguration getTwilioConfiguration() {
			return twilioConfiguration;
		}
		public void setTwilioConfiguration(TwilioConfiguration twilioConfiguration) {
			this.twilioConfiguration = twilioConfiguration;
		}
}
