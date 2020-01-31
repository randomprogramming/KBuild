import React, { Component } from "react";
import axios from "axios";

import API from "../API";
import AdminPageComponent from "../components/AdminPageComponent";

export default class AdminPage extends Component {
	constructor() {
		super();
		this.state = {
			_csrf: {
				parameterName: "",
				token: "",
			},
		};
	}
	getLoginStatus() {
		axios.get(API.me).then(res => console.log(res));
	}
	componentDidMount() {
		axios.get(API.getcsrf).then(res => this.extractToken(res.data));
	}

	extractToken(fulltoken) {
		const parameterName = fulltoken.split(":")[0];
		const token = fulltoken.split(":")[1];
		this.setState({
			_csrf: {
				parameterName,
				token,
			},
		});
	}
	isInRole() {
		axios.get("/api/isinrole").then(res => console.log(res.data));
	}

	render() {
		return (
			<div>
				<button onClick={this.isInRole.bind(this)}>Is in admin</button>
				<button onClick={this.getLoginStatus.bind(this)}>Get logged status</button>
				<form action={API.login} method="POST">
					<div className="form-container">
						<div
							className="form-username-container"
							style={{ display: "flex", flexDirection: "column" }}
						>
							<div>
								<label htmlFor="username" className="label username-label">
									Username
								</label>
							</div>
							<input type="text" id="username" name="username" />
						</div>
						<div
							className="form-password-container"
							style={{ display: "flex", flexDirection: "column" }}
						>
							<div>
								<label htmlFor="password" className="label password-label">
									Password
								</label>
							</div>
							<input type="password" id="password" name="password" />
						</div>
						<div>
							<input
								type="hidden"
								name={this.state._csrf.parameterName}
								value={this.state._csrf.token}
							/>
						</div>
						<div className="submit-button-container">
							<input type="submit" id="submit" value="Sign In" />
						</div>
					</div>
				</form>
				<div>
					<h1>NOTES FOR FUTURE ADDITIONS TO THE DATABASE:</h1>
					<p>---need to be logged in to post products to the database</p>
					<p>
						---you can check if you're logged in with the Get logged status button, which prints to
						the console
					</p>
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
						_csrf={this.state._csrf}
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
						_csrf={this.state._csrf}
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
						_csrf={this.state._csrf}
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
						_csrf={this.state._csrf}
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
						_csrf={this.state._csrf}
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
						_csrf={this.state._csrf}
						submitURL={API.addKeyboardCase}
					/>
				</div>
			</div>
		);
	}
}
