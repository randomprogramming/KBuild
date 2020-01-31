import React, { useEffect } from "react";

import "../css/ProductContainer.css";
import { useDispatch } from "react-redux";
import priceActions from "../action/priceActions";
import QuantityBox from "./QuantityBox";

const ProductContainer = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		//when the component mounts, increase the price by its price
		dispatch(priceActions.increasePriceBy(props.price));

		//when the component unmounts, decrease the price by its price
		return function cleanup() {
			dispatch(priceActions.decreasePriceBy(props.price));
		};
	}, [dispatch, props.price]);
	return (
		<div className="product-main-container">
			<div className="product-image-container">
				<img className="product-image unselectable" src={props.linkToImage} alt="product"></img>
			</div>
			<div className="product-info-container">
				<h2 className="product-name" style={{ margin: "0px", padding: "0px", maxWidth: "1000px" }}>
					{props.productName}
				</h2>
				<div className="product-information">
					<div className="product-information-box">
						<ul style={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
							{/* These are the fields that every product has */}
							<li>
								<h2 style={{ margin: "0px", padding: "0px" }}>{"$" + props.price.toFixed(2)}</h2>
							</li>
							<li>
								<a className="link-to-product" href={props.linkToProduct}>
									{props.vendorName}
								</a>
							</li>
							{/* These are the fields that only some product have, so we have to check */}
							<div style={{ marginTop: "1rem" }}>
								{/* (bool && Container) will render the Container only if the bool is true */}
								{props.manufacturer && (
									<li>
										<span className="product-description-name">Manufacturer:</span>{" "}
										{props.manufacturer}
									</li>
								)}
								{props.layoutSize && (
									<li>
										<span className="product-description-name">Layout Size:</span>{" "}
										{props.layoutSize + "%"}
									</li>
								)}
								{props.material && (
									<li>
										<span className="product-description-name">Material:</span> {props.material}
									</li>
								)}
								{props.switchColor && (
									<li>
										<span className="product-description-name">Switch Color:</span>{" "}
										{props.switchColor}
									</li>
								)}
							</div>
						</ul>
					</div>
					{props.hasQuantity && (
						<div className="quantity-box">
							<QuantityBox />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default ProductContainer;
