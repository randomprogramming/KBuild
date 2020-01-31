import React, { Component } from "react";
import axios from "axios";

export default class AdminPageComponent extends Component {
	constructor() {
		super();
		this.state = {};

		this.onUpdate = this.onUpdate.bind(this);
	}
	submitProduct() {
		axios({
			url: this.props.submitURL,
			method: "POST",
			withCredentials: true,
			data: this.formData(),
			headers: {
				"X-CSRF-TOKEN": this.props._csrf.token,
				"Content-Type": "application/json",
			},
		});
	}
	formData() {
		let tempData = {};
		this.props.fields.map(field => (tempData[field] = this.state[field]));
		return tempData;
	}
	onUpdate(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	render() {
		return (
			<div>
				{this.props.fields.map(field => {
					// For each field, create a <input />, at the end create a button which will submit the product to the server
					return (
						<div style={{ marginTop: "15px" }} key={field}>
							<input
								type="text"
								name={field}
								onChange={this.onUpdate}
								style={{ width: "50%", height: "2em" }}
							/>
							<label htmlFor={field}>{field}</label>
						</div>
					);
				})}
				<button onClick={this.submitProduct.bind(this)}>submit {this.props.componentName}</button>
			</div>
		);
	}
}
