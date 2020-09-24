import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

test("renders Header without crashing", async () => {
	render(<Header />);
});
