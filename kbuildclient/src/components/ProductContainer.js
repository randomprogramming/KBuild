import React from "react";

import "../css/ProductContainer.css";

const ProductContainer = props => {
	return (
		<div className="product-main-container">
			<div className="product-image-container">
				<img className="product-image" src={props.linkToImage} alt="product"></img>
			</div>
			<div className="product-info-container">
				{props.color === undefined ? console.log("undef") : console.log("ye")}
			</div>
		</div>
	);
};
export default ProductContainer;
