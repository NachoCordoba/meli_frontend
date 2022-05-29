import { render } from "@testing-library/react";
import axios from "axios";
import BuyList from ".";

test("Render BuyList Component", async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);

  expect(() => {
    render(<BuyList itemList={response.data} />);
  }).not.toThrow();
});
