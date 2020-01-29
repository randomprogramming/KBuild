import React from "react";

import "../css/ProductContainer.css";

const ProductContainer = props => {
	return (
		<div className="product-main-container">
			<div className="product-image-container">
				<img className="product-image" src={props.linkToImage} alt="product"></img>
			</div>
			<div className="product-info-container">
				<h2 className="product-name" style={{ margin: "0px", padding: "0px", maxWidth: "1000px" }}>
					{props.productName}
				</h2>
				<div className="product-information">
					<ul style={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
						{/* These are the fields that every product has */}
						<li>
							<h2 style={{ margin: "0px", padding: "0px" }}>{"$" + props.price}</h2>
						</li>
						<li>
							<a className="link-to-product" href={props.linkToProduct}>
								{props.vendorName}
							</a>
						</li>
						{/* These are the fields that only some product have, so we have to check */}
						<div style={{ marginTop: "1rem" }}>
							{/* (bool && Container) will render the Container only if the bool is true */}
							{props.manufacturer && <li>Manufacturer: {props.manufacturer}</li>}
							{props.layoutSize && <li>Layout Size: {props.layoutSize}</li>}
							{props.material && <li>Material: {props.material}</li>}
							{props.switchColor && <li>Switch Color: {props.switchColor}</li>}
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default ProductContainer;
