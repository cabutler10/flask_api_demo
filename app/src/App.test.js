import React from "react";
import { render } from "./test/test-utils";
import App from "./App";

test("renders without crashing", () => {
  const app = render(<App />);
  expect(app).not.toBeNull();
});
