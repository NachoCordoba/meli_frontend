import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemsList from "./item-list";

test("Render Item List", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemsList />} />
        <Route path="/items/" element={<ItemsList />} />
      </Routes>
    </BrowserRouter>
  );
});
