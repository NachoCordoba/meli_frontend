import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from ".";

test("Render Navbar Component", async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
});
