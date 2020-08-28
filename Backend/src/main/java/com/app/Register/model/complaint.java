package com.app.Register.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class complaint
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String vehicle;
	private String vehicleno;
	private String type;
	private int licenseno;
	private String location;
	private String phoneno;
	
	
	public complaint(String name, String vehicle, String vehicleno, String type, int licenseno, String location,
			String phoneno) {
		super();
		this.name = name;
		this.vehicle = vehicle;
		this.vehicleno = vehicleno;
		this.type = type;
		this.licenseno = licenseno;
		this.location = location;
		this.phoneno = phoneno;
	}

	public String getVehicle() {
		return vehicle;
	}

	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}

	public String getVehicleno() {
		return vehicleno;
	}

	public void setVehicleno(String vehicleno) {
		this.vehicleno = vehicleno;
	}

	public complaint() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getLicenseno() {
		return licenseno;
	}

	public void setLicenseno(int licenseno) {
		this.licenseno = licenseno;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	 
	
	
}
