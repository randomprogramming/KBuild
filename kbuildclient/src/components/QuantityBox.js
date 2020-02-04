import React, { useState, useEffect } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "../css/QuantityBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuantityBox = props => {
	const iconSize = "2x";

	const [currentQuantity, setcurrentQuantity] = useState(props.currentQuantity);
	const [negativeIsClickable, setnegativeIsClickable] = useState(true);

	const changeQuantityBy = amount => {
		//Only numbers between 0 and 150 are allowed
		if (currentQuantity + amount >= 0 && currentQuantity + amount < 151) {
			setcurrentQuantity(currentQuantity + amount);
		}
	};

	const changeQuantityTo = amount => {
		// prevent the user to enter any number larger than 150 and non number things
		if (!isNaN(parseInt(amount))) {
			if (amount > 150) setcurrentQuantity(150);
			else setcurrentQuantity(parseInt(amount));
		}
	};

	useEffect(() => {
		//This runs whenever currentQuantity changes
		props.changeCurrentQuantity(currentQuantity);

		if (currentQuantity === 0) {
			setnegativeIsClickable(false);
		} else {
			if (!negativeIsClickable) {
				setnegativeIsClickable(true);
			}
		}
	}, [currentQuantity]);

	return (
		<div className="quantity-main-container">
			<div className="quantity-button-container">
				<FontAwesomeIcon
					icon={faPlus}
					size={iconSize}
					color="#b58db8"
					onClick={changeQuantityBy.bind(this, 1)}
				/>
			</div>
			<div>
				{/* <div className="quantity-container unselectable">QUANTITY~{currentQuantity}</div> */}
				<div className="quantity-container unselectable">QUANTITY</div>
			</div>
			<div>
				<input
					style={{ textAlign: "center", fontSize: "16px" }}
					type="number"
					min="0"
					max="150"
					value={currentQuantity}
					onChange={e => {
						changeQuantityTo(e.target.value);
					}}
				/>
			</div>
			<div
				className="quantity-button-container"
				onClick={changeQuantityBy.bind(this, -1)}
				style={{ cursor: negativeIsClickable ? "pointer" : "default" }}
			>
				<FontAwesomeIcon
					icon={faMinus}
					size={iconSize}
					color={negativeIsClickable ? "#b58db8" : "gray"}
				/>
			</div>
		</div>
	);
};

export default QuantityBox;
