package com.randomprogramming.kbuild.model;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class ProductModel {
	@Column
	private String productName;

	@Column
	private String linkToImage;

	@Column
	private String linkToProduct;

	@Column
	private String vendorName;

	@Column
	private String price;

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getLinkToImage() {
		return linkToImage;
	}

	public void setLinkToImage(String linkToImage) {
		this.linkToImage = linkToImage;
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

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
}
