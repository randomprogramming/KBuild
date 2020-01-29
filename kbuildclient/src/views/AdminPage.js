import React, { Component } from "react";
import axios from "axios";

import API from "../API";

export default class AdminPage extends Component {
	constructor() {
		super();
		this.state = {
			keycaplinkToImage: "",
			keycaplinkToProduct: "",
			keycapvendorName: "",
			keycapmaterial: "",
			keycapprice: "",
			keycapProductName: "",
		};

		this.onUpdate = this.onUpdate.bind(this);
	}

	onUpdate(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	addKeycap() {
		axios.post(
			API.addKeycap,
			{
				linkToImage: this.state.keycaplinkToImage,
				linkToProduct: this.state.keycaplinkToProduct,
				vendorName: this.state.keycapvendorName,
				material: this.state.keycapmaterial,
				price: this.state.keycapprice,
				productName: this.state.keycapproductName,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
	render() {
		return (
			<div style={{ border: "3px solid black", padding: "15px" }}>
				<h1>Keycap</h1>
				<input type="text" name="keycaplinkToImage" onChange={this.onUpdate} />
				{"Link to image"}
				<br />
				<input type="text" name="keycaplinkToProduct" onChange={this.onUpdate} />
				{"Link to product"}
				<br />
				<input type="text" name="keycapvendorName" onChange={this.onUpdate} />
				{"Vendor name"}
				<br />
				<input type="text" name="keycapmaterial" onChange={this.onUpdate} />
				{"Material"}
				<br />
				<input type="text" name="keycapproductName" onChange={this.onUpdate} />
				{"Price(Don't forget a currency symbol)"}
				<br />
				<input type="text" name="keycapproductName" onChange={this.onUpdate} />
				{"Product name"}
				<br />
				<button onClick={this.addKeycap.bind(this)}>Submit KEYCAP</button>
			</div>
		);
	}
}
