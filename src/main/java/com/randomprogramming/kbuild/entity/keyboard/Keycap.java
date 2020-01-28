package com.randomprogramming.kbuild.entity.keyboard;

import com.randomprogramming.kbuild.model.ProductModel;

import javax.persistence.*;

@Entity
@Table(name="keycap")
public class Keycap extends ProductModel {
	@Column
	@Id
	@GeneratedValue
	private int id;

	@Column
	private String material;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}
}
