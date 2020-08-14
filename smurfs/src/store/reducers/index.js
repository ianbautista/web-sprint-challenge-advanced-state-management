import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR } from "../actions";

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
		case FETCH_SMURFS_START:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload,
				error: "",
				values: {
					name: action.payload.name,
					age: action.payload.age,
					height: action.payload.height,
				},
			};
		case FETCH_SMURFS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
