import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import Buy from "../../components/Buy";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import ItemDetail, {
  initDetaulItemDetail,
} from "../../models/item-detail.model";
import "./index.css";

const ItemDetails = () => {
  const { id } = useParams<"id">();

  const [item, setItem] = useState<ItemDetail>(initDetaulItemDetail);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getItemDetail = async () => {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/items/${id}`
      );

      setItem(response.data);
      setLoading(false);
    };

    getItemDetail();
  }, [id]);

  return (
    <div className="container">
      <div className="content">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Breadcrumb items={item.categories} />
            <Card>
              <Buy req={item} />
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
