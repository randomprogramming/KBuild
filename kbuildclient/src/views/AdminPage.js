import React, { Component } from "react";

import API from "../API";
import AdminPageComponent from "../components/AdminPageComponent";

export default class AdminPage extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>NOTES FOR FUTURE ADDITIONS TO THE DATABASE:</h1>
					<p>
						---ALWAYS ONLY ENTER DATA INTO A SINGLE INPUT BELOW there are multiple input fields with
						the same NAME attribute, which means that the wrong one can be submitted to the
						database.
					</p>
					<p>---ALWAYS RELOAD the page after submitting a item</p>
					<p>
						---PRICE is always a number, the currency icon, $ in this case, will get added later in
						the frontend.
					</p>
					<p>
						---LINK TO IMAGE is always a DIRECT link to the image which is already hosted somewhere
					</p>
					<p></p>
				</div>
				<div style={{ border: "3px solid black", padding: "15px", margin: "5px" }}>
					<h1>KEYCAP</h1>
					{/* This component takes in all the needed fields, created a <input /> for each field,
					and a button which POSTs the entered data to the submitURL*/}
					<AdminPageComponent
						componentName="KEYCAP"
						fields={[
							"linkToImage",
							"linkToProduct",
							"vendorName",
							"material",
							"price",
							"productName",
						]}
						submitURL={API.addKeycap}
					/>
				</div>
				<div style={{ border: "3px solid black", padding: "15px", margin: "5px" }}>
					<h1>SWITCH</h1>
					<AdminPageComponent
						componentName="SWITCH"
						fields={[
							"linkToImage",
							"linkToProduct",
							"price",
							"productName",
							"vendorName",
							"manufacturer",
							"switchColor",
						]}
						submitURL={API.addSwitch}
					/>
				</div>
			</div>
		);
	}
}
