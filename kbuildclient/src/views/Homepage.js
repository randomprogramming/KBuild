import React from "react";

import "../css/Homepage.css";
import BuildingBlock from "../components/BuildingBlock";
import API from "../API";

const Homepage = () => {
	return (
		<div className="main-homepage-container">
			<BuildingBlock getDataFrom={API.getAllKeycaps} />
		</div>
	);
};

export default Homepage;
