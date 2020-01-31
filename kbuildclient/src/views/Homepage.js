import React from "react";

import "../css/Homepage.css";
import BuildingBlock from "../components/BuildingBlock";
import API from "../API";
import { useSelector } from "react-redux";

const Homepage = () => {
	const currentTotalPrice = useSelector(state => state);

	return (
		<div className="main-homepage-container">
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllKeycaps} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllSwitches} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllPlates} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllStabilizers} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllPCBs} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllKeyboardCases} />
			</div>
			<div className="price homepage-container-child">
				<h2 style={{ padding: "0px", margin: "0px" }}>Total Price: ${currentTotalPrice}</h2>
			</div>
		</div>
	);
};

export default Homepage;
