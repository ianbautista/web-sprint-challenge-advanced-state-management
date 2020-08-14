import React from "react";
import { fetchSmurfs, addSmurf, handleChanges } from "../store/actions";
import { connect } from "react-redux";

const AddSmurfForm = (props) => {
	console.log(props);
	return (
		<>
			<h1> Feeling gray? ADD a smurf to the crew!</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					props.addSmurf({
						name: props.values.name,
						age: props.values.age,
						height: props.values.height,
					});
					window.location.reload();
				}}
			>
				<label htmlFor="name">
					{" "}
					Name
					<input type="text" name="name" value={props.name} onChange={props.handleChanges} />
				</label>
				<br />
				<label htmlFor="age">
					{" "}
					Age
					<input type="text" name="age" value={props.age} onChange={props.handleChanges} />
				</label>
				<br />
				<label htmlFor="height">
					{" "}
					Height
					<input
						type="text"
						name="height"
						value={props.height}
						onChange={props.handleChanges}
					/>
				</label>{" "}
				<br />
				<button type="submit" name="submit">
					Spawn
				</button>
			</form>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		values: state.values,
	};
};

export default connect(mapStateToProps, { addSmurf, handleChanges, fetchSmurfs })(
	AddSmurfForm,
);
