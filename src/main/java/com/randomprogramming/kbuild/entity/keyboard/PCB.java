package com.randomprogramming.kbuild.entity.keyboard;

import com.randomprogramming.kbuild.model.LayoutModel;

import javax.persistence.*;

@Entity
@Table(name="pcb")
public class PCB extends LayoutModel {
	@Column
	@Id
	@GeneratedValue
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
