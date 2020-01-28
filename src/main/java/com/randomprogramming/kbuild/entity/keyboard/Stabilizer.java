package com.randomprogramming.kbuild.entity.keyboard;

import com.randomprogramming.kbuild.model.ProductModel;

import javax.persistence.*;

@Entity
@Table(name="stabilizer")
public class Stabilizer extends ProductModel {
	@Column
	@Id
	@GeneratedValue
	private int id;

	@Column
	private String manufacturer;

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
}
