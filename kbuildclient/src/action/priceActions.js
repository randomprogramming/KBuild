const setPrice = price => {
	return {
		type: "SET_PRICE",
		payload: { price },
	};
};

const increasePriceBy = price => {
	return {
		type: "INC_PRICE",
		payload: { price },
	};
};

const decreasePriceBy = price => {
	return {
		type: "DEC_PRICE",
		payload: { price },
	};
};

export default { setPrice, increasePriceBy, decreasePriceBy };
