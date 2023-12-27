package com.example.demo;

import org.springframework.stereotype.Component;

@Component("lap1")
public class Laptop {
	private int L_id;
	private String brand;

	public int getL_id() {
		return L_id;
	}

	public void setL_id(int l_id) {
		L_id = l_id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	@Override
	public String toString() {
		return "Laptop [L_id=" + L_id + ", brand=" + brand + "]";
	}

	public void compile()
	{
		System.out.println("compiling...");
	}
}
