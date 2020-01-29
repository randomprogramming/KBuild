import React, { Component } from "react";
import axios from "axios";

import API from "../API";
import AdminPageComponent from "../components/AdminPageComponent";

export default class AdminPage extends Component {
	constructor() {
		super();
		this.state = {
			keycaplinkToImage: "",
			// keycaplinkToProduct: "",
			// keycapvendorName: "",
			// keycapmaterial: "",
			// keycapprice: "",
			// keycapProductName: "",
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
			<div>
				<div style={{ border: "3px solid black", padding: "15px" }}>
					<h1>KEYCAP</h1>
					{/* This component takes in all the needed fields, created a <input /> for each field,
					and a button which POSTs the entered data to the submitURL*/}
					<AdminPageComponent
						fields={[
							"linkToImage",
							"linkToProduct",
							"vendorName",
							"material",
							"price",
							"productName",
						]}
						submitURL={API.addKeycap}
						componentName="KEYCAP"
					/>
				</div>
				<div></div>
			</div>
		);
	}
}
