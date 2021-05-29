import React from "react";
import { render } from "../../test/test-utils";
// import { renderHook, act, fireEvent } from "@testing-library/react-hooks";
import Content from "../Content";

test("renders content component", () => {
  const content = render(<Content />);
  expect(content).toMatchSnapshot();
});

// test("loads greetings on click", () => {
//   const { getByLabelText, getByText } = render(<Content />);
//   const nameInput = getByLabelText(/name/i);
//   const loadButton = getByText(/load/i);
//   nameInput.value = "Mary";
//   fireEvent.click(loadButton);
// });
