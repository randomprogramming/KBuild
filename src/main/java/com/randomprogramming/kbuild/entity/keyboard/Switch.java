package com.randomprogramming.kbuild.entity.keyboard;

import com.randomprogramming.kbuild.model.ProductModel;

import javax.persistence.*;

@Entity
@Table(name="switch")
public class Switch extends ProductModel {
	@Column
	@Id
	@GeneratedValue
	private int id;

	@Column
	private String manufacturer;

	@Column
	private String color;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
}
