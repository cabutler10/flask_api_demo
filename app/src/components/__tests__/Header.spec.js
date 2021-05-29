import React from "react";
import { render } from "../../test/test-utils";
import Header from "../Header";

test("returns header component", () => {
  const header = render(<Header />);
  expect(header).toMatchSnapshot();
});
