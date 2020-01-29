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
					<p>---LAYOUT SIZE is a NUMBER, it can be 40,60,80,75 and etc.</p>
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
				<div style={{ border: "3px solid black", padding: "15px", margin: "5px" }}>
					<h1>PLATE</h1>
					<AdminPageComponent
						componentName="PLATE"
						fields={[
							"linkToImage",
							"linkToProduct",
							"price",
							"productName",
							"vendorName",
							"layoutSize",
							"material",
						]}
						submitURL={API.addPlate}
					/>
				</div>
				<div style={{ border: "3px solid black", padding: "15px", margin: "5px" }}>
					<h1>STABILIZER</h1>
					<AdminPageComponent
						componentName="STABILIZER"
						fields={[
							"linkToImage",
							"linkToProduct",
							"price",
							"productName",
							"vendorName",
							"manufacturer",
						]}
						submitURL={API.addStabilizer}
					/>
				</div>
				<div style={{ border: "3px solid black", padding: "15px", margin: "5px" }}>
					<h1>PCB</h1>
					<AdminPageComponent
						componentName="PCB"
						fields={[
							"linkToImage",
							"linkToProduct",
							"price",
							"productName",
							"vendorName",
							"layoutSize",
						]}
						submitURL={API.addPCB}
					/>
				</div>
				<div style={{ border: "3px solid black", padding: "15px", margin: "5px" }}>
					<h1>KB CASE</h1>
					<AdminPageComponent
						componentName="KB CASE"
						fields={[
							"linkToImage",
							"linkToProduct",
							"price",
							"productName",
							"vendorName",
							"layoutSize",
							"material",
						]}
						submitURL={API.addKeyboardCase}
					/>
				</div>
			</div>
		);
	}
}
