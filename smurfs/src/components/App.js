import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

import { fetchSmurfs } from "../store/actions";

const App = (props) => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);

	return (
		<div className="App">
			<h1>SMURFS! W/Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<div>Start inside of your `src/index.js` file!</div>
			<div>Have fun!</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		smurfs: state.smurfs,
		error: state.error,
		values: {
			name: state.smurfs.name,
			age: state.smurfs.age,
			height: state.smurfs.height,
		},
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
