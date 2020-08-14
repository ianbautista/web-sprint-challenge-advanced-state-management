import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

import { fetchSmurfs, addSmurf, handleChanges } from "../store/actions";
import AddSmurfForm from "./AddSmurfForm";
import SmurfsList from "./SmurfsList";
import Header from "./Header";

const App = (props) => {
	console.log(props);
	useEffect(() => {
		props.fetchSmurfs();
	}, []);

	return (
		<div className="App">
			<Header />
			{props.isLoading && <h4>Loading smurf data...</h4>}
			{props.error && <p className="error">What, woah...{props.error}</p>}
			<AddSmurfForm addSmurf={addSmurf} handleChanges={handleChanges} values={props.values} />
			<SmurfsList smurfs={props.smurfs} />
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

export default connect(mapStateToProps, { fetchSmurfs, addSmurf, handleChanges })(App);
