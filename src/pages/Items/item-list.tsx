import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import BuyList from "../../components/BuyList";
import Loader from "../../components/Loader";
import ItemList, { initialItemList } from "../../models/item-list.model";
import "./index.css";

const ItemsList = () => {
  const [listItem, setListItems] = useState<ItemList>(initialItemList);
  const [isLoading, setLoading] = useState(false);

  const [queryParams] = useSearchParams();
  const navigate = useNavigate();

  const onSelectItem = (id: string) => {
    navigate(`/items/${id}`);
  };

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      let query = "";
      if (queryParams.get("search")) query = `?q=${queryParams.get("search")}`;

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/items${query}`
      );

      if (!response.data) throw new Error("Error");

      setListItems(response.data);
      setLoading(false);
    };

    getItems();
  }, [queryParams]);

  return (
    <div className="container">
      <div className="content">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Breadcrumb items={listItem.categories} />
            <BuyList
              itemList={{
                author: { name: "Ignacio", lastname: "Cordoba" },
                categories: [],
                items: listItem.items,
              }}
              onSelectItem={onSelectItem}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
