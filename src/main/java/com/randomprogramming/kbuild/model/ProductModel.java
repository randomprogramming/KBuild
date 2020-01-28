package com.randomprogramming.kbuild.model;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class ProductModel {
	@Column
	private String imageFileName;

	@Column
	private String linkToProduct;

	@Column
	private String vendorName;

	public String getImageFileName() {
		return imageFileName;
	}

	public void setImageFileName(String imageFileName) {
		this.imageFileName = imageFileName;
	}

	public String getLinkToProduct() {
		return linkToProduct;
	}

	public void setLinkToProduct(String linkToProduct) {
		this.linkToProduct = linkToProduct;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
}
