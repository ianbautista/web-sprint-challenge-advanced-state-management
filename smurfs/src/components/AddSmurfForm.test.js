import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddSmurfForm from "./AddSmurfForm";

test("renders AddSmurfForm without crashing", async () => {
	render(<AddSmurfForm />);
});
