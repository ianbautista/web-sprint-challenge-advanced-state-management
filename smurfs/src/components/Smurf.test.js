import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Smurf from "./Smurf";

test("renders Smurf without crashing", async () => {
	render(<Smurf />);
});
