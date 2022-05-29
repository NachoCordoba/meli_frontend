import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ItemRoutes from "./Items";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items/*" element={<ItemRoutes />}></Route>
    </Routes>
  );
};

export default Router;
