import React from "react";
import { render } from "../../test/test-utils";
import Footer from "../Footer";

test("returns footer component", () => {
  const footer = render(<Footer />);
  expect(footer).toMatchSnapshot();
});
