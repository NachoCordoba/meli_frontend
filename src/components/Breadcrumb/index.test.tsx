import { render } from "@testing-library/react";
import Breadcrumb from ".";

test("Render Breadcrumb Component", () => {
  render(<Breadcrumb items={["Bread", "crumb", "de", "Prueba"]} />);
});
