import { Routes, Route } from "react-router-dom";
import ItemDetail from "./item-detail";
import ItemList from "./item-list";

const ItemRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path=":id" element={<ItemDetail />} />
    </Routes>
  );
};

export default ItemRoutes;
