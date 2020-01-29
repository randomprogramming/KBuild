import React, { Component } from "react";
import axios from "axios";

export default class AdminPageComponent extends Component {
	constructor() {
		super();
		this.state = {};

		this.onUpdate = this.onUpdate.bind(this);
	}
	submitProduct() {
		axios.post(this.props.submitURL, this.formData(), {
			"Content-Type": "application/json",
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
					return (
						<div style={{ marginTop: "15px" }} key={field}>
							<input
								type="text"
								name={field}
								id={field}
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
