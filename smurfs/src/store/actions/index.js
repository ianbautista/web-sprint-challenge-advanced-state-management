import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const HANDLE_CHANGES = "HANDLE_CHANGES";

export const fetchSmurfs = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_SMURFS_START });
		axios
			.get("http://localhost:3333/smurfs")
			.then((response) => {
				console.log(response);
				dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: FETCH_SMURFS_ERROR, payload: error.message });
			});
	};
};

export const addSmurf = (smurf) => {
	console.log(smurf);
	return (dispatch) => {
		dispatch({ type: FETCH_SMURFS_START });
		axios
			.post("http://localhost:3333/smurfs", smurf)
			.then((response) => {
				dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: FETCH_SMURFS_ERROR, payload: error.message });
			});
	};
};

export const handleChanges = (e) => {
	return (dispatch) => {
		dispatch({ type: HANDLE_CHANGES, payload: e });
	};
};
