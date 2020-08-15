import React from "react";
import { render } from "@testing-library/react";
import App from "components/App";

test("renders learn react link", () => {
    const { getAllByText } = render(<App />);
    const linkElement = getAllByText(/Hello world/i);
    expect(linkElement.length).toBe(2);
});
