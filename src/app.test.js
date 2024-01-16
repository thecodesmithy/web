import React from "react";
import App from "./app";

describe("<App />", () => {
  it("should render without crashing", () => {
    const app = <App />;

    expect(app).not.toBe(null);
  });
});
