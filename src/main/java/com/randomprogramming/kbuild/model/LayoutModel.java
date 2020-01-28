package com.randomprogramming.kbuild.model;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

//Every component entity that is restricted by size like the case will extend this class
//This is so that we can filter only specific size items
//Possible values are: 20% 40% 60% 65% 75% 80% 100%
@MappedSuperclass
public class LayoutModel extends ProductModel{
	@Column
	private short layoutSize;

	public short getLayoutSize() {
		return layoutSize;
	}

	public void setLayoutSize(short layoutSize) {
		this.layoutSize = layoutSize;
	}
}
