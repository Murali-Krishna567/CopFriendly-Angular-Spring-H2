package com.app.Register.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Medical {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private int people;
	public Medical() {}
	public Medical(int people, String location, String accidenttype) {
		super();
		this.people = people;
		this.location = location;
		this.accidenttype = accidenttype;
		 
	}
	private String location;
	private String accidenttype;	 
	public int getPeople() {
		return people;
	}
	public void setPeople(int people) {
		this.people = people;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getAccidenttype() {
		return accidenttype;
	}
	public void setAccidenttype(String accidenttype) {
		this.accidenttype = accidenttype;
	}
	 
 

	 

	 
	
	
	
	

}
