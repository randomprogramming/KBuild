import React, { useState } from "react";

import "../css/Homepage.css";
import BuildingBlock from "../components/BuildingBlock";

const Homepage = () => {
	const pcbs = ["this one", "another one", "the last one", "no jk one more"];

	const [currentPage, setcurrentPage] = useState(0);
	const fun = i => {
		setcurrentPage(currentPage + i);
	};
	return (
		<div className="main-homepage-container">
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div>
					<button onClick={fun.bind(this, -1)}>left</button>
				</div>
				<div style={{ flex: 10, textAlign: "center" }}>
					<div>{pcbs[currentPage]}</div>
				</div>
				<div>
					<button onClick={fun.bind(this, 1)}>right</button>
				</div>
			</div>
			<BuildingBlock />
		</div>
	);
};

export default Homepage;
