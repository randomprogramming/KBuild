const priceReducer = (state = 0, action) => {
	switch (action.type) {
		case "SET_PRICE":
			return action.payload.price;

		case "INC_PRICE":
			return state + action.payload.price;

		case "DEC_PRICE":
			return state - action.payload.price;

		default:
			return state;
	}
};

export default priceReducer;
