const initialState = {
	isLoading: false,
	smurfs: [],
	error: "",
	values: {
		name: "",
		age: "",
		height: "",
	},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
