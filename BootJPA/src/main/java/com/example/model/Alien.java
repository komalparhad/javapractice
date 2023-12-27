package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//@Table(name="Alien")
public class Alien {
	@Id
	private int aid;
//	@Column(name = "aname")
	private String name;
	private String tech;
	
	

	public String getTech() {
		return tech;
	}

	public void setTech(String tech) {
		this.tech = tech;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Alien [aid=" + aid + ", aname=" + name + ", tech=" + tech + "]";
	}
	

}
