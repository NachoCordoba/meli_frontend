import { render } from "@testing-library/react";
import axios from "axios";
import BuyListItem from ".";

test("Render BuyListItem Component", async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);

  expect(() => {
    render(<BuyListItem item={response.data.items[0]} />);
  }).not.toThrow();
});
