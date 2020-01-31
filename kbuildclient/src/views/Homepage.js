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
				<BuildingBlock getDataFrom={API.getAllKeycaps} hasQuantity={false} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllSwitches} hasQuantity={true} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllPlates} hasQuantity={false} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllStabilizers} hasQuantity={false} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllPCBs} hasQuantity={false} />
			</div>
			<div className="homepage-container-child">
				<BuildingBlock getDataFrom={API.getAllKeyboardCases} hasQuantity={false} />
			</div>
			<div className="price homepage-container-child unselectable">
				<h2 style={{ padding: "0px", margin: "0px" }}>
					Total Price: ${currentTotalPrice.toFixed(2)}
				</h2>
			</div>
		</div>
	);
};

export default Homepage;
