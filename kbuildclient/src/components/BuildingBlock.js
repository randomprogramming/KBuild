import React, { useState, useEffect } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import "../css/BuildingBlock.css";
import ProductContainer from "./ProductContainer";
import Empty from "../images/empty.png";

const BuildingBlock = props => {
	// Change the properties of both arrows here
	const arrowIconSize = "9x";
	const arrowMarginSize = "12%";

	//default is 1 since at index 0 is the 'default' productContainer
	const [currentProductContainer, setcurrentProductContainer] = useState(1);
	const [productContainers, setproductContainers] = useState([]);

	const [leftIsClickable, setleftIsClickable] = useState(currentProductContainer !== 0);
	const [rightIsClickable, setrightIsClickable] = useState(false);

	//This is we we determine on what building block we are.
	//the getdatafrom are always the same format: '/api/getallPRODUCTNAME'
	//We can remove the '/api/getall' part and in that way know where we currently are
	const productName = props.getDataFrom.split("/api/getall")[1];

	const loadData = () => {
		axios.get(props.getDataFrom).then(res => extractData(res.data));
	};

	const getDefaultProductName = productName => {
		productName = productName.toLowerCase();
		// Turn the product name into something normal that the user can read
		if (productName === "keycaps") return "No keycaps";
		else if (productName === "switches") return "No switches";
		else if (productName === "plates") return "No plate";
		else if (productName === "stabilizers") return "No stabilizers";
		else if (productName === "pcbs") return "No PCB";
		else if (productName === "keyboardcases") return "No case";

		//If no productName matches were found, this will be okay
		return "No" + productName;
	};

	const extractData = data => {
		let tempProductContainers = [];

		// This is a default ProductContainer which can be selected if the user doesn't need the specific part
		// this should always be at index 0
		tempProductContainers.push(
			<ProductContainer
				isDefault
				hasQuantity={false}
				productName={getDefaultProductName(productName)}
				linkToImage={Empty}
				price={0}
			/>
		);

		//for each product that we fetched from the server, create a ProductContainer component from it and
		//store that ProductContainer in the tempContainers, which then gets saved to the state later
		//this is done to prevent continous saving to state, which causes unnecesary re-renders
		data.map(product =>
			tempProductContainers.push(
				// Whenever we add new properties to Products in database, we have to update this here
				// Also we have to actually create a <li> element to show it inside of ProductContainer
				<ProductContainer
					hasQuantity={props.hasQuantity}
					productName={product.productName}
					linkToImage={product.linkToImage}
					linkToProduct={product.linkToProduct}
					vendorName={product.vendorName}
					price={product.price}
					// The next properties can be undefined
					material={product.material}
					manufacturer={product.manufacturer}
					switchColor={product.switchColor}
					layoutSize={product.layoutSize}
				/>
			)
		);
		//if for some reason there's no or only 1 product container, this shouldn't happen really
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

		if (currentProductContainer === productContainers.length - 1) {
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

const styles = {
	clickableButton: {
		cursor: "pointer",
	},
	notClickableButton: {
		cursor: "default",
	},
};

export default BuildingBlock;
