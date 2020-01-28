package com.randomprogramming.kbuild.entity.keyboard;

import com.randomprogramming.kbuild.model.LayoutModel;

import javax.persistence.*;

@Entity
@Table(name="keyboard_case")
public class KeyboardCase extends LayoutModel {
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
