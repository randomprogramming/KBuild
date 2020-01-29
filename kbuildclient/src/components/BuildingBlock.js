import React, { useState, useEffect } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import "../css/BuildingBlock.css";
import ProductContainer from "./ProductContainer";

const BuildingBlock = props => {
	// Change the properties of both arrows here
	const arrowIconSize = "9x";
	const arrowMarginSize = "7%";

	const [currentProductContainer, setcurrentProductContainer] = useState(0);
	const [productContainers, setproductContainers] = useState([]);

	const [leftIsClickable, setleftIsClickable] = useState(currentProductContainer !== 0);
	const [rightIsClickable, setrightIsClickable] = useState(false);

	const loadData = () => {
		axios.get(props.getDataFrom).then(res => extractData(res.data));
	};

	const extractData = data => {
		let tempProductContainers = [];

		//for each product that we fetched from the server, create a ProductContainer component from it and
		//store that ProductContainer in the tempContainers, which then gets saved to the state later
		data.map(product =>
			tempProductContainers.push(
				<ProductContainer linkToImage={product.linkToImage} name={product.vendorName} />
			)
		);

		if (tempProductContainers.length === 0 || tempProductContainers.length === 1) {
			setrightIsClickable(false);
		}
		setproductContainers(tempProductContainers);
	};

	const updateCurrentProductContainer = amount => {
		//currentProductContainer must be between 0 and productContainers.length
		if (currentProductContainer + amount < productContainers.length) {
			if (currentProductContainer + amount >= 0) {
				setcurrentProductContainer(currentProductContainer + amount);
			}
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		// If we are at the first element of the array, set the leftarrow to unclickable, otherwise make it clickable
		//also do the same for the right arrow and the last element of the array
		//This function only runs when currentProductContainer is updated
		if (currentProductContainer === 0) {
			setleftIsClickable(false);
		} else {
			if (!leftIsClickable) {
				setleftIsClickable(true);
			}
		}

		if (currentProductContainer === productContainers.length) {
			setrightIsClickable(false);
		} else {
			if (!rightIsClickable) {
				setrightIsClickable(true);
			}
		}
	}, [currentProductContainer]);

	return (
		<div className="main-buildingblock-container">
			<div
				className="buildingblock-left-container"
				style={Object.assign(
					{ marginLeft: arrowMarginSize, alignSelf: "center" },
					leftIsClickable ? styles.clickableButton : styles.notClickableButton
				)}
				onClick={updateCurrentProductContainer.bind(this, -1)}
			>
				<FontAwesomeIcon
					icon={faChevronLeft}
					size={arrowIconSize}
					color={leftIsClickable ? "#b58db8" : "gray"}
				/>
			</div>
			<div className="buildingblock-content-container">
				<div className="product-container">{productContainers[currentProductContainer]}</div>
			</div>
			<div
				className="buildingblock-right-container"
				style={Object.assign(
					{ marginRight: arrowMarginSize, alignSelf: "center" },
					rightIsClickable ? styles.clickableButton : styles.notClickableButton
				)}
				onClick={updateCurrentProductContainer.bind(this, 1)}
			>
				<FontAwesomeIcon
					icon={faChevronRight}
					size={arrowIconSize}
					color={rightIsClickable ? "#b58db8" : "gray"}
				/>
			</div>
		</div>
	);
};

// Change the margin of both arrows here

const styles = {
	clickableButton: {
		cursor: "pointer",
	},
	notClickableButton: {
		cursor: "default",
	},
};

export default BuildingBlock;
