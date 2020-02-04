import React, { useState, useEffect } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "../css/QuantityBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuantityBox = props => {
	const iconSize = "2x";

	const [currentQuantity, setcurrentQuantity] = useState(props.currentQuantity);
	const [negativeIsClickable, setnegativeIsClickable] = useState(true);

	const changeQuantityBy = amount => {
		if (currentQuantity + amount >= 0) {
			setcurrentQuantity(currentQuantity + amount);
		}
	};

	const changeQuantityTo = amount => {
		if (amount > 150) setcurrentQuantity(150);
		else setcurrentQuantity(parseInt(amount));
	};

	useEffect(() => {
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
		<div className="quantity-box-container">
			<div>
				<div className="quantity-button" onClick={changeQuantityBy.bind(this, 1)}>
					<div>
						<FontAwesomeIcon icon={faPlus} size={iconSize} color="#b58db8" />
					</div>
				</div>
				<div className="quantity-container unselectable">QUANTITY~{currentQuantity}</div>
				<div>
					<input
						type="number"
						min="0"
						max="150"
						value={currentQuantity}
						onChange={e => {
							changeQuantityTo(e.target.value);
						}}
					></input>
				</div>
				<div className="quantity-button" onClick={changeQuantityBy.bind(this, -1)}>
					<FontAwesomeIcon
						icon={faMinus}
						size={iconSize}
						color={negativeIsClickable ? "#b58db8" : "gray"}
					/>
				</div>
			</div>
		</div>
	);
};

export default QuantityBox;
