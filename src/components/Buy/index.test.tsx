import { render } from "@testing-library/react";
import axios from "axios";
import Buy from ".";

test("Render Buy Component", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/items/MLA919458461`
  );

  expect(() => {
    render(<Buy req={response.data} />);
  }).not.toThrow();
});
