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
	private String switchColor;

//	Since the switches are mostly sold in packs of 10, this property tells us how much 1 quantity equals in switches
	@Column
	private int amountInOneQuantity;

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

	public String getSwitchColor() {
		return switchColor;
	}

	public void setSwitchColor(String switchColor) {
		this.switchColor = switchColor;
	}

	public int getAmountInOneQuantity() {
		return amountInOneQuantity;
	}

	public void setAmountInOneQuantity(int amountInOneQuantity) {
		this.amountInOneQuantity = amountInOneQuantity;
	}
}
